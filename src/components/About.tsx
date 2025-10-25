import { MapPin, Mail, Phone, Linkedin, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';

export const About = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
    { icon: Mail, label: t.about.email, value: 'likejoy@gmail.com', href: 'mailto:likejoy@gmail.com' },
    { icon: Phone, label: t.about.phone, value: '+358 449874028', href: 'tel:+358449874028' },
    { icon: Linkedin, label: t.about.linkedin, value: 'joyantadey', href: 'https://www.linkedin.com/in/joyantadey/' },
    { icon: Car, label: t.about.drivingLicense, value: t.about.drivingLicenseValue },
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
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={profilePhoto} 
                    alt="Joyanta Dey - IT Infrastructure Specialist with 12+ years of experience in Linux, Windows, Microsoft 365, and network systems" 
                    className="w-32 h-32 rounded-lg object-cover border-2 border-primary/30 shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1 space-y-3">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {t.about.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 italic">
                      {t.about.finnishSubtitle}
                    </p>
                    <p className="text-sm text-muted-foreground/70 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      {t.about.languageProgress}
                    </p>
                  </div>
                </div>
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
