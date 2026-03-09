import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const lastUpdated = 'March 9, 2026';

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container px-4 py-12 max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>
              This website (joyantadey.com) is a personal portfolio site operated by Joyanta Dey.
              Your privacy is important, and this policy explains what data is collected, how it is
              used, and your choices regarding that data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Data We Collect</h2>
            <p className="mb-2">We do not collect personal data directly. However, third-party services used on this site may collect data automatically:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google AdSense</strong> – may use cookies to serve personalized or non-personalized ads.</li>
              <li><strong className="text-foreground">Google Analytics</strong> – may collect anonymized usage data such as pages visited, device type, and approximate location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Cookies & Consent</h2>
            <p>
              This site uses Google Consent Mode v2. On your first visit, a cookie consent banner is
              displayed. You may accept or decline non-essential cookies. Your preference is saved
              locally and respected on future visits. Essential cookies required for site functionality
              are always active.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. How Data Is Used</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To display relevant advertisements (Google AdSense)</li>
              <li>To understand site traffic and improve user experience (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Data Sharing</h2>
            <p>
              We do not sell or share your personal data. Data collected by third-party services
              (Google) is governed by their respective privacy policies:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Ads Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Your Rights (EEA/UK)</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Withdraw cookie consent at any time by clearing your browser data</li>
              <li>Request information about data collected via third-party services</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Contact</h2>
            <p>
              If you have questions about this privacy policy, contact me at{' '}
              <a href="mailto:joyanta.it@gmail.com" className="text-primary hover:underline">
                joyanta.it@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
