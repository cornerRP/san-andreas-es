import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://i.imgur.com/7bJ9LML.jpg')",
          filter: "brightness(0.5)"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            <span className="block text-secondary">Экстренные службы</span>
            <span className="block">Сан-Андреас</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-300">
            Обеспечиваем безопасность и порядок в штате. 
            Полиция, пожарная охрана и скорая помощь готовы прийти на помощь в любую минуту.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="hover-scale">
              <Link to="/join">Вступить в наши ряды</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover-scale">
              <Link to="#emergency-services">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;