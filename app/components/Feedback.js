

export default function Feedback() {
  const Feedback = [
    {
      name: "Matthew J. Wyman",
      role: "Senior Consultant",
      feedback:
        "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
      rating: 5,
      mainImg:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      avatars: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/36.jpg",
        "https://randomuser.me/api/portraits/women/32.jpg",
      ],
    },
  ];

  return (
    <div className="bg-[#f5f5f5] py-20 px-6 md:px-20 text-center">
      <p className="text-red-600 text-sm mb-3 tracking-wider">
        --- HAPPY CUSTOMERS ---
      </p>
      <h2 className="text-4xl font-bold mb-10 text-black">
        Our Customers Feedback
      </h2>

      {Feedback.map((t, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row justify-center items-center gap-10"
        >
       
          <div className="relative w-[300px] h-[300px] rounded-[60px] overflow-hidden">
            <Image
              src={t.mainImg}
              alt="Customer"
              fill
              className="object-cover"
            />
          
            <div className="absolute top-[-20px] right-[-20px] flex flex-col gap-4">
              {t.avatars.map((img, j) => (
                <div
                  key={j}
                  className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-3">
              {Array.from({ length: t.rating }).map((_, k) => (
                <span key={k} className="text-yellow-400 text-xl">★</span>
              ))}
              <p className="text-gray-500">(5/5)</p>
            </div>
            <h3 className="text-3xl font-semibold text-black mb-4">
              The best food ever
            </h3>
            <p className="text-gray-600 italic mb-6">“{t.feedback}”</p>
            <hr className="border-gray-300 mb-3" />
            <p className="font-bold text-black">{t.name}</p>
            <p className="text-red-600 text-sm font-semibold">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
