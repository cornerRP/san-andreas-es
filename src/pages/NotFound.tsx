import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="text-center px-4">
          <div className="mb-6 text-9xl font-bold text-primary">404</div>
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Кажется, вы заблудились в Сан-Андреас. Вернитесь на главную страницу или воспользуйтесь навигацией.
          </p>
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;