export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          {/* Badge / micro context */}
          <p className="text-sm text-gray-500 mb-4">
            🚀 Modern React Landing Template
          </p>

          {/* H1 (SEO-critical) */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build fast, scalable, modern web experiences
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600">
            A production-ready frontend architecture using React, Vite,
            TypeScript and Tailwind CSS.
          </p>

          {/* CTA block */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">Get Started</button>

            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
