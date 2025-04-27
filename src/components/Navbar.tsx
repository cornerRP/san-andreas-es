import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Flame, Stethoscope, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">SA Emergency</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Главная
            </Link>
            <Link to="/police" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Shield className="w-4 h-4 mr-1" /> Полиция
            </Link>
            <Link to="/fire" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Flame className="w-4 h-4 mr-1" /> Пожарная
            </Link>
            <Link to="/medic" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Stethoscope className="w-4 h-4 mr-1" /> Медики
            </Link>
            <Button variant="default" size="sm">
              Играть сейчас
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/police" 
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="w-4 h-4 mr-2" /> Полиция
            </Link>
            <Link 
              to="/fire" 
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Flame className="w-4 h-4 mr-2" /> Пожарная
            </Link>
            <Link 
              to="/medic" 
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Stethoscope className="w-4 h-4 mr-2" /> Медики
            </Link>
            <Button className="w-full mt-2" size="sm">
              Играть сейчас
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;