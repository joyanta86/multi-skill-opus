import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Initialize Google Consent Mode v2 defaults
const initConsentMode = () => {
  (window as any).gtag?.('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });
};

const updateConsent = (granted: boolean) => {
  const status = granted ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
    analytics_storage: status,
  });
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    initConsentMode();
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      updateConsent(consent === 'granted');
    }
  }, []);

  const handleConsent = (granted: boolean) => {
    localStorage.setItem('cookie-consent', granted ? 'granted' : 'denied');
    updateConsent(granted);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="rounded-xl border border-border bg-card/95 backdrop-blur-xl p-5 shadow-2xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">Cookie Consent</h3>
              </div>
              <button
                onClick={() => handleConsent(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
              This site uses cookies to personalize ads and analyze traffic. You can choose to accept or decline.
            </p>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mb-3"
                >
                  <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span>Essential cookies</span>
                      <span className="text-primary font-medium">Always on</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ad storage & personalization</span>
                      <span>Requires consent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Analytics storage</span>
                      <span>Requires consent</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleConsent(false)}
                className="flex-1 text-xs h-8"
              >
                Decline
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs h-8 px-2"
              >
                <Settings className="w-3.5 h-3.5" />
              </Button>
              <Button
                size="sm"
                onClick={() => handleConsent(true)}
                className="flex-1 text-xs h-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
