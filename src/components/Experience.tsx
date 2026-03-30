import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Senior Assistant Manager, IT',
      company: 'General Pharmaceuticals Ltd.',
      companyUrl: 'https://generalpharma.com/',
      location: 'Dhaka, Bangladesh',
      period: 'April 2021 - September 2024',
      headline: 'Drove enterprise infrastructure modernization and security transformation.',
      responsibilities: [
        'Managed Active Directory, Windows Server, and Linux for 500+ users across multiple sites',
        'Achieved 99.9% uptime on IP telephony and high-availability systems',
        'Reduced security incidents by 40% with CrowdStrike EDR and HA firewalls (Checkpoint, Fortinet)',
        'Cut support response time by 35% deploying osTicket and Snipe-IT',
        'Led and mentored a team of 10+ IT professionals',
        'Administered Microsoft 365 and Azure cloud services',
      ],
    },
    {
      title: 'IT Infrastructure Administrator',
      company: 'Orion Infrastructure Ltd.',
      companyUrl: 'https://www.orion-group.net/',
      location: 'Dhaka, Bangladesh',
      period: 'September 2013 - April 2021',
      headline: 'Led IT infrastructure for Bangladesh\'s first digital toll collection system with G.E.A France.',
      responsibilities: [
        'Designed and deployed end-to-end IT infrastructure for a national-scale toll management system',
        'Partnered with G.E.A. France to implement Electronic Toll Collection (ETC) integrating CCTV, IP-PBX, and IoT devices',
        'Maintained 99.5% uptime across network, surveillance, and call center systems',
        'Implemented virtualization technologies, reducing hardware costs by 20%',
        'Strengthened data security with firewalls, VPNs, and endpoint protection — cutting incidents by 35%',
        'Optimized LAN/WAN architecture, improving toll collection efficiency by 15%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.experience.title}
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <StaggerContainer className="space-y-8">
              {experiences.map((exp, index) => (
                <StaggerItem key={index} className="relative md:ml-16">
                  <Card className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300">
                    <div className="absolute -left-20 top-10 hidden md:block">
                      <div className="w-3 h-3 rounded-full bg-primary/80" />
                    </div>

                    <div className="space-y-5">
                      <div>
                        {exp.headline && (
                          <p className="text-sm text-primary/80 font-medium mb-3 font-mono">{exp.headline}</p>
                        )}
                        <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{exp.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5 text-primary/60" />
                            {exp.companyUrl ? (
                              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">{exp.company}</a>
                            ) : (
                              <span className="font-medium">{exp.company}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-primary/60" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-primary/60" />
                            <span className="font-mono text-xs">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-muted-foreground flex items-start text-[15px]">
                            <span className="text-primary/50 mr-2.5 mt-1.5 text-xs">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
