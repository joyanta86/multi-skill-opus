import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Avatar className="h-28 w-28 border-2 border-primary/20 shadow-[var(--glow-primary)]">
              <AvatarImage src={profilePhoto} alt="Joyanta Dey - IT Infrastructure & Support Specialist" />
              <AvatarFallback className="font-mono text-lg">JD</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              Joyanta Dey
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-foreground/90 max-w-2xl mx-auto tracking-tight">
              {t.hero.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto font-mono text-sm">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <Button
              size="lg"
              className="gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] hover:shadow-[0_0_40px_hsl(200_100%_50%/0.4)] transition-all duration-300 font-medium px-8"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="h-5 w-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2.5 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-medium px-8"
              onClick={scrollToContact}
            >
              <Mail className="h-5 w-5" />
              {t.hero.cta}
            </Button>
          </motion.div>

          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-5 w-5 mx-auto text-primary/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
