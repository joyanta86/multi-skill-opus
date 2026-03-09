import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
          <FileText className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
        </div>
        <p className="text-muted-foreground text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (joyantadey.com), you agree to be bound by these
              Terms of Service. If you do not agree with any part of these terms, please do not use
              this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Description of Service</h2>
            <p>
              This is a personal portfolio website operated by Joyanta Dey, showcasing professional
              experience, skills, certifications, and projects related to IT infrastructure and
              service management. The site is informational and does not offer products or services
              for sale.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Intellectual Property</h2>
            <p>
              All content on this site — including text, images, design, and code — is the property
              of Joyanta Dey unless otherwise stated. You may not reproduce, distribute, or create
              derivative works from this content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Third-Party Services</h2>
            <p>This site uses third-party services that have their own terms:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Terms of Service
                </a>{' '}
                (AdSense, Analytics)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Disclaimer</h2>
            <p>
              This website is provided "as is" without warranties of any kind. Joyanta Dey makes no
              guarantees regarding the accuracy, completeness, or reliability of the content.
              Information on this site should not be considered professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Limitation of Liability</h2>
            <p>
              Joyanta Dey shall not be liable for any direct, indirect, incidental, or consequential
              damages arising from your use of or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. External Links</h2>
            <p>
              This site may contain links to external websites. Joyanta Dey is not responsible for
              the content, privacy practices, or terms of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Changes to Terms</h2>
            <p>
              These terms may be updated at any time. Continued use of the site after changes
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Finland. Any disputes shall be resolved in
              Finnish courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">10. Contact</h2>
            <p>
              For questions regarding these terms, contact me at{' '}
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

export default TermsOfService;
