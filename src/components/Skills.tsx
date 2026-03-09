import { Wrench, Cpu, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    { icon: Cpu, title: t.skills.categories.coreSkills, skills: t.skills.coreSkillsList },
    { icon: Wrench, title: t.skills.categories.toolsPlatforms, skills: t.skills.toolsPlatformsList },
    { icon: Globe, title: t.skills.categories.languages, skills: t.skills.languagesList },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.skills.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="p-8 bg-card border-border hover:border-primary/40 transition-all duration-300 group h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground tracking-tight">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-muted-foreground flex items-start">
                          <span className="text-primary/60 mr-2.5 mt-0.5 text-xs">▸</span>
                          <span className="font-mono text-sm tracking-tight">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
