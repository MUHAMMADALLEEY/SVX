import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070a10] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <p className="text-xs md:text-sm font-extrabold tracking-widest text-[#086dff] uppercase mb-3">
          404 ERROR · PAGE NOT FOUND
        </p>
        <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          LOOKS LIKE THIS ROUTE HAS MOVED
        </h1>
        <p className="text-base md:text-lg text-[#c1c8d2] max-w-xl mb-8 leading-relaxed">
          The product category or page you are looking for has been relocated or updated in our manufacturing programme.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center max-w-lg">
          <Link href="/" className="cta">
            RETURN TO HOMEPAGE <span>→</span>
          </Link>
          <Link href="/products/socks" className="cta light">
            SOCKS
          </Link>
          <Link href="/products/footballs" className="cta light">
            FOOTBALLS
          </Link>
          <Link href="/products/bags" className="cta light">
            BAGS
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

