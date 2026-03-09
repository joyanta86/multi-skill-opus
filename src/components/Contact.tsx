import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

export const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    { icon: Mail, title: t.about.email, value: 'likejoy@gmail.com', href: 'mailto:likejoy@gmail.com' },
    { icon: Phone, title: t.about.phone, value: '+358 449874028', href: 'tel:+358449874028' },
    { icon: MessageCircle, title: t.about.whatsapp, value: '+358 449874028', href: 'https://wa.me/358449874028' },
    { icon: MapPin, title: t.about.location, value: 'Kokkola, Finland' },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <Card className={`p-6 bg-card border-border hover:border-primary/50 transition-all text-center h-full ${
                  method.href ? 'cursor-pointer hover:shadow-[0_0_20px_rgba(0,188,255,0.2)]' : ''
                }`}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{method.title}</p>
                      <p className="text-foreground font-medium">{method.value}</p>
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
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Looking for an experienced IT professional? Let's connect!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg"
                    className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(0,188,255,0.3)] hover:shadow-[0_0_40px_rgba(0,188,255,0.5)] transition-all"
                    asChild>
                    <a href="mailto:likejoy@gmail.com">
                      <Send className="h-5 w-5" />
                      {t.contact.sendMessage}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline"
                    className="gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
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
