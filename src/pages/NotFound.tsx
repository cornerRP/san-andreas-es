import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <ShieldAlert className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-foreground mb-4">404 - Страница не найдена</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Похоже, вы заблудились в Сан-Андреасе. Эта страница не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="tel:911">Вызвать помощь</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;