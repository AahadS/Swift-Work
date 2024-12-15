export const SponsorLogos = () => {
  const statistics = [
    { value: 10, label: 'Years of Experience' },
    { value: '20+', label: 'Countries Serviced' },
    { value: '30%', label: 'Increase in Productivity' },
  ];

  return (
    <div className="bg-white py-16 text-black">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-purple-500">
          Our Achievements
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          At Hirevity, we are dedicated to providing innovative software
          solutions and IT services that empower businesses to streamline
          operations and achieve their goals efficiently.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up text-center opacity-0"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <h3 className="text-6xl font-bold text-black">{stat.value}</h3>
              <p className="mt-2 text-lg text-purple-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
