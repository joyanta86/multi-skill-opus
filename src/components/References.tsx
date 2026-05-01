import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';
import jennyPhoto from '@/assets/jenny-pulkkinen.jpg';
import saifulPhoto from '@/assets/saiful-islam.jpg';
import ashikPhoto from '@/assets/ashik-hasan.jpg';

export const References = () => {
  const { t } = useLanguage();

  const references = [
    {
      name: 'Samu Penttilä',
      title: 'Team Leader Kokkola – IT-palvelut | Järjestelmäasiantuntija',
      company: 'JNT Oy',
      description: 'Direct supervisor during IT Services Harjoittelu at JNT Kokkola. Oversees IT support operations and services for business clients in the Kokkola region.',
      email: 'samu.penttila@jnt.fi',
      phone: '040 487 5858',
      website: 'https://www.jnt.fi/',
      photo: 'https://www.jnt.fi/app/uploads/2024/08/samu-260x260px.png',
    },
    {
      name: 'Saiful Islam',
      title: 'IT Support Specialist',
      company: 'Tiefenbacher Group',
      description: 'Passionate about IT with expertise in support and infrastructure. Based in Hamburg, Germany. A former colleague and university friend who witnessed my professional growth and technical expertise firsthand.',
      email: 's.islam@tiefenbacher.com',
      phone: '+49 40441809278',
      linkedin: 'https://www.linkedin.com/in/saif102/',
      photo: saifulPhoto,
    },
    {
      name: 'Ashik Hasan',
      title: 'Manager, Human Resources',
      company: 'Aristopharma Ltd.',
      description: 'Seasoned HR professional with 17+ years of experience, currently managing human resources at Aristopharma Ltd. Previously provided valuable guidance and mentorship during my tenure at General Pharmaceuticals Ltd.',
      email: 'farhan8159@gmail.com',
      phone: '+880 1713491462',
      linkedin: 'https://www.linkedin.com/in/ashik-hasan-79127b41/',
      photo: ashikPhoto,
    },
    {
      name: 'Jenny Pulkkinen',
      title: 'Finnish Teacher',
      company: 'Kvarnen (Kronoby Folkhögskola)',
      description: 'Dedicated language instructor supporting my integration into Finnish society. Provided essential language training and cultural guidance.',
      email: 'jenny.pulkkinen@kvarnen.fi',
      phone: '+358 40 650 1029',
      website: 'https://kvarnen.fi/spraklinjen/',
      photo: jennyPhoto,
    },
  ];

  return (
    <section id="references" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.references.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {references.map((reference, index) => (
              <StaggerItem key={index}>
                <Card className="p-5 sm:p-6 md:p-7 bg-card border-border hover:border-primary/30 transition-all duration-500 ease-out group h-full hover:shadow-[var(--glow-primary)] hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img 
                      src={reference.photo} 
                      alt={reference.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover border border-border flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5 tracking-tight truncate">{reference.name}</h3>
                      <p className="text-xs sm:text-sm text-primary/80 font-medium leading-tight">{reference.title}</p>
                      <p className="text-xs text-muted-foreground font-mono">{reference.company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed">{reference.description}</p>

                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    <a href={`mailto:${reference.email}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-mono truncate">
                      <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="truncate">{reference.email}</span>
                    </a>
                    <a href={`tel:${reference.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-mono">
                      <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                      {reference.phone}
                    </a>
                  </div>

                  <div className="flex gap-2">
                    {reference.linkedin && (
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 sm:gap-2 text-xs sm:text-sm border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300" asChild>
                        <a href={reference.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-3.5 w-3.5" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {reference.website && (
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 sm:gap-2 text-xs sm:text-sm border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300" asChild>
                        <a href={reference.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
