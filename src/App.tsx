import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <section
          id="hero"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">Hero Section</h1>
        </section>

        <section
          id="features"
          className="h-screen flex items-center justify-center bg-gray-50"
        >
          <h2 className="text-4xl font-semibold">Features</h2>
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-semibold">About</h2>
        </section>

        <section
          id="cta"
          className="h-screen flex items-center justify-center bg-black text-white"
        >
          <h2 className="text-4xl font-semibold">Call To Action</h2>
        </section>
      </main>

      <footer className="p-10 text-center text-sm text-gray-500">Footer</footer>
    </div>
  );
}
