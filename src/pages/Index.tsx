import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Flame, Stethoscope, Users, Award, Clock } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Экстренные службы */}
        <section id="emergency-services" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Наши подразделения</Badge>
              <h2 className="text-3xl font-bold text-foreground">Экстренные службы Сан-Андреас</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Познакомьтесь с организациями, которые ежедневно обеспечивают безопасность штата
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Полицейский департамент" 
                description="Поддержание порядка и защита закона в Сан-Андреас. LSPD, SFPD и LVPD работают вместе для обеспечения безопасности граждан."
                imageUrl="https://static.wikia.nocookie.net/gtawiki/images/8/82/LSPDHQ-GTASA-exterior.jpg" 
                color="primary"
                link="/police"
              />
              
              <ServiceCard 
                title="Пожарная служба" 
                description="Круглосуточная работа по предотвращению и тушению пожаров. Спасатели SAFD всегда готовы прийти на помощь в экстренных ситуациях."
                imageUrl="https://static.wikia.nocookie.net/gtawiki/images/7/79/LSFD-GTASA-Headquaters.jpg" 
                color="secondary"
                link="/fire"
              />
              
              <ServiceCard 
                title="Медицинская служба" 
                description="Оказание экстренной медицинской помощи и лечение граждан. Профессиональные врачи SAMD спасают жизни каждый день."
                imageUrl="https://static.wikia.nocookie.net/gtawiki/images/c/c1/AllSaintsGeneralHospital-GTASA-exterior.jpg" 
                color="accent"
                link="/medic"
              />
            </div>
          </div>
        </section>
        
        {/* Информация о сервере */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">GTA SAMP RP</Badge>
              <h2 className="text-3xl font-bold text-foreground">Corner Role Play</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Один из лучших ролевых серверов в GTA SAMP с проработанной системой экстренных служб
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Активное сообщество</h3>
                  <p className="text-muted-foreground">Более 1000 игроков онлайн ежедневно, полное погружение в ролевую игру</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Качественный RP</h3>
                  <p className="text-muted-foreground">Серьезный подход к ролевой игре, проработанные механики и рабочие процессы</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Карьерный рост</h3>
                  <p className="text-muted-foreground">Возможность построить карьеру в экстренных службах, получая повышения за заслуги</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Табы с информацией */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Полезная информация</Badge>
              <h2 className="text-3xl font-bold text-foreground">Помощь гражданам</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Как воспользоваться услугами экстренных служб в игровом мире
              </p>
            </div>
            
            <Tabs defaultValue="emergency" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="emergency" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" /> 
                  Экстренные случаи
                </TabsTrigger>
                <TabsTrigger value="contacts" className="flex items-center gap-2">
                  <Flame className="w-4 h-4" /> 
                  Контакты служб
                </TabsTrigger>
                <TabsTrigger value="rules" className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> 
                  Правила вызова
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="emergency" className="mt-6 p-6 bg-card rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Что делать в экстренных случаях</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Наберите 911 на игровом телефоне</li>
                  <li>Сообщите оператору о происшествии</li>
                  <li>Укажите точное местоположение</li>
                  <li>Опишите ситуацию кратко и чётко</li>
                  <li>Оставайтесь на линии, пока оператор не завершит вызов</li>
                  <li>По возможности оставайтесь на месте до прибытия экстренных служб</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="contacts" className="mt-6 p-6 bg-card rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Контакты экстренных служб</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <strong>Полиция:</strong> 555-LSPD (5773)
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-secondary" />
                    <div>
                      <strong>Пожарная служба:</strong> 555-SAFD (7233)
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-accent" />
                    <div>
                      <strong>Медицинская служба:</strong> 555-SAMD (7263)
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <strong>Единый экстренный номер:</strong> 911
                    </div>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="rules" className="mt-6 p-6 bg-card rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Правила вызова экстренных служб</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Вызывайте службы только при реальной необходимости</li>
                  <li>Не делайте ложных вызовов - это наказуемо</li>
                  <li>Относитесь с уважением к сотрудникам служб</li>
                  <li>Следуйте указаниям прибывших специалистов</li>
                  <li>Помните, что все действия должны соответствовать правилам RolePlay</li>
                  <li>Нарушение правил может привести к штрафу или даже заключению</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;