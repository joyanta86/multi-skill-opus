import { Download, Mail, Linkedin, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.webp';

const TECH_CHIPS = ['Azure / M365', 'Networking', 'Active Directory', 'Hardware Support'];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Ambient navy background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[140px] animate-float" />
          <div className="absolute bottom-1/4 right-1/5 w-[420px] h-[420px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="flex flex-col gap-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center self-start gap-2.5 px-3 py-1.5 bg-card border border-primary/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                Available for work
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Joyanta <span className="text-primary">Dey</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 font-medium border-l-4 border-primary pl-4">
                IT Specialist & System Administrator
                <span className="block text-foreground/60 text-base mt-1">
                  Finland (Kokkola) · Open to Relocation
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-foreground/75 leading-relaxed max-w-lg">
              {t.hero.valueStatement}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {TECH_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 bg-card border border-primary/20 rounded-md text-xs font-semibold uppercase tracking-wider text-foreground/80"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/Joyanta_Dey_CV.pdf"
                download
                className="px-7 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-2"
                aria-label="Download CV PDF"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t.hero.downloadCV}
              </a>
              <button
                type="button"
                onClick={() => scrollToId('projects')}
                className="px-7 py-4 bg-card hover:bg-primary/10 border border-primary/30 text-foreground font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Contact micro-row */}
            <div className="pt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border">
              <a
                href="mailto:joyanta.it@gmail.com"
                className="flex items-center gap-2 text-sm text-foreground/65 hover:text-primary transition-colors group"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                joyanta.it@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/joyantadey/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/65 hover:text-primary transition-colors group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="tel:+358465791195"
                className="flex items-center gap-2 text-sm text-foreground/65 hover:text-primary transition-colors group"
                aria-label="Call phone number"
              >
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                +358 46 579 1195
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl -rotate-6 transition-transform duration-500 group-hover:rotate-0" aria-hidden="true" />
                <div className="absolute inset-0 bg-card rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Joyanta Dey — IT Infrastructure Specialist based in Finland"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" aria-hidden="true" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-2xl shadow-xl shadow-primary/30">
                  <div className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-widest">
                    Expertise
                  </div>
                  <div className="text-lg font-bold text-primary-foreground font-display">
                    Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
