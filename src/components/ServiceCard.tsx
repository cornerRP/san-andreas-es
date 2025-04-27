import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  color, 
  link 
}) => {
  return (
    <Card className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-lg">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader className={`bg-${color} text-white`}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className={`bg-${color} hover:bg-${color}/90 w-full`}>
          <Link to={link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;