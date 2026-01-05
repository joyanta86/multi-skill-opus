import { Wrench, Cpu, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Cpu,
      title: t.skills.categories.coreSkills,
      skills: t.skills.coreSkillsList,
    },
    {
      icon: Wrench,
      title: t.skills.categories.toolsPlatforms,
      skills: t.skills.toolsPlatformsList,
    },
    {
      icon: Globe,
      title: t.skills.categories.languages,
      skills: t.skills.languagesList,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.skills.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
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
