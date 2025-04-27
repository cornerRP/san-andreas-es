import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  color: 'primary' | 'secondary' | 'accent';
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  color,
  link
}) => {
  // Определяем цвета для разных типов служб
  const colorClasses = {
    primary: 'border-primary hover:border-primary/80',
    secondary: 'border-secondary hover:border-secondary/80',
    accent: 'border-accent hover:border-accent/80'
  };

  const buttonVariant = {
    primary: 'default',
    secondary: 'secondary',
    accent: 'outline'
  };

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${colorClasses[color]} border-2`}>
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          onError={(e) => {
            // Fallback image if the URL doesn't load
            (e.target as HTMLImageElement).src = "https://static.wikia.nocookie.net/gtawiki/images/3/33/Los_Santos_from_the_south.jpg";
          }}
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant={buttonVariant[color]} asChild className="w-full mt-2 group">
          <Link to={link} className="flex items-center justify-between">
            <span>Подробнее</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;