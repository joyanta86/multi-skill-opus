import { Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    "30% reliability increase — Enterprise infrastructure redesign across multiple sites",
    "40% fewer security incidents — CrowdStrike EDR + HA firewalls (Fortinet, Checkpoint)",
    "25% less downtime — Proactive monitoring with Zabbix and alerting",
    "99.9% uptime — High-availability firewall and telephony systems",
    "500+ users supported — Active Directory, Group Policy, Microsoft 365",
    "35% faster support — Ticketing (osTicket) and asset management (Snipe-IT)",
    "National-scale project — IT infrastructure for Bangladesh's first digital toll system",
    "20% cost savings — Server virtualization with VMware",
  ];

  return (
    <section id="achievements" className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.achievements.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <StaggerItem key={index}>
                <Card className="p-5 bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 mt-0.5 flex-shrink-0">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{achievement}</p>
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
