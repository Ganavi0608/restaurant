import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="text-center py-16 bg-orange-50 dark:bg-slate-800">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
        Restan Bistro blends modern flavors with traditional recipes, offering a
        unique dining experience in the heart of the city.
      </p>
      <Link
        href="/about"
        className="px-6 py-3 border rounded text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white transition"
      >
        Read More
      </Link>
    </section>
  );
}
