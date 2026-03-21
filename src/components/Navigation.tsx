import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'references', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('section-highlight');
      setTimeout(() => element.classList.remove('section-highlight'), 1000);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  }, [isHomePage, navigate]);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'projects', label: t.nav.projects },
    { id: 'references', label: t.nav.references },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'no', label: 'Norsk', flag: '🇳🇴' },
    { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="font-mono text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            JD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm transition-colors rounded-md ${
                  activeSection === item.id && isHomePage
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && isHomePage && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}


            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in bg-card/95 backdrop-blur-xl border-b border-border -mx-4 px-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 text-sm transition-colors rounded-md text-left ${
                    activeSection === item.id
                      ? 'text-foreground bg-primary/10 border-l-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-1.5 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Tools</div>
              <button
                onClick={() => { navigate('/apply'); setIsOpen(false); }}
                className={`px-4 py-2.5 text-sm transition-colors rounded-md text-left flex items-center gap-2 w-full ${
                  location.pathname === '/apply'
                    ? 'text-foreground bg-primary/10 border-l-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Cover Letter
              </button>
              <button
                onClick={() => { navigate('/resume'); setIsOpen(false); }}
                className={`px-4 py-2.5 text-sm transition-colors rounded-md text-left flex items-center gap-2 w-full ${
                  location.pathname === '/resume'
                    ? 'text-foreground bg-primary/10 border-l-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <FileUser className="w-3.5 h-3.5" />
                Smart Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
