import { Coffee } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-amber-700" />
            <span className="text-2xl font-bold text-gray-900">Sippable</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('machines')} className="text-gray-700 hover:text-amber-700 font-medium transition">
              Machines
            </button>
            <button onClick={() => scrollToSection('venues')} className="text-gray-700 hover:text-amber-700 font-medium transition">
              Venues
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-amber-700 font-medium transition">
              Benefits
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 font-medium transition">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}