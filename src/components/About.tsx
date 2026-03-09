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
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.about.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="md:col-span-2" delay={0.1}>
              <Card className="p-8 bg-card border-border hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <img 
                    src={profilePhoto} 
                    alt="Joyanta Dey - IT Infrastructure & Support Specialist" 
                    className="w-28 h-28 rounded-lg object-cover border border-border flex-shrink-0"
                  />
                  <div className="flex-1 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{t.about.description1}</p>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{t.about.description2}</p>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{t.about.description3}</p>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{t.about.description4}</p>
                  </div>
                </div>

                {/* Creative media & Finnish tech interest */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    Beyond infrastructure, I bring a background in creative media and digital content — giving me a unique perspective on user-facing technology. I'm deeply interested in the Finnish tech landscape and excited to contribute to innovative teams building the future of Nordic IT.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <StaggerContainer className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card
                    className={`p-4 bg-card border-border hover:border-primary/30 transition-all duration-300 ${
                      item.href ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-foreground font-mono text-sm mt-0.5 break-words">{item.value}</p>
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
