export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">WS2 Landing</h3>
            <p className="text-sm text-gray-600">
              Modern frontend architecture built with React, Vite, TypeScript
              and Tailwind CSS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#hero" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-black">
                  CTA
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Built for learning</li>
              <li>Frontend-only project</li>
              <li>No backend dependency</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} WS2 Landing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
