import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    { icon: Mail, title: t.about.email, value: 'joyanta.it@gmail.com', href: 'mailto:joyanta.it@gmail.com' },
    { icon: Phone, title: t.about.phone, value: '+358 449874028', href: 'tel:+358449874028' },
    { icon: MessageCircle, title: t.about.whatsapp, value: '+358 449874028', href: 'https://wa.me/358449874028' },
    { icon: MapPin, title: t.about.location, value: 'Kokkola, Finland' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-5 mb-10">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <Card className={`p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 text-center h-full ${
                  method.href ? 'cursor-pointer' : ''
                }`}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{method.title}</p>
                      <p className="text-foreground font-mono text-sm">{method.value}</p>
                    </div>
                  </div>
                </Card>
              );

              return (
                <StaggerItem key={index}>
                  {method.href ? (
                    <a href={method.href}>{content}</a>
                  ) : (
                    <div>{content}</div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <Card className="p-8 bg-card border-border">
              <div className="text-center space-y-5">
                <p className="text-foreground font-bold text-lg">
                  Open to IT Support and System Administrator roles across Finland.
                </p>
                <p className="text-muted-foreground text-[15px]">
                  Available immediately. Let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg"
                    className="gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] transition-all duration-300 font-medium px-8"
                    asChild>
                    <a href="mailto:joyanta.it@gmail.com">
                      <Send className="h-5 w-5" />
                      {t.contact.sendMessage}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline"
                    className="gap-2.5 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-medium"
                    asChild>
                    <a href="https://wa.me/358449874028" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      {t.contact.whatsappButton}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
