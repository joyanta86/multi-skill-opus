import { MapPin, Mail, Phone, Linkedin, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';
import profilePhoto from '@/assets/profile-photo.jpg';

export const About = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
    { icon: Mail, label: t.about.email, value: 'joyanta.it@gmail.com', href: 'mailto:joyanta.it@gmail.com' },
    { icon: Phone, label: t.about.phone, value: '+358 449874028', href: 'tel:+358449874028' },
    { icon: Linkedin, label: t.about.linkedin, value: 'joyantadey', href: 'https://www.linkedin.com/in/joyantadey/' },
    { icon: Car, label: t.about.drivingLicense, value: t.about.drivingLicenseValue },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              {t.about.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="md:col-span-2" delay={0.1}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={profilePhoto} 
                    alt="Joyanta Dey - IT Infrastructure & Service Management Professional" 
                    className="w-32 h-32 rounded-lg object-cover border-2 border-primary/30 shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{t.about.description1}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.about.description2}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.about.description3}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.about.description4}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <StaggerContainer className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card
                    className={`p-4 bg-card border-border hover:border-primary/50 transition-all ${
                      item.href ? 'cursor-pointer hover:shadow-[0_0_20px_rgba(0,188,255,0.2)]' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium break-words">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                );

                return (
                  <StaggerItem key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
