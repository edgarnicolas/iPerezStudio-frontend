import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="logo" className="mx-auto w-30 h-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-red-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('your-photos')} className="text-white hover:text-red-600 transition-colors">
              Your Photos
            </button>
            <button onClick={() => scrollToSection('book')} className="text-white hover:text-red-600 transition-colors">
              Book
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left text-white hover:text-red-600 transition-colors py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('your-photos')} 
              className="block w-full text-left text-white hover:text-red-600 transition-colors py-2"
            >
              Your Photos
            </button>
            <button 
              onClick={() => scrollToSection('book')} 
              className="block w-full text-left text-white hover:text-red-600 transition-colors py-2"
            >
              Book
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left text-white hover:text-red-600 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
