import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">VLM</span> Digital
            </span>
            <span className="text-xs text-gray-500 ml-2 hidden sm:block">MARKETING AGENCY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ГОЛОВНА
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center"
            >
              ПОСЛУГИ
              
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ПРО НАС
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              ПРОЕКТИ
            </a>
            <a 
              href="#contacts" 
              onClick={(e) => handleNavClick(e, '#contacts')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              КОНТАКТИ
            </a>
          </nav>

          {/* Phone, Social & Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <a 
              href="tel:+380506782481" 
              className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 underline"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span>050-678-24-81</span>
            </a>
            <div className="hidden lg:flex items-center space-x-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition">
                <Phone className="w-4 h-4 text-gray-700" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition">
                <span className="text-xs">TG</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition">
                <span className="text-xs">IG</span>
              </a>
            </div>
            <button 
              onClick={onOpenModal}
              className="hidden md:block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              <span className="hidden lg:inline">КОНСУЛЬТАЦІЯ</span>
              <span className="lg:hidden">КОНСУЛЬТАЦІЯ</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ГОЛОВНА
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ПОСЛУГИ
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ПРО НАС
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                ПРОЕКТИ
              </a>
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, '#contacts')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                КОНТАКТИ
              </a>
              <a href="tel:+380506782481" className="text-blue-600 font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                050-678-24-81
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

