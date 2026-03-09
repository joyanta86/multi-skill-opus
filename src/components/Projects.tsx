import { FolderOpen, Calendar, ExternalLink, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Projects = () => {
  const { t } = useLanguage();

  const currentProjects = [
    {
      title: 'GPLCosmo.com',
      description: 'A web platform built and maintained using modern cloud infrastructure, featuring DNS management via Cloudflare, SSL certificates, and optimized hosting.',
      technologies: ['Cloudflare', 'DNS', 'SSL/TLS', 'Web Hosting', 'Analytics'],
      link: 'https://gplcosmo.com',
    },
    {
      title: 'Self-Hosted Applications',
      description: 'Running and managing self-hosted services including monitoring dashboards, asset management tools, and internal communication systems on personal infrastructure.',
      technologies: ['Docker', 'Linux', 'Nginx', 'Self-Hosting', 'Monitoring'],
    },
  ];

  const pastProjects = [
    {
      title: 'Digital Toll Management System (with G.E.A France)',
      period: 'September 2013 - April 2021',
      description: 'Deployed Bangladesh\'s first IoT-based toll system integrating ETC, CCTV, and IP telephony in partnership with G.E.A France.',
      technologies: ['ETC', 'IoT', 'CCTV', 'IP-PBX', 'Networking', 'Fiber Optics'],
      achievements: ['First digital toll collection system in Bangladesh', 'Integrated Electronic Toll Collection with surveillance', 'Implemented redundant network infrastructure'],
    },
    {
      title: 'Active Directory Infrastructure',
      period: 'December 2021 - April 2022',
      description: 'Led deployment of Microsoft Active Directory from scratch to establish centralized authentication and user management system.',
      technologies: ['Active Directory', 'Windows Server', 'DNS', 'Group Policy'],
      achievements: ['Centralized user authentication and access control', 'Enhanced IT security with password policies', 'Automated user account management'],
    },
    {
      title: 'Zabbix Network Monitoring Center',
      period: 'January 2023 - February 2023',
      description: 'Designed and implemented a Network Monitoring Center using Zabbix for real-time infrastructure monitoring.',
      technologies: ['Zabbix', 'Linux', 'Network Monitoring', 'SNMP'],
      achievements: ['Real-time monitoring of servers and network devices', 'Custom dashboards for network health insights', 'Automated alerts for proactive issue resolution'],
      link: 'https://nmc.generalpharma.com/zabbix',
    },
    {
      title: 'CrowdStrike Falcon EDR System',
      period: 'August 2022 - August 2023',
      description: 'Deployed CrowdStrike Falcon EDR to enhance security with real-time endpoint monitoring.',
      technologies: ['CrowdStrike', 'EDR', 'Cybersecurity', 'Threat Intelligence'],
      achievements: ['Real-time threat detection and response', 'Centralized endpoint security management', 'Reduced security risks and incidents'],
    },
    {
      title: 'Checkpoint Firewall Implementation',
      period: 'January 2022 - August 2023',
      description: 'Deployed Checkpoint Quantum Spark 1800 for next-generation network security.',
      technologies: ['Checkpoint', 'Firewall', 'VPN', 'Network Security'],
      achievements: ['Advanced threat prevention and traffic inspection', 'Secure VPN and remote access implementation', 'Network segmentation and access control'],
    },
    {
      title: 'IT Asset Management with Snipe-IT',
      period: 'January 2022 - July 2023',
      description: 'Implemented Snipe-IT for comprehensive IT asset tracking and management.',
      technologies: ['Snipe-IT', 'Asset Management', 'Barcode', 'Inventory'],
      achievements: ['Full visibility of hardware and software assets', 'Automated lifecycle tracking and maintenance', 'QR code and barcode scanning integration'],
      link: 'https://itasset.generalpharma.com/',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.projects.title}
            </h2>
          </AnimatedSection>

          {/* Current Projects */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 tracking-tight">
                <Rocket className="h-5 w-5 text-primary" />
                Current Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                  <Card key={index} className="p-7 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-base font-semibold text-foreground tracking-tight">{project.title}</h4>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-0 font-mono text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Past Projects */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {pastProjects.map((project, index) => (
              <StaggerItem key={index}>
                <Card className="p-7 bg-card border-border hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <FolderOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">{project.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary/60" />
                        <span className="font-mono text-xs">{project.period}</span>
                      </div>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-5">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">{t.projects.technologies}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-muted text-muted-foreground border-0 font-mono text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">{t.projects.achievements}</p>
                    <ul className="space-y-1.5">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary/50 mr-2 mt-0.5 text-xs">▸</span>
                          <span>{achievement}</span>
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
    </section>
  );
};
