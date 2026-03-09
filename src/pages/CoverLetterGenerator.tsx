import { useState, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, Copy, Check, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const formatDate = () => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const CoverLetterGenerator = () => {
  const { toast } = useToast();
  const letterRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    recipient: '',
    company: '',
    jobTitle: '',
    skills: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const recipient = form.recipient || 'Hiring Manager';
  const company = form.company || '[Company Name]';
  const jobTitle = form.jobTitle || '[Job Title]';
  const skills = form.skills || 'Azure, Linux, MikroTik, Red Hat';

  const plainText = `Joyanta Dey | IT Infrastructure & Support Specialist
Kokkola, Finland | +358 449874028 | joyanta.it@gmail.com
Portfolio: joyanta.fi | LinkedIn: linkedin.com/in/joyantadey

Date: ${formatDate()}
To: ${recipient}
Company: ${company}

Subject: Application for ${jobTitle} – Joyanta Dey

I am writing to express my strong interest in the ${jobTitle} position at ${company}. Having recently relocated to Finland, I am eager to apply my 10+ years of experience in IT infrastructure and service management to your team.

My background is a blend of high-level infrastructure leadership and hands-on technical problem-solving. At General Pharmaceuticals Ltd., I managed complex environments involving Azure, Cloudflare, and ${skills}. I also led the deployment of Bangladesh's first digital toll system in partnership with G.E.A France, maintaining 99.5% uptime.

Why I am a strong fit:

• Technical Versatility: Expertise in MikroTik, Red Hat systems, and Azure, with a focus on reliability and security.
• Finnish Integration: I am actively learning Finnish (Elementary) and hold a Finnish Driving License, Hygiene Passport, and Occupational Safety Card.
• Proactive Mindset: My personal projects, like joyanta.fi, demonstrate my passion for modern web and cloud technologies.

I have a valid work permit and am open to permanent, contract, or seasonal IT roles. I look forward to discussing how I can contribute to ${company}.

Sincerely,

Joyanta Dey
IT Infrastructure & Support Specialist
joyanta.fi`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    toast({ title: 'Copied to clipboard!' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = async () => {
    const element = letterRef.current;
    if (!element) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: 0,
      filename: `Cover_Letter_${company.replace(/\s+/g, '_')}_Joyanta_Dey.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    };

    html2pdf().set(opt).from(element).save();
    toast({ title: 'PDF downloading...' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-mono">
              Cover Letter Generator
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Generate a tailored, professional cover letter in seconds.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground font-mono">
                      Application Details
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recipient" className="text-muted-foreground text-sm">
                      Recipient Name
                    </Label>
                    <Input
                      id="recipient"
                      placeholder="Hiring Manager"
                      value={form.recipient}
                      onChange={(e) => update('recipient', e.target.value)}
                      className="bg-muted/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-muted-foreground text-sm">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nokia"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className="bg-muted/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-muted-foreground text-sm">
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      placeholder="IT Support Specialist"
                      value={form.jobTitle}
                      onChange={(e) => update('jobTitle', e.target.value)}
                      className="bg-muted/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-muted-foreground text-sm">
                      Specific Skills to Highlight
                    </Label>
                    <Textarea
                      id="skills"
                      placeholder="Azure, Linux, MikroTik, Red Hat"
                      value={form.skills}
                      onChange={(e) => update('skills', e.target.value)}
                      className="bg-muted/50 border-border/50 min-h-[80px] resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button onClick={handleDownloadPDF} className="flex-1 gap-2">
                      <FileDown className="w-4 h-4" />
                      Download PDF
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleCopy}
                      className="flex-1 gap-2"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copied ? 'Copied!' : 'Copy Text'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Live A4 Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="text-sm text-muted-foreground mb-3 font-mono">
                Live Preview
              </div>
              <div className="bg-muted/30 rounded-lg p-4 flex-1 flex items-start justify-center overflow-auto max-h-[80vh]">
                {/* A4 Paper */}
                <div
                  ref={letterRef}
                  className="bg-white text-black shadow-2xl"
                  style={{
                    width: '210mm',
                    minHeight: '297mm',
                    padding: '25mm 25mm 20mm 25mm',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11pt',
                    lineHeight: '1.6',
                    maxWidth: '100%',
                    transform: 'scale(var(--paper-scale, 0.55))',
                    transformOrigin: 'top center',
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      borderBottom: '2px solid #1a1a1a',
                      paddingBottom: '12px',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ fontSize: '16pt', fontWeight: 700, letterSpacing: '-0.5px' }}>
                      Joyanta Dey
                    </div>
                    <div style={{ fontSize: '9pt', color: '#555', marginTop: '2px' }}>
                      IT Infrastructure & Support Specialist
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#666', marginTop: '6px', lineHeight: '1.8' }}>
                      Kokkola, Finland &nbsp;|&nbsp; +358 449874028 &nbsp;|&nbsp;{' '}
                      <a href="mailto:joyanta.it@gmail.com" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        joyanta.it@gmail.com
                      </a>
                      <br />
                      Portfolio:{' '}
                      <a href="https://joyanta.fi" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        joyanta.fi
                      </a>
                      &nbsp;|&nbsp; LinkedIn:{' '}
                      <a
                        href="https://linkedin.com/in/joyantadey"
                        style={{ color: '#0066cc', textDecoration: 'none' }}
                      >
                        linkedin.com/in/joyantadey
                      </a>
                    </div>
                  </div>

                  {/* Date & Recipient */}
                  <div style={{ marginBottom: '20px', fontSize: '10.5pt' }}>
                    <div>Date: {formatDate()}</div>
                    <div>To: {recipient}</div>
                    <div>Company: {company}</div>
                  </div>

                  {/* Subject */}
                  <div style={{ fontWeight: 700, marginBottom: '18px', fontSize: '11pt' }}>
                    Subject: Application for {jobTitle} – Joyanta Dey
                  </div>

                  {/* Body */}
                  <div style={{ marginBottom: '16px' }}>
                    I am writing to express my strong interest in the {jobTitle} position at{' '}
                    {company}. Having recently relocated to Finland, I am eager to apply my 10+
                    years of experience in IT infrastructure and service management to your team.
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    My background is a blend of high-level infrastructure leadership and hands-on
                    technical problem-solving. At General Pharmaceuticals Ltd., I managed complex
                    environments involving Azure, Cloudflare, and {skills}. I also led the
                    deployment of Bangladesh's first digital toll system in partnership with G.E.A
                    France, maintaining 99.5% uptime.
                  </div>

                  <div style={{ fontWeight: 600, marginBottom: '10px' }}>
                    Why I am a strong fit:
                  </div>

                  <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Technical Versatility:</strong> Expertise in MikroTik, Red Hat
                      systems, and Azure, with a focus on reliability and security.
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Finnish Integration:</strong> I am actively learning Finnish
                      (Elementary) and hold a Finnish Driving License, Hygiene Passport, and
                      Occupational Safety Card.
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Proactive Mindset:</strong> My personal projects, like{' '}
                      <a href="https://joyanta.fi" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        joyanta.fi
                      </a>
                      , demonstrate my passion for modern web and cloud technologies.
                    </li>
                  </ul>

                  <div style={{ marginBottom: '30px' }}>
                    I have a valid work permit and am open to permanent, contract, or seasonal IT
                    roles. I look forward to discussing how I can contribute to {company}.
                  </div>

                  {/* Closing */}
                  <div>
                    <div style={{ marginBottom: '4px' }}>Sincerely,</div>
                    <div style={{ marginTop: '30px', fontWeight: 600 }}>Joyanta Dey</div>
                    <div style={{ fontSize: '9.5pt', color: '#555' }}>
                      IT Infrastructure & Support Specialist
                    </div>
                    <div style={{ fontSize: '9pt' }}>
                      <a href="https://joyanta.fi" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        joyanta.fi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Privacy Note */}
          <div className="text-center mt-10">
            <p className="text-xs text-muted-foreground/60 font-mono">
              Privacy Note: Data entered here is processed in real-time and is not stored on any
              server.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoverLetterGenerator;
