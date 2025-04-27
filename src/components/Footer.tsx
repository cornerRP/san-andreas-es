import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">San Andreas Emergency</h3>
            <p className="text-sm text-gray-300">
              Официальный сайт экстренных служб штата Сан-Андреас на сервере Corner Role Play.
              Наша миссия - обеспечивать безопасность и порядок в игровом мире.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm text-gray-300 hover:text-white">
                  Как присоединиться
                </Link>
              </li>
              <li>
                <a href="https://cornerroleplay.com" className="text-sm text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Corner Role Play
                </a>
              </li>
              <li>
                <a href="https://discord.gg/cornerrp" className="text-sm text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Discord сервер
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-sm text-gray-300 mb-2">
              Для экстренных вызовов в игре: 911
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Полиция: 555-LSPD
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Пожарная служба: 555-SAFD
            </p>
            <p className="text-sm text-gray-300">
              Медицинская служба: 555-SAMD
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-300">
            &copy; {new Date().getFullYear()} San Andreas Emergency Services. 
            Все права защищены. Это неофициальный фан-сайт, не связанный с Rockstar Games.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;