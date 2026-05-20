import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <Hero />
        <Features />

        <section id="about" className="section">
          <h2 className="text-4xl font-semibold text-center">About</h2>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
