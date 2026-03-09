import { Award, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    { name: 'MikroTik Certified Network Associate (MTCNA)', issuer: 'MikroTik' },
    { name: 'MikroTik Certified Routing Engineer (MTCRE)', issuer: 'MikroTik' },
    { name: 'AWS Solution Architect', issuer: 'AWS', note: 'Completed course (non-certified practical knowledge)' },
    { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat', note: 'Completed course (non-certified practical knowledge)' },
    { name: 'Red Hat Certified Engineer (RHCE - Ansible)', issuer: 'Red Hat', note: 'Completed course (non-certified practical knowledge)' },
    { name: 'Hygiene Passport Card', issuer: 'Finnish Food Authority' },
    { name: 'Occupational Safety Card', issuer: 'Finland' },
  ];

  const affiliations = [
    'Member of Bangladesh Computer Society (M03028)',
    'Member of Internet Society (Member Id: 116633)',
  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.certifications.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-10">
            {certifications.map((cert, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1 tracking-tight">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">{cert.issuer}</p>
                      {cert.note && (
                        <p className="text-xs text-muted-foreground/60 italic mt-1.5">{cert.note}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} direction="right">
            <Card className="p-7 bg-card border-border">
              <h3 className="text-base font-semibold text-foreground mb-4 tracking-tight">Professional Affiliations</h3>
              <div className="space-y-3">
                {affiliations.map((affiliation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm font-mono">{affiliation}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
