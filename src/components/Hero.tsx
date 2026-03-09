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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Avatar className="h-32 w-32 border-4 border-primary/30 shadow-[0_0_30px_rgba(0,188,255,0.3)]">
              <AvatarImage src={profilePhoto} alt="Joyanta Dey - IT Infrastructure Specialist" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Joyanta Dey
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
              {t.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(0,188,255,0.3)] hover:shadow-[0_0_40px_rgba(0,188,255,0.5)] transition-all"
              onClick={scrollToContact}
            >
              <Mail className="h-5 w-5" />
              {t.hero.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="h-5 w-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-6 w-6 mx-auto text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
