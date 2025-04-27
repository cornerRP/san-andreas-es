import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Flame, Stethoscope, Phone, MapPin, Mail, Github, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SA Emergency</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Экстренные службы штата Сан-Андреас всегда на страже закона и безопасности граждан
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Github">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Службы</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/police" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Полиция
                </Link>
              </li>
              <li>
                <Link to="/fire" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Flame className="h-4 w-4" /> Пожарная служба
                </Link>
              </li>
              <li>
                <Link to="/medic" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" /> Медицинская служба
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Карьера
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Правила
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> <span>911 (экстренный)</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> <span>info@saemergency.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> <span>Персинг-сквер, Лос-Сантос</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; 2025 Экстренные службы Сан-Андреас. Все права защищены. Corner Role Play.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;