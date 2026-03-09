import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.education.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">{t.education.degree}</h3>
                  <p className="text-base text-primary/80 font-medium">{t.education.field}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary/60" />
                      <a href="https://www.sub.ac.bd/" target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-sm">
                        {t.education.university}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-primary/60" />
                      <span className="font-mono text-sm">{t.education.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
