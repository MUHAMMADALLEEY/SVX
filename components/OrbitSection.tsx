'use client';

import { useState, useEffect, useRef } from 'react';
import BrandLogo from '@/components/BrandLogo';
import DisplayHeading from '@/components/DisplayHeading';
import type { IconType } from 'react-icons';
import {
  FaBoxOpen,
  FaClipboardCheck,
  FaCommentDots,
  FaComments,
  FaFileInvoiceDollar,
  FaFlask,
  FaMagnifyingGlass,
  FaLocationCrosshairs,
  FaPenRuler,
  FaShieldHalved,
  FaSliders,
  FaTruckFast,
} from 'react-icons/fa6';

const stages = [
  {
    num: '01',
    title: 'CONSULTING',
    desc: 'We study the opportunity, customer, category and commercial objective. SVX then recommends the right product, sourcing and supply-chain route before development begins.',
    label: 'Consulting',
    icon: FaComments,
  },
  {
    num: '02',
    title: 'REQUIREMENTS',
    desc: 'We define product type, target consumer, specifications, quantity, target price, delivery date and destination market. Testing, packaging and compliance requirements are recorded in one clear brief.',
    label: 'Requirements',
    icon: FaClipboardCheck,
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'The approved brief becomes a practical product direction covering materials, construction, colour, fit, performance and branding. Technical packs and artwork give factories an accurate development standard.',
    label: 'Design',
    icon: FaPenRuler,
  },
  {
    num: '04',
    title: 'SOURCING',
    desc: 'SVX matches each product with capable factories based on machinery, technical skill, compliance, capacity, quality and cost. Commercial terms and production feasibility are checked before placement.',
    label: 'Sourcing',
    icon: FaMagnifyingGlass,
  },
  {
    num: '05',
    title: 'SAMPLES',
    desc: 'Development samples confirm appearance, construction, materials, fit and performance. Buyer comments are recorded, revisions are controlled and the approved sample becomes the production reference.',
    label: 'Samples',
    icon: FaFlask,
  },
  {
    num: '06',
    title: 'CONTROL FRAMEWORK',
    desc: 'A clear critical path assigns milestones, approvals, responsibilities and quality checkpoints. SVX coordinates buyer and factory decisions to reduce delays, misunderstandings and avoidable production risk.',
    label: 'Control Framework',
    icon: FaSliders,
  },
  {
    num: '07',
    title: 'COMPLIANCE',
    desc: 'Factory status, social compliance, restricted substances, product safety and market-specific standards are reviewed. Required laboratory tests and certificates are completed before shipment.',
    label: 'Compliance',
    icon: FaShieldHalved,
  },
  {
    num: '08',
    title: 'FINANCIALS / CONTRACT',
    desc: 'Final costing, currency, payment terms, incoterms, quantities and delivery commitments are agreed. Contracts and purchase-order responsibilities protect both buyer and production partner.',
    label: 'Financials / Contract',
    icon: FaFileInvoiceDollar,
  },
  {
    num: '09',
    title: 'TRANSPORTATION',
    desc: 'SVX plans the most suitable air, sea, road or combined freight route. Bookings, packing lists, commercial documents and delivery schedules are coordinated with the relevant partners.',
    label: 'Transportation',
    icon: FaTruckFast,
  },
  {
    num: '10',
    title: 'TRACKING & TRACEABILITY',
    desc: 'Materials, approvals, production, inspections and shipment milestones remain visible from source to destination. Clear reporting gives buyers early warning of risks and a reliable product history.',
    label: 'Tracking & Traceability',
    icon: FaLocationCrosshairs,
  },
  {
    num: '11',
    title: 'DELIVERY',
    desc: 'Final goods and documents are checked against the order and coordinated through to the agreed destination. The programme arrives retail-ready, accurately packed and supported through handover.',
    label: 'Delivery',
    icon: FaBoxOpen,
  },
  {
    num: '12',
    title: 'FEEDBACK',
    desc: 'Buyer, customer and market feedback is reviewed alongside quality and delivery performance. These insights improve the product, strengthen future programmes and support better repeat-order decisions.',
    label: 'Feedback',
    icon: FaCommentDots,
  },
];

export default function OrbitSection() {
  const [currentStage, setCurrentStage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectStage = (index: number) => {
    setCurrentStage(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timerRef.current = setInterval(() => {
        setCurrentStage((prev) => (prev + 1) % stages.length);
      }, 5200);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timeoutId = setTimeout(() => {
        timerRef.current = setInterval(() => {
          setCurrentStage((prev) => (prev + 1) % stages.length);
        }, 5200);
      }, 1400);
    }
    return () => {
      clearTimeout(timeoutId);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const active = stages[currentStage];

  return (
    <section className="orbit-section" id="network">
      <div className="orbit-copy">
        <p className="eyebrow">THE SVX VALUE PROPOSITION</p>
        <DisplayHeading>
          MANUFACTURE ECO SYSTEM
          <br />
          MEETS THE DIGITAL
          <br />
          SUPPLY CHAIN
        </DisplayHeading>
        <p>
          Every stage informs the next. Buyer requirements stay visible from
          consulting and design through production, traceability and delivery.
        </p>

        {/* Crawler-accessible index of all 12 stages */}
        <ol className="sr-only">
          {stages.map((stage) => (
            <li key={stage.num}>
              <strong>{stage.num} {stage.title}:</strong> {stage.desc}
            </li>
          ))}
        </ol>

        <div className="stage-detail" aria-live="polite">
          <span id="stageNumber">{active.num}</span>
          <div>
            <b id="stageTitle">{active.title}</b>
            <p id="stageText">{active.desc}</p>
          </div>
        </div>
      </div>

      <div
        className="orbit-wrap twelve"
        aria-label="Interactive 12-stage SVX digital supply chain"
      >
        <div className="orbit-rings">
          <div className="ring ring-a" />
          <div className="ring ring-b" />
          <div className="ring ring-c" />
        </div>

        <div className="orbit-sweep">
          <i />
        </div>

        <div className="orbit-core">
          <BrandLogo
            variant="dark"
            className="w-[72%] h-auto max-h-[36px]"
            title="SVX"
          />
          <span>
            DIGITAL
            <br />
            SUPPLY CHAIN
          </span>
        </div>

        {stages.map((stage, idx) => {
          const StageIcon: IconType = stage.icon;
          const nodeClass = `node n${idx + 1} ${
            idx === currentStage ? 'active' : ''
          }`;
          return (
            <button
              key={stage.num}
              type="button"
              className={nodeClass}
              data-index={idx}
              onClick={() => selectStage(idx)}
              aria-label={`${stage.num}: ${stage.label}`}
            >
              <i aria-hidden="true"><StageIcon /></i>
              <b>{stage.label}</b>
            </button>
          );
        })}
      </div>
    </section>
  );
}
