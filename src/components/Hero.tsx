import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://i.ytimg.com/vi/MWTAAyzrYXE/maxresdefault.jpg')",
          filter: "brightness(0.5)"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="py-20 md:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Экстренные службы</span>
              <span className="block text-secondary">Сан-Андреас</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl">
              Полицейский департамент, пожарная служба и медицинская помощь - на страже безопасности граждан штата 24/7
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button size="lg" variant="default">
                Вызвать помощь
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 text-white hover:bg-background/20">
                Как нас найти
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;