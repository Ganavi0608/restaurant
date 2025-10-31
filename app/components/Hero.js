import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg:orange-100 dark:from-slate-800 dark:to-slate-900">
      <h1 className="text-5xl font-bold mb-4">Welcome to Restan Bistro</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
        Experience the perfect blend of taste and comfort. A place where every
        meal feels like home.
      </p>
      <Link
        href="/menu"
        className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
      >
        Explore Menu
      </Link>
    </section>
  );
}
