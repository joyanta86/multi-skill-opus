import { MapPin, Navigation, Zap, FileCheck, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Availability = () => {
  const { t } = useLanguage();

  const items = [
    { icon: MapPin, text: t.availability.location },
    { icon: Navigation, text: t.availability.relocation },
    { icon: Zap, text: t.availability.availability },
    { icon: FileCheck, text: t.availability.workPermit },
    { icon: Car, text: t.availability.drivingLicense },
  ];

  return (
    <section id="availability" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.availability.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="px-5 py-3.5 bg-card border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm whitespace-nowrap">{item.text}</span>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
