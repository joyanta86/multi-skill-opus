import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-card border-t border-border py-10">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Joyanta Dey · {t.footer.rights}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-muted-foreground/60 text-xs font-mono">{t.footer.builtWith}</p>
                <span className="text-muted-foreground/30 text-xs">·</span>
                <Link to="/privacy-policy" className="text-muted-foreground/60 text-xs hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground/30 text-xs">·</span>
                <Link to="/terms-of-service" className="text-muted-foreground/60 text-xs hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:joyanta.it@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-primary transition-colors"
                aria-label="Email Joyanta Dey"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/joyantadey/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn profile of Joyanta Dey"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
