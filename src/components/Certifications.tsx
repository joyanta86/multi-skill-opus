import { Award, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      name: 'MikroTik Certified Network Associate (MTCNA)',
      issuer: 'MikroTik',
    },
    {
      name: 'MikroTik Certified Routing Engineer (MTCRE)',
      issuer: 'MikroTik',
    },
    {
      name: 'AWS Solution Architect',
      issuer: 'AWS',
    },
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
    },
    {
      name: 'Red Hat Certified Engineer (RHCE - Ansible)',
      issuer: 'Red Hat',
    },
    {
      name: 'Hygiene Passport Card',
      issuer: 'Finnish Food Authority',
    },
    {
      name: 'Occupational Safety Card',
      issuer: 'Finland',
    },
  ];

  const affiliations = [
    'Member of Bangladesh Computer Society (M03028)',
    'Member of Internet Society (Member Id: 116633)',
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.certifications.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,188,255,0.15)] group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Professional Affiliations</h3>
            <div className="space-y-3">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{affiliation}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
