import { Users, Mail, Phone, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const References = () => {
  const { t } = useLanguage();

  const references = [
    {
      name: 'Saiful Islam',
      title: 'Former Colleague / University Friend',
      company: 'Tiefenbacher',
      description: 'Wonderful in IT and Business Intelligence, showing dedication, strategic thinking, and a collaborative mindset. Witnessed my growth in the IT field and understands my technical expertise and work ethic.',
      email: 's.islam@tiefenbacher.com',
      phone: '+49 40441809278',
      linkedin: 'https://www.linkedin.com/in/saif102/',
    },
    {
      name: 'Ashik Hasan',
      title: 'Senior Manager, Human Resources',
      company: 'General Pharmaceuticals Ltd.',
      description: 'Head of Human Resources managing recruitment, employee development, and performance management. Provided valuable guidance and mentorship throughout my time at the company.',
      email: 'ashik.hr@generalpharma.com',
      phone: '+880 1844095200',
      linkedin: 'https://www.linkedin.com/in/ashik-hasan-79127b41/',
    },
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.references.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {references.map((reference, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,188,255,0.15)] group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{reference.name}</h3>
                    <p className="text-sm text-primary font-medium">{reference.title}</p>
                    <p className="text-sm text-muted-foreground">{reference.company}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {reference.description}
                </p>

                <div className="space-y-2 mb-4">
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {reference.email}
                  </a>
                  <a
                    href={`tel:${reference.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {reference.phone}
                  </a>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={reference.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
