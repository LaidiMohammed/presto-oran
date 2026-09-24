import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">— 404 —</p>
      <h1 className="h-display mt-4 text-7xl sm:text-8xl">Lost in <span className="gold-text italic">the Maison?</span></h1>
      <p className="mt-4 max-w-md text-smoke">This page slipped backstage. Return to the runway.</p>
      <Link href="/" className="btn-gold mt-8">Back Home</Link>
    </div>
  );
}
