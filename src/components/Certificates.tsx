import { useState } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';
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
}

const certificates: Certificate[] = [
  { title: 'B.Sc. in Computer Science & Engineering', issuer: 'State University of Bangladesh', thumb: bsc, pdf: '/certificates/BSc_Certificate.pdf' },
  { title: 'MikroTik Certified Network Associate', issuer: 'MikroTik (MTCNA)', thumb: mtcna, pdf: '/certificates/MTCNA.pdf' },
  { title: 'MikroTik Certified Routing Engineer', issuer: 'MikroTik (MTCRE)', thumb: mtcre, pdf: '/certificates/MTCRE.pdf' },
  { title: 'Oracle Cloud Infrastructure', issuer: 'Oracle', thumb: oracle, pdf: '/certificates/Oracle_Cloud.pdf' },
  { title: 'Microsoft Power BI Certificate', issuer: 'Microsoft', thumb: powerbi, pdf: '/certificates/PowerBI.pdf' },
  { title: 'Trainocate Professional Certificate', issuer: 'Trainocate', thumb: trainocate, pdf: '/certificates/Trainocate.pdf' },
  { title: 'GEA Training Certificate', issuer: 'GEA', thumb: gea, pdf: '/certificates/GEA.pdf' },
  { title: 'NIIT Professional Training', issuer: 'NIIT', thumb: niit, pdf: '/certificates/NIIT.pdf' },
  { title: 'ISO Training Certificate', issuer: 'ISO', thumb: iso, pdf: '/certificates/ISO_Training.pdf' },
  { title: 'Job Experience — General Pharmaceuticals Ltd.', issuer: 'General Pharmaceuticals Ltd.', thumb: gpl, pdf: '/certificates/Job_General_Pharmaceuticals.pdf' },
  { title: 'Job Experience — Orion Infrastructure Ltd.', issuer: 'Orion Infrastructure Ltd.', thumb: orion, pdf: '/certificates/Job_Orion_Infrastructure.pdf' },
  { title: 'Työtodistus — Halpahalli Oy', issuer: 'Halpahalli Oy (Finland)', thumb: tyotodistus, pdf: '/certificates/Tyotodistus_Halpahalli.pdf' },
];

export const Certificates = () => {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              Certificates
            </h2>
            <p className="text-center text-muted-foreground text-sm font-mono mb-14">
              Verified credentials, training certificates, and employment letters
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {certificates.map((cert, i) => (
              <StaggerItem key={i}>
                <Card className="group overflow-hidden bg-card border-border hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <button
                    onClick={() => setActive(cert)}
                    className="relative aspect-[3/4] bg-muted overflow-hidden block"
                    aria-label={`Preview ${cert.title}`}
                  >
                    <img
                      src={cert.thumb}
                      alt={cert.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <span className="text-xs font-mono text-foreground inline-flex items-center gap-1.5">
                        <ExternalLink className="h-3 w-3" /> View
                      </span>
                    </div>
                  </button>
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-foreground leading-snug tracking-tight line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono line-clamp-1">{cert.issuer}</p>
                    <a
                      href={cert.pdf}
                      download
                      className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline pt-2"
                    >
                      <Download className="h-3 w-3" /> Download PDF
                    </a>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          <button
            onClick={() => setActive(null)}
            className="absolute right-3 top-3 z-10 p-2 rounded-md bg-background/80 backdrop-blur hover:bg-background border border-border"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
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