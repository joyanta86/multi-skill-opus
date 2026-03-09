import { FolderOpen, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Digital Toll Management System (with G.E.A France)',
      period: 'September 2013 - April 2021',
      description: 'Deployed Bangladesh\'s first IoT-based toll system integrating ETC, CCTV, and IP telephony in partnership with G.E.A France.',
      technologies: ['ETC', 'IoT', 'CCTV', 'IP-PBX', 'Networking', 'Fiber Optics'],
      achievements: ['First digital toll collection system in Bangladesh', 'Integrated Electronic Toll Collection with surveillance', 'Implemented redundant network infrastructure', 'Managed 24/7 operations and maintenance'],
    },
    {
      title: 'Active Directory Infrastructure',
      period: 'December 2021 - April 2022',
      description: 'Led deployment of Microsoft Active Directory from scratch to establish centralized authentication and user management system.',
      technologies: ['Active Directory', 'Windows Server', 'DNS', 'Group Policy'],
      achievements: ['Centralized user authentication and access control', 'Enhanced IT security with password policies', 'Automated user account management', 'Improved network security and operational efficiency'],
    },
    {
      title: 'Zabbix Network Monitoring Center',
      period: 'January 2023 - February 2023',
      description: 'Designed and implemented a Network Monitoring Center using Zabbix for real-time infrastructure monitoring.',
      technologies: ['Zabbix', 'Linux', 'Network Monitoring', 'SNMP'],
      achievements: ['Real-time monitoring of servers and network devices', 'Custom dashboards for network health insights', 'Automated alerts for proactive issue resolution', 'Reduced downtime and improved reliability'],
      link: 'https://nmc.generalpharma.com/zabbix',
    },
    {
      title: 'CrowdStrike Falcon EDR System',
      period: 'August 2022 - August 2023',
      description: 'Deployed CrowdStrike Falcon EDR to enhance security with real-time endpoint monitoring.',
      technologies: ['CrowdStrike', 'EDR', 'Cybersecurity', 'Threat Intelligence'],
      achievements: ['Real-time threat detection and response', 'Centralized endpoint security management', 'Reduced security risks and incidents', 'Enhanced overall cybersecurity posture'],
    },
    {
      title: 'Checkpoint Firewall Implementation',
      period: 'January 2022 - August 2023',
      description: 'Deployed Checkpoint Quantum Spark 1800 for next-generation network security.',
      technologies: ['Checkpoint', 'Firewall', 'VPN', 'Network Security'],
      achievements: ['Advanced threat prevention and traffic inspection', 'Secure VPN and remote access implementation', 'Network segmentation and access control', 'Improved network security and performance'],
    },
    {
      title: 'Grandstream IP PBX System',
      period: 'October 2022 - March 2023',
      description: 'Implemented Grandstream IP PBX for reliable high-availability communication.',
      technologies: ['Grandstream', 'VoIP', 'IP Telephony', 'High Availability'],
      achievements: ['High availability communication system (99.9% uptime)', 'Cost-effective VoIP integration', 'Advanced call routing and IVR', 'Enhanced communication efficiency'],
    },
    {
      title: 'IT Asset Management with Snipe-IT',
      period: 'January 2022 - July 2023',
      description: 'Implemented Snipe-IT for comprehensive IT asset tracking and management.',
      technologies: ['Snipe-IT', 'Asset Management', 'Barcode', 'Inventory'],
      achievements: ['Full visibility of hardware and software assets', 'Automated lifecycle tracking and maintenance', 'QR code and barcode scanning integration', 'Improved resource allocation and reduced asset loss'],
      link: 'https://itasset.generalpharma.com/',
    },
    {
      title: 'osTicket Support System',
      period: 'April 2023 - July 2023',
      description: 'Deployed osTicket for streamlined IT support and incident management.',
      technologies: ['osTicket', 'Ticketing', 'IT Support', 'SLA Management'],
      achievements: ['Automated ticket creation and tracking', 'Email-based ticketing integration', 'Custom SLA policies for critical issues', 'Enhanced IT support efficiency and transparency'],
      link: 'https://ticket.generalpharma.com/',
    },
    {
      title: 'Synology DSM File Management',
      period: 'May 2021 - August 2021',
      description: 'Deployed Synology DiskStation Manager for centralized and secure file management.',
      technologies: ['Synology', 'NAS', 'RAID', 'Active Directory'],
      achievements: ['Enterprise-grade storage and file sharing', 'Active Directory integration', 'Automated backups and disaster recovery', 'Enhanced data security with encryption and 2FA'],
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

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
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
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
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
