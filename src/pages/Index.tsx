import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Projects } from '@/components/Projects';
import { References } from '@/components/References';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
