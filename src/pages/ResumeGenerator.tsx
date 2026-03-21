import { useRef, useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileDown, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ResumeGenerator = () => {
  const { toast } = useToast();
  const resumeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paperScale, setPaperScale] = useState(0.55);

  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth - 16;
      const paperWidthPx = 210 * 3.7795;
      const scale = Math.min(containerWidth / paperWidthPx, 0.6);
      setPaperScale(scale);
    }
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;
    const html2pdf = (await import('html2pdf.js')).default;
    const opt = {
      margin: 0,
      filename: 'Joyanta_Dey_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    };
    html2pdf().set(opt).from(element).save();
    toast({ title: 'PDF downloading...' });
  };

  const sectionTitle = (text: string) => ({
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11pt',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
    borderBottom: '2px solid #1a1a1a',
    paddingBottom: '4px',
    marginBottom: '10px',
    marginTop: '18px',
    color: '#111',
  });

  const link = {
    color: '#0066cc',
    textDecoration: 'none',
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-mono">
              Smart Resume
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              ATS-optimized, recruiter-ready professional CV — live preview &amp; instant PDF.
            </p>
            <div className="flex justify-center gap-3">
              <Button onClick={handleDownloadPDF} className="gap-2">
                <FileDown className="w-4 h-4" />
                Download PDF
              </Button>
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() =>
                  containerRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Eye className="w-4 h-4" />
                Preview
              </Button>
            </div>
          </motion.div>

          {/* Live A4 Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="text-sm text-muted-foreground mb-3 font-mono text-center">
              Live Preview
            </div>
            <div
              ref={containerRef}
              className="bg-muted/30 rounded-lg p-2 sm:p-4 overflow-auto max-h-[85vh] mx-auto"
              style={{ maxWidth: '900px' }}
            >
              <div
                style={{
                  width: `${210 * 3.7795 * paperScale}px`,
                  height: `${297 * 3.7795 * paperScale * 1.05}px`,
                  margin: '0 auto',
                  overflow: 'hidden',
                }}
              >
                <div
                  ref={resumeRef}
                  className="bg-white text-black shadow-2xl"
                  style={{
                    width: '210mm',
                    minHeight: '297mm',
                    padding: '18mm 20mm 15mm 20mm',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '9.5pt',
                    lineHeight: '1.55',
                    color: '#222',
                    transform: `scale(${paperScale})`,
                    transformOrigin: 'top left',
                  }}
                >
                  {/* ===== HEADER ===== */}
                  <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '22pt',
                        fontWeight: 800,
                        letterSpacing: '-0.5px',
                        color: '#000',
                      }}
                    >
                      JOYANTA DEY
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '10pt',
                        color: '#444',
                        marginTop: '2px',
                        letterSpacing: '1px',
                      }}
                    >
                      IT Infrastructure &amp; Support Specialist
                    </div>
                    <div
                      style={{
                        fontSize: '8.5pt',
                        color: '#555',
                        marginTop: '8px',
                        lineHeight: '1.8',
                      }}
                    >
                      Kokkola, Finland &nbsp;|&nbsp;{' '}
                      <a href="mailto:likejoy@gmail.com" style={link}>
                        likejoy@gmail.com
                      </a>
                      &nbsp;|&nbsp; +358 449874028 &nbsp;|&nbsp;{' '}
                      <a href="https://joyanta.fi" style={link}>
                        joyanta.fi
                      </a>
                      &nbsp;|&nbsp;{' '}
                      <a href="https://linkedin.com/in/joyantadey" style={link}>
                        linkedin.com/in/joyantadey
                      </a>
                    </div>
                  </div>

                  {/* ===== PROFESSIONAL SUMMARY ===== */}
                  <div style={sectionTitle('summary')}>Professional Summary</div>
                  <p style={{ marginBottom: '6px' }}>
                    Versatile IT Infrastructure &amp; Support Specialist with over 10 years of
                    experience managing enterprise-grade environments (99.9% uptime) and
                    cybersecurity deployments (CrowdStrike, Fortinet). Currently based in Finland
                    with a valid work permit, I combine deep technical expertise in Azure, Linux,
                    and Networking with a proactive approach to local integration (Elementary
                    Finnish, Occupational Safety Card).
                  </p>

                  {/* ===== CORE SKILLS ===== */}
                  <div style={sectionTitle('skills')}>Core Competencies</div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '3px' }}>
                        Infrastructure &amp; Cloud
                      </div>
                      <div style={{ fontSize: '8.5pt', color: '#333' }}>
                        Azure (AD, VMs, Entra ID) · AWS (EC2, S3) · Active Directory · Group
                        Policy · Hyper-V · VMware · Windows Server · Linux (RHEL, Ubuntu)
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '3px' }}>
                        Networking
                      </div>
                      <div style={{ fontSize: '8.5pt', color: '#333' }}>
                        MikroTik (MTCNA) · Cisco · VPN/IPSec · VLAN · DNS/DHCP · Load Balancing ·
                        Cloudflare · SSL/TLS · TCP/IP
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '3px' }}>
                        Security &amp; Tools
                      </div>
                      <div style={{ fontSize: '8.5pt', color: '#333' }}>
                        CrowdStrike · Fortinet · HA Firewalls · SIEM · ServiceNow · Jira ·
                        ITIL · PowerShell · Bash
                      </div>
                    </div>
                  </div>

                  {/* ===== EXPERIENCE ===== */}
                  <div style={sectionTitle('experience')}>Professional Experience</div>

                  {/* Role 1 */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '10pt' }}>
                          IT Manager &amp; Infrastructure Lead
                        </span>
                        <span style={{ color: '#555' }}> — <a href="https://generalpharma.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'underline' }}>General Pharmaceuticals Ltd.</a></span>
                      </div>
                      <div style={{ fontSize: '8.5pt', color: '#666', whiteSpace: 'nowrap' }}>
                        2016 – 2024
                      </div>
                    </div>
                    <ul style={{ paddingLeft: '16px', marginTop: '4px', marginBottom: 0 }}>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Led</strong> a cross-functional team of <strong>10+ IT professionals</strong>, implementing standardised
                        workflows that <strong>increased system reliability by 30%</strong> and reduced mean
                        time to resolution.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Managed</strong> enterprise Azure (AD, VMs, Entra ID) and on-prem Hyper-V environments,
                        maintaining <strong>99.9% uptime</strong> across 500+ endpoints and 20+ servers.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Deployed</strong> CrowdStrike EDR and HA Fortinet firewalls, <strong>reducing security
                        incidents by 40%</strong> and achieving full compliance with industry audits.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Designed</strong> and maintained MikroTik-based SD-WAN across 4 branch offices,
                        optimising bandwidth utilisation by 25% through VLAN segmentation and QoS.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Administered</strong> Cloudflare WAF, DNS, and SSL/TLS certificates for 15+
                        public-facing domains, eliminating downtime from DDoS and certificate-expiry
                        events.
                      </li>
                    </ul>
                  </div>

                  {/* Role 2 */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '10pt' }}>
                        Network Administrator &amp; Project Lead
                        </span>
                        <span style={{ color: '#555' }}> — <a href="https://www.orion-group.net/" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'underline' }}>Orion Infrastructure Ltd.</a> (<a href="https://mmhf.com.bd" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'underline' }}>G.E.A France Partnership</a>)</span>
                      </div>
                      <div style={{ fontSize: '8.5pt', color: '#666', whiteSpace: 'nowrap' }}>
                        2010 – 2018
                      </div>
                    </div>
                    <ul style={{ paddingLeft: '16px', marginTop: '4px', marginBottom: 0 }}>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Spearheaded</strong> Bangladesh's first digital toll collection system, processing{' '}
                        <strong>50,000+ daily vehicles</strong> with <strong>99.5% system uptime</strong>.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Integrated</strong> ETC (Electronic Toll Collection), IoT sensors, and CCTV
                        surveillance into a unified real-time monitoring platform.
                      </li>
                      <li style={{ marginBottom: '3px' }}>
                        <strong>Coordinated</strong> with G.E.A France engineers on hardware deployment, network
                        architecture, and failover strategies ensuring zero data loss during peak
                        traffic.
                      </li>
                    </ul>
                  </div>

                  {/* ===== EDUCATION ===== */}
                  <div style={sectionTitle('education')}>Education</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <div>
                      <span style={{ fontWeight: 700 }}>BSc in Computer Science &amp; Engineering</span>
                      <span style={{ color: '#555' }}> — <a href="https://www.sub.ac.bd/" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'underline' }}>State University of Bangladesh</a></span>
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#666' }}>2010 – 2014</div>
                  </div>

                  {/* ===== CERTIFICATIONS ===== */}
                  <div style={sectionTitle('certs')}>Certifications</div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '2px 20px',
                      fontSize: '9pt',
                    }}
                  >
                    <div>• MikroTik Certified Network Associate (MTCNA)</div>
                    <div>• Red Hat System Administration I (RH124)</div>
                    <div>• Google IT Support Professional Certificate</div>
                    <div>• Fortinet NSE 1–3 Network Security</div>
                    <div>• ISC² Certified in Cybersecurity (CC)</div>
                    <div>• ITIL v4 Foundation</div>
                  </div>

                  {/* ===== PROJECTS ===== */}
                  <div style={sectionTitle('projects')}>Key Projects</div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700 }}>joyanta.fi</span> — Personal portfolio &amp;
                    lab built with React, TypeScript, Tailwind CSS, and Framer Motion. Demonstrates
                    modern web development practices and cloud deployment workflows.
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700 }}>gplcosmo.com</span> — Corporate website
                    managed end-to-end: Cloudflare CDN, SSL, DNS, performance optimisation, and
                    uptime monitoring.
                  </div>

                  {/* ===== LANGUAGES & CREDENTIALS ===== */}
                  <div style={sectionTitle('languages')}>
                    Languages &amp; Finnish Credentials
                  </div>
                  <div style={{ display: 'flex', gap: '30px' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '2px' }}>
                        Languages
                      </div>
                      <div style={{ fontSize: '9pt' }}>
                        Bengali (Native) · English (Upper Intermediate / B2) · Finnish (Elementary / A2)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '2px' }}>
                        Finnish Credentials
                      </div>
                      <div style={{ fontSize: '9pt' }}>
                        Finnish Driving License (A &amp; B) · Hygiene Passport · Occupational Safety Card
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground/60 font-mono">
              ATS-optimized single-column layout · All links clickable in PDF · No data stored
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeGenerator;
