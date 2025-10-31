export default function Specials() {
  const dishes = [
    { name: "Pasta Alfredo", desc: "Creamy and rich with parmesan sauce." },
    { name: "Grilled Paneer", desc: "Perfectly marinated and cooked to perfection." },
    { name: "Brownie Sundae", desc: "Warm brownie served with vanilla ice cream." },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Today’s Specials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="border rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
            <p className="text-slate-600 dark:text-slate-300">{dish.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
