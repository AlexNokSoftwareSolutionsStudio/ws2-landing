import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="font-bold">WS2 Landing</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
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

        {/* Mobile button */}
        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop (solid dark layer) */}
          <div className="absolute inset-0 bg-black" onClick={toggleMenu} />

          {/* Drawer (fully opaque panel) */}
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50">
            {/* Header */}
            <div className="flex justify-between mb-8">
              <span className="font-bold">Menu</span>
              <button onClick={toggleMenu} className="text-xl">
                ✕
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 text-lg">
              <a href="#hero" onClick={toggleMenu}>
                Home
              </a>
              <a href="#features" onClick={toggleMenu}>
                Features
              </a>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
              <a href="#cta" onClick={toggleMenu}>
                CTA
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
