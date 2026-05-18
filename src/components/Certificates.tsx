import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/motion/AnimatedSection';

import bsc from '@/assets/certificates/thumb_BSc_Certificate-1.jpg';
import iso from '@/assets/certificates/thumb_ISO_Training-1.jpg';
import gpl from '@/assets/certificates/thumb_Job_General_Pharmaceuticals-1.jpg';
import orion from '@/assets/certificates/thumb_Job_Orion_Infrastructure-1.jpg';
import mtcna from '@/assets/certificates/thumb_MTCNA-1.jpg';
import mtcre from '@/assets/certificates/thumb_MTCRE-1.jpg';
import niit from '@/assets/certificates/thumb_NIIT-1.jpg';
import oracle from '@/assets/certificates/thumb_Oracle_Cloud-1.jpg';
import gea from '@/assets/certificates/thumb_GEA-1.jpg';
import powerbi from '@/assets/certificates/thumb_PowerBI-1.jpg';
import trainocate from '@/assets/certificates/thumb_Trainocate-1.jpg';
import tyotodistus from '@/assets/certificates/thumb_Tyotodistus-1.jpg';

interface Certificate {
  title: string;
  issuer: string;
  thumb: string;
  pdf: string;
  category: 'Education' | 'Technical' | 'Work Experience';
}

const certificates: Certificate[] = [
  { title: 'B.Sc. in Computer Science & Engineering', issuer: 'State University of Bangladesh', thumb: bsc, pdf: '/certificates/BSc_Certificate.pdf', category: 'Education' },
  { title: 'MikroTik Certified Network Associate', issuer: 'MikroTik (MTCNA)', thumb: mtcna, pdf: '/certificates/MTCNA.pdf', category: 'Technical' },
  { title: 'MikroTik Certified Routing Engineer', issuer: 'MikroTik (MTCRE)', thumb: mtcre, pdf: '/certificates/MTCRE.pdf', category: 'Technical' },
  { title: 'Oracle Cloud Infrastructure', issuer: 'Oracle', thumb: oracle, pdf: '/certificates/Oracle_Cloud.pdf', category: 'Technical' },
  { title: 'Microsoft Power BI Certificate', issuer: 'Microsoft', thumb: powerbi, pdf: '/certificates/PowerBI.pdf', category: 'Technical' },
  { title: 'Trainocate Professional Certificate', issuer: 'Trainocate', thumb: trainocate, pdf: '/certificates/Trainocate.pdf', category: 'Technical' },
  { title: 'GEA Training Certificate', issuer: 'GEA', thumb: gea, pdf: '/certificates/GEA.pdf', category: 'Technical' },
  { title: 'NIIT Professional Training', issuer: 'NIIT', thumb: niit, pdf: '/certificates/NIIT.pdf', category: 'Education' },
  { title: 'ISO Training Certificate', issuer: 'ISO', thumb: iso, pdf: '/certificates/ISO_Training.pdf', category: 'Technical' },
  { title: 'Job Experience — General Pharmaceuticals Ltd.', issuer: 'General Pharmaceuticals Ltd.', thumb: gpl, pdf: '/certificates/Job_General_Pharmaceuticals.pdf', category: 'Work Experience' },
  { title: 'Job Experience — Orion Infrastructure Ltd.', issuer: 'Orion Infrastructure Ltd.', thumb: orion, pdf: '/certificates/Job_Orion_Infrastructure.pdf', category: 'Work Experience' },
  { title: 'Työtodistus — JNT', issuer: 'JNT (Finland)', thumb: tyotodistus, pdf: '/certificates/Tyotodistus_JNT.pdf', category: 'Work Experience' },
];

const filters = ['All', 'Education', 'Technical', 'Work Experience'] as const;
type Filter = typeof filters[number];

export const Certificates = () => {
  const [active, setActive] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<Filter>('All');

  const visible = filter === 'All' ? certificates : certificates.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              Certificates
            </h2>
            <p className="text-center text-muted-foreground text-sm font-mono mb-8">
              Verified credentials, training certificates, and employment letters
            </p>
            <div
              className="flex flex-wrap justify-center gap-2 mb-12"
              role="tablist"
              aria-label="Filter certificates by category"
            >
              {filters.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="certificates-grid"
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <StaggerContainer
            id="certificates-grid"
            role="list"
            aria-label={`${visible.length} certificates${filter === 'All' ? '' : ` in ${filter}`}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visible.map((cert) => (
              <StaggerItem key={cert.pdf}>
                <Card
                  role="listitem"
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 focus-within:border-primary focus-within:shadow-xl focus-within:shadow-primary/10 focus-within:-translate-y-1.5 transition-all duration-300 h-full flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setActive(cert)}
                    className="relative aspect-[3/4] bg-muted overflow-hidden block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    aria-label={`Preview ${cert.title} certificate from ${cert.issuer}`}
                  >
                    <img
                      src={cert.thumb}
                      alt={cert.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-foreground border border-border"
                      aria-hidden="true"
                    >
                      {cert.category}
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="p-5 flex-1 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-foreground leading-tight tracking-tight line-clamp-2 min-h-[3.5rem]">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono line-clamp-1">{cert.issuer}</p>
                    <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setActive(cert)}
                        aria-label={`View ${cert.title}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" /> View
                      </button>
                      <a
                        href={cert.pdf}
                        download
                        aria-label={`Download ${cert.title} PDF`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono border border-border text-foreground hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" /> Download
                      </a>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden"
          aria-label={active ? `${active.title} certificate preview` : 'Certificate preview'}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-3 top-3 z-10 p-2 rounded-md bg-background/80 backdrop-blur hover:bg-background border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close certificate preview"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          {active && (
            <iframe
              src={`${active.pdf}#view=FitH`}
              title={active.title}
              className="w-full h-full bg-muted"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};