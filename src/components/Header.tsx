
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              NEST
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">
              Início
            </a>
            <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
              Funcionalidades
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">
              Depoimentos
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors">
              Planos
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/25">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">
                Início
              </a>
              <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
                Funcionalidades
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">
                Depoimentos
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors">
                Planos
              </a>
              <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                Contato
              </a>
              <Button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white mt-4">
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
