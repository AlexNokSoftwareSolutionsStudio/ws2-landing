export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="font-bold">WS2 Landing</div>

        <nav className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-blue-500">
            Home
          </a>
          <a href="#features" className="hover:text-blue-500">
            Features
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#cta" className="hover:text-blue-500">
            CTA
          </a>
        </nav>
      </div>
    </header>
  );
}
