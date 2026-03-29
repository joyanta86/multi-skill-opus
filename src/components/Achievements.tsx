import { Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    "99.9% uptime — Deployed HA firewalls (Fortinet + Checkpoint) across enterprise network",
    "500+ users — Built and managed Active Directory infrastructure across multiple sites",
    "40% fewer security incidents — Rolled out CrowdStrike EDR to all endpoints",
    "35% faster support response — Implemented ticketing (osTicket) and asset management (Snipe-IT)",
    "National-scale project — Led IT infrastructure for Bangladesh's first digital toll system with G.E.A. France",
    "20% hardware cost reduction — Deployed VMware virtualization across servers",
    "99.9% telephony uptime — Designed enterprise IP-PBX communication systems",
    "15% efficiency gain — Optimized LAN/WAN architecture for toll collection operations",
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
