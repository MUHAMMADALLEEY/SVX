'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

const productCategories = [
  'Socks',
  'Footballs',
  'Bags',
  'T-Shirts',
  'Sports Products',
  'Accessories',
  'Other',
] as const;

type ProductCategory = (typeof productCategories)[number];
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function normalizeCategory(category?: string): ProductCategory | '' {
  const match = productCategories.find(
    (option) => option.toLowerCase() === category?.trim().toLowerCase(),
  );
  return match ?? '';
}

export function openContactBrief(defaultCategory?: string) {
  window.dispatchEvent(
    new CustomEvent('svx:open-contact-brief', { detail: { defaultCategory } }),
  );
}

type ContactBriefButtonProps = {
  children: React.ReactNode;
  className?: string;
  defaultCategory?: string;
};

export function ContactBriefButton({
  children,
  className,
  defaultCategory,
}: ContactBriefButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openContactBrief(defaultCategory)}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}

export default function ContactBriefModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<ProductCategory | ''>('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const historyEntryRef = useRef(false);

  function closeModal() {
    setIsOpen(false);
    setStatus('idle');
    setMessage('');
    if (historyEntryRef.current) {
      historyEntryRef.current = false;
      window.history.back();
    }
  }

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<{ defaultCategory?: string }>).detail;
      setCategory(normalizeCategory(detail?.defaultCategory));
      setStatus('idle');
      setMessage('');
      if (!historyEntryRef.current) {
        window.history.pushState(
          { ...(window.history.state ?? {}), svxContactBrief: true },
          '',
          window.location.href,
        );
        historyEntryRef.current = true;
      }
      setIsOpen(true);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    const handleHistoryBack = () => {
      historyEntryRef.current = false;
      setIsOpen(false);
      setStatus('idle');
      setMessage('');
    };

    window.addEventListener('svx:open-contact-brief', handleOpen);
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('popstate', handleHistoryBack);
    return () => {
      window.removeEventListener('svx:open-contact-brief', handleOpen);
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('popstate', handleHistoryBack);
    };
  }, []);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as {
        message?: string;
        success?: boolean;
      };

      if (!response.ok || !body.success) {
        throw new Error(body.message || 'We could not send your brief. Please try again.');
      }

      form.reset();
      setCategory('');
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'We could not send your brief. Please try again.');
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#03060bdd] px-4 py-6 backdrop-blur-md sm:items-center"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brief-modal-title"
        className="w-full max-w-3xl rounded-2xl border border-white/15 bg-[#0d131f] p-5 shadow-2xl shadow-black/60 sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="mb-2 text-[11px] font-extrabold tracking-[0.18em] text-[#4e9dff]">SVX / SPECIFICATION BRIEF</p>
            <h2 id="brief-modal-title" className="text-3xl font-extrabold text-white sm:text-4xl">Start your project brief</h2>
            <p className="mt-2 max-w-xl text-sm text-[#aab3c1]">Tell us what you need and the SVX sales team will be in touch.</p>
          </div>
          <button ref={closeButtonRef} type="button" onClick={closeModal} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-white hover:bg-white/10" aria-label="Close brief form">×</button>
        </div>

        {status === 'success' ? (
          <div className="rounded-xl border border-[#4e9dff]/40 bg-[#086dff]/10 px-6 py-12 text-center">
            <p className="text-sm font-bold tracking-widest text-[#4e9dff]">BRIEF RECEIVED</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white">Thank you.</h3>
            <p className="mx-auto mt-3 max-w-md text-[#c1c8d2]">Your specification brief is on its way to the SVX sales team. We’ll be in touch shortly.</p>
            <button type="button" onClick={closeModal} className="mt-7 rounded-md bg-white px-5 py-3 text-sm font-extrabold tracking-wide text-[#070a10]">CLOSE</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" />
            <Field label="Work email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
            <Field label="Company name" name="company" autoComplete="organization" maxLength={120} placeholder="Company (optional)" />
            <label className="grid gap-1.5 text-sm font-semibold text-white">Product category
              <select name="productInterest" required value={category} onChange={(event) => setCategory(event.target.value as ProductCategory)} className="h-11 rounded-md border border-white/15 bg-[#070a10] px-3 text-sm text-white outline-none focus:border-[#4e9dff]">
                <option value="" disabled>Select a category</option>
                {productCategories.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <Field label="Approximate quantity" name="quantity" maxLength={100} placeholder="e.g. 500 units" />
            <Field label="Destination market" name="market" maxLength={120} placeholder="e.g. United Kingdom" />
            <label className="grid gap-1.5 text-sm font-semibold text-white sm:col-span-2">Specification details / requirements
              <textarea name="message" rows={5} required minLength={5} maxLength={4000} placeholder="Materials, product details, branding, packaging, or any key requirements." className="resize-y rounded-md border border-white/15 bg-[#070a10] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#788393] focus:border-[#4e9dff]" />
            </label>
            <label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            {status === 'error' && <p className="rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-100 sm:col-span-2" role="alert">{message}</p>}
            <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center">
              <p className="text-xs text-[#8f99a8]">We’ll only use your details to respond to this brief.</p>
              <button type="submit" disabled={status === 'sending'} className="rounded-md bg-[#086dff] px-5 py-3 text-sm font-extrabold tracking-wide text-white transition hover:bg-[#287fff] disabled:cursor-wait disabled:opacity-60">
                {status === 'sending' ? 'SENDING BRIEF…' : 'SUBMIT BRIEF ↗'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className="grid gap-1.5 text-sm font-semibold text-white">{label}<input {...props} className="h-11 rounded-md border border-white/15 bg-[#070a10] px-3 text-sm font-normal text-white outline-none placeholder:text-[#788393] focus:border-[#4e9dff]" /></label>;
}
