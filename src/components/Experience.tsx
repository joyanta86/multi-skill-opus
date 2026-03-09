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
      location: 'Dhaka, Bangladesh',
      period: 'April 2021 - September 2024',
      headline: 'Led enterprise infrastructure modernization and digital toll system deployment.',
      responsibilities: [
        'Led IT Infrastructure Team deploying Active Directory, Windows Server, and Linux-based services',
        'Designed and implemented high-availability IP telephony systems (99.9% uptime)',
        'Managed CrowdStrike EDR deployment and Checkpoint/Fortinet firewalls in HA mode',
        'Built IT Asset Management and Ticketing Systems (Snipe-IT, osTicket)',
        'Supervised team of 10+ IT professionals with mentorship and training programs',
        'Reduced security incidents by 40% and improved support response times by 35%',
      ],
    },
    {
      title: 'IT Infrastructure Administrator',
      company: 'Orion Infrastructure Ltd.',
      location: 'Dhaka, Bangladesh',
      period: 'September 2013 - April 2021',
      headline: 'Worked with G.E.A France to deploy Bangladesh\'s first digital toll collection system integrating ETC, CCTV, IP-PBX, and IoT devices.',
      responsibilities: [
        'Led IT infrastructure for Bangladesh\'s first digital toll management system',
        'Deployed Electronic Toll Collection (ETC) system in partnership with G.E.A. France',
        'Managed network, CCTV surveillance, and call center systems (99.5% uptime)',
        'Implemented virtualization technologies reducing hardware costs by 20%',
        'Enhanced data security with firewalls, antivirus, and VPNs (35% fewer incidents)',
        'Optimized LAN/WAN design improving toll collection efficiency by 15%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              {t.experience.title}
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <StaggerContainer className="space-y-8">
              {experiences.map((exp, index) => (
                <StaggerItem key={index} className="relative md:ml-16">
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,188,255,0.15)]">
                    <div className="absolute -left-20 top-8 hidden md:block">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,188,255,0.5)]" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        {exp.headline && (
                          <p className="text-sm text-primary/90 font-medium mb-3 italic">{exp.headline}</p>
                        )}
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
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
