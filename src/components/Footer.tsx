import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">SA Emergency</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Экстренные службы штата Сан-Андреас всегда готовы прийти на помощь гражданам.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Службы</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/police" className="text-muted-foreground hover:text-primary">
                  Полиция
                </Link>
              </li>
              <li>
                <Link to="/fire" className="text-muted-foreground hover:text-primary">
                  Пожарная служба
                </Link>
              </li>
              <li>
                <Link to="/medic" className="text-muted-foreground hover:text-primary">
                  Медицинская служба
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-muted-foreground hover:text-primary">
                  Правила RP
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Экстренный вызов: 911
              </li>
              <li className="text-muted-foreground">
                Полиция: 555-LSPD (5773)
              </li>
              <li className="text-muted-foreground">
                Пожарная: 555-SAFD (7233)
              </li>
              <li className="text-muted-foreground">
                Медики: 555-SAMD (7263)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Corner Role Play. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            GTA SA:MP RP Server | Экстренные службы
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;