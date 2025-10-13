import { Server, Cloud, Shield, Code, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Server,
      title: t.skills.categories.server,
      skills: [
        'Windows Server (ADDS, DHCP, DNS, GPO, WSUS)',
        'Active Directory',
        'Linux (Red Hat, CentOS, Ubuntu, Debian)',
        'Microsoft 365 & Exchange',
        'File Server Management',
      ],
    },
    {
      icon: Cloud,
      title: t.skills.categories.cloud,
      skills: [
        'AWS Cloud Platform',
        'Azure Cloud Services',
        'VMware vSphere & ESXi',
        'Virtualization Technologies',
        'Cloud Administration',
      ],
    },
    {
      icon: Shield,
      title: t.skills.categories.network,
      skills: [
        'Fortinet, Checkpoint, Sophos Firewalls',
        'CrowdStrike Falcon EDR',
        'Cisco Routing & Switching',
        'VPN Management',
        'Network Security Implementation',
      ],
    },
    {
      icon: Code,
      title: t.skills.categories.automation,
      skills: [
        'PowerShell Scripting',
        'Bash/Shell Scripting',
        'Ansible Configuration',
        'Python Automation',
        'Git Version Control',
      ],
    },
    {
      icon: Activity,
      title: t.skills.categories.monitoring,
      skills: [
        'Zabbix Monitoring',
        'osTicket Support System',
        'Snipe-IT Asset Management',
        'Remote Support (SSH, RDP, AnyDesk)',
        'System Performance Monitoring',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.skills.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,188,255,0.15)] group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">›</span>
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
