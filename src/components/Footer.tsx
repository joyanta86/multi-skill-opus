import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-card border-t border-border py-8">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Joyanta Dey | {t.footer.rights}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-muted-foreground text-xs italic">{t.footer.builtWith}</p>
                <span className="text-muted-foreground/40 text-xs">·</span>
                <Link to="/privacy-policy" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:joyanta.it@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email Joyanta Dey"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joyantadey/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn profile of Joyanta Dey"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
