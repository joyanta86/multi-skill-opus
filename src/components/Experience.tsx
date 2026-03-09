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
                            <span className="font-medium">{exp.company}</span>
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
