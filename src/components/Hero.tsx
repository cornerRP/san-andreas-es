import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-center bg-cover z-0" 
        style={{ 
          backgroundImage: 'url("https://static.wikia.nocookie.net/gtawiki/images/c/c2/LosSantos-GTASA-Panorama.jpg/revision/latest?cb=20140328030154")', 
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Экстренные службы Сан-Андреас
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Мы обеспечиваем безопасность и защиту для всех жителей штата Сан-Андреас. Доверьте свою безопасность профессионалам.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-medium">
              Экстренный вызов 911
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Подробнее о службах <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;