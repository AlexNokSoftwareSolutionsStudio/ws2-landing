export default function CTA() {
  return (
    <section id="cta" className="section bg-black text-white">
      <div className="container text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to build something great?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Start using a modern React + Vite + Tailwind architecture designed for
          scalable frontend systems.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
