import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
    { icon: Mail, label: t.about.email, value: 'likejoy@gmail.com', href: 'mailto:likejoy@gmail.com' },
    { icon: Phone, label: t.about.phone, value: '+358 449874028', href: 'tel:+358449874028' },
    { icon: Linkedin, label: t.about.linkedin, value: 'joyantadey', href: 'https://www.linkedin.com/in/joyantadey/' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t.about.description}
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card
                    key={index}
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

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
