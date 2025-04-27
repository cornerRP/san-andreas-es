import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Flame, Stethoscope, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-foreground flex items-center gap-2">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <span>SA Emergency</span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-4 items-center">
              <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Главная
              </Link>
              <Link to="/police" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                <ShieldAlert className="h-4 w-4" /> Полиция
              </Link>
              <Link to="/fire" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                <Flame className="h-4 w-4" /> Пожарная служба
              </Link>
              <Link to="/medic" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                <Stethoscope className="h-4 w-4" /> Медицинская служба
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button size="sm" variant="default">
              Экстренный вызов
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <Link
              to="/"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/police"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShieldAlert className="h-5 w-5" /> Полиция
            </Link>
            <Link
              to="/fire"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Flame className="h-5 w-5" /> Пожарная служба
            </Link>
            <Link
              to="/medic"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Stethoscope className="h-5 w-5" /> Медицинская служба
            </Link>
            <div className="pt-2">
              <Button size="sm" variant="default" className="w-full">
                Экстренный вызов
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;