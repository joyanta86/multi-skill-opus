import { Users, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';
import jennyPhoto from '@/assets/jenny-pulkkinen.jpg';

export const References = () => {
  const { t } = useLanguage();

  const references = [
    {
      name: 'Saiful Islam',
      title: 'Former Colleague / University Friend',
      company: 'Tiefenbacher',
      description: 'Expert in IT and Business Intelligence with strong strategic thinking and collaboration skills. Witnessed my professional growth and technical expertise firsthand.',
      email: 's.islam@tiefenbacher.com',
      phone: '+49 40441809278',
      linkedin: 'https://www.linkedin.com/in/saif102/',
    },
    {
      name: 'Ashik Hasan',
      title: 'Senior Manager, Human Resources',
      company: 'General Pharmaceuticals Ltd.',
      description: 'Senior HR leader managing recruitment and employee development. Provided valuable guidance and mentorship during my tenure at the company.',
      email: 'ashik.hr@generalpharma.com',
      phone: '+880 1844095200',
      linkedin: 'https://www.linkedin.com/in/ashik-hasan-79127b41/',
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
    <section id="references" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.references.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {references.map((reference, index) => (
              <StaggerItem key={index}>
                <Card className="p-7 bg-card border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    {reference.photo ? (
                      <img 
                        src={reference.photo} 
                        alt={reference.name}
                        className="w-12 h-12 rounded-lg object-cover border border-border flex-shrink-0"
                      />
                    ) : (
                      <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-0.5 tracking-tight">{reference.name}</h3>
                      <p className="text-sm text-primary/80 font-medium">{reference.title}</p>
                      <p className="text-xs text-muted-foreground font-mono">{reference.company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{reference.description}</p>

                  <div className="space-y-2 mb-5">
                    <a href={`mailto:${reference.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                      <Mail className="h-3.5 w-3.5" />
                      {reference.email}
                    </a>
                    <a href={`tel:${reference.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                      <Phone className="h-3.5 w-3.5" />
                      {reference.phone}
                    </a>
                  </div>

                  <div className="flex gap-2">
                    {reference.linkedin && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300" asChild>
                        <a href={reference.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-3.5 w-3.5" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {reference.website && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300" asChild>
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
