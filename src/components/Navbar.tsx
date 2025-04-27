import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                className="h-10 w-auto" 
                src="/logo-b.svg" 
                alt="SA Emergency Services" 
              />
              <span className="ml-2 text-white font-bold text-lg">SA Emergency</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-white hover:bg-primary-foreground/10 px-3 py-2 rounded-md text-sm font-medium">
              Главная
            </Link>
            <Link to="/police" className="text-white hover:bg-primary-foreground/10 px-3 py-2 rounded-md text-sm font-medium">
              Полиция
            </Link>
            <Link to="/fire" className="text-white hover:bg-primary-foreground/10 px-3 py-2 rounded-md text-sm font-medium">
              Пожарная служба
            </Link>
            <Link to="/medic" className="text-white hover:bg-primary-foreground/10 px-3 py-2 rounded-md text-sm font-medium">
              Медицинская служба
            </Link>
            <Link to="/join" className="text-white hover:bg-primary-foreground/10 px-3 py-2 rounded-md text-sm font-medium">
              Как вступить
            </Link>
            <Button variant="secondary" size="sm" className="ml-2">
              Подать заявку
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-foreground/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="text-white hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/police" 
            className="text-white hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Полиция
          </Link>
          <Link 
            to="/fire" 
            className="text-white hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Пожарная служба
          </Link>
          <Link 
            to="/medic" 
            className="text-white hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Медицинская служба
          </Link>
          <Link 
            to="/join" 
            className="text-white hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Как вступить
          </Link>
          <Button variant="secondary" className="w-full mt-2">
            Подать заявку
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;