import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Senior Assistant Manager, IT',
      company: 'General Pharmaceuticals Ltd.',
      location: 'Dhaka, Bangladesh',
      period: 'April 2021 - September 2024',
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.experience.title}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="relative p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,188,255,0.15)] md:ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-8 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,188,255,0.5)]" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span>{exp.company}</span>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
