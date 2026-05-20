type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Fast Performance",
    description: "Optimized Vite build with instant HMR and fast rendering.",
  },
  {
    title: "Scalable Architecture",
    description: "Modular React components ready for large-scale apps.",
  },
  {
    title: "Modern UI Stack",
    description: "Tailwind CSS utility-first styling system.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to build modern frontend applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
