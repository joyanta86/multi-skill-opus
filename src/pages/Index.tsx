import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { LoadingScreen } from '@/components/LoadingScreen';

// Code-split below-the-fold sections to shrink initial JS bundle.
const About = lazy(() => import('@/components/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('@/components/Skills').then((m) => ({ default: m.Skills })));
const Achievements = lazy(() => import('@/components/Achievements').then((m) => ({ default: m.Achievements })));
const Experience = lazy(() => import('@/components/Experience').then((m) => ({ default: m.Experience })));
const Education = lazy(() => import('@/components/Education').then((m) => ({ default: m.Education })));
const Certifications = lazy(() => import('@/components/Certifications').then((m) => ({ default: m.Certifications })));
const Certificates = lazy(() => import('@/components/Certificates').then((m) => ({ default: m.Certificates })));
const Projects = lazy(() => import('@/components/Projects').then((m) => ({ default: m.Projects })));
const Availability = lazy(() => import('@/components/Availability').then((m) => ({ default: m.Availability })));
const References = lazy(() => import('@/components/References').then((m) => ({ default: m.References })));
const Contact = lazy(() => import('@/components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));
const CookieConsent = lazy(() => import('@/components/CookieConsent').then((m) => ({ default: m.CookieConsent })));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop').then((m) => ({ default: m.ScrollToTop })));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-gradient-dark">
        <Navigation />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
            <About />
            <Skills />
            <Achievements />
            <Experience />
            <Education />
            <Certifications />
            <Certificates />
            <Projects />
            <Availability />
            <References />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
