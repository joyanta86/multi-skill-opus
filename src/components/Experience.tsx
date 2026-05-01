import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'IT Services Trainee (Harjoittelu)',
      company: 'JNT Oy',
      companyUrl: 'https://www.jnt.fi/',
      location: 'Kokkola, Finland',
      period: 'April 13, 2026 - April 24, 2026',
      headline: 'Hands-on IT services training in a Finnish telecom & IT workplace.',
      responsibilities: [
        'Hands-on IT services training at JNT Oy — a local telecom and IT services company',
        'Working with Microsoft 365 administration, helpdesk support, and IT operations',
        'Operating under supervision in a Finnish IT workplace',
      ],
      tags: ['Microsoft 365', 'IT Support', 'Helpdesk', 'Windows Server', 'Active Directory'],
    },
    {
      title: 'Work Practice (Harjoittelu) — Retail',
      company: 'Halpahalli Oy',
      companyUrl: 'https://www.halpahalli.fi/',
      location: 'Kokkola, Finland',
      period: 'November 17, 2024 - November 28, 2024',
      headline: 'Two-week work practice within Finnish language integration programme.',
      responsibilities: [
        'Two-week work practice as part of Finnish language integration programme (Kvarnen / TE-toimisto)',
        'Gained hands-on experience in Finnish retail and customer service environment',
      ],
      tags: ['Customer Service', 'Retail', 'Finnish Workplace'],
    },
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
      tags: [] as string[],
    },
    {
      title: 'IT Infrastructure Administrator',
      company: 'Orion Infrastructure Ltd.',
      companyUrl: 'https://www.orion-group.net/',
      location: 'Dhaka, Bangladesh',
      period: 'September 2013 - April 2021',
      headline: 'Led IT infrastructure for Bangladesh\'s first digital toll collection system with G.E.A France.',
      responsibilities: [
        'Built end-to-end IT infrastructure for a national-scale toll management system',
        'Partnered with G.E.A. France on Electronic Toll Collection (CCTV, IP-PBX, IoT)',
        'Maintained 99.5% uptime across network, surveillance, and call center systems',
        'Reduced hardware costs by 20% through server virtualization',
        'Cut security incidents by 35% with firewalls, VPNs, and endpoint protection',
        'Improved toll collection efficiency by 15% via LAN/WAN optimization',
      ],
      tags: [] as string[],
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

                      {exp.tags && exp.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {exp.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary/90 border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
