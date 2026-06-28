'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Send, Loader2 } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const openings = [
  { id: 'j1', title: 'Sous Chef', department: 'Kitchen', location: 'New York, NY', type: 'Full-time' },
  { id: 'j2', title: 'Line Cook', department: 'Kitchen', location: 'New York, NY', type: 'Full-time' },
  { id: 'j3', title: 'Pastry Chef', department: 'Kitchen', location: 'New York, NY', type: 'Part-time' },
  { id: 'j4', title: 'Restaurant Manager', department: 'Operations', location: 'New York, NY', type: 'Full-time' },
  { id: 'j5', title: 'Server', department: 'Front of House', location: 'New York, NY', type: 'Part-time' },
  { id: 'j6', title: 'Delivery Driver', department: 'Logistics', location: 'New York, NY', type: 'Full-time' },
];

export default function CareersPage() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success('Application submitted! We will be in touch soon.');
  };

  return (
    <div className="pt-20">
      <PageHeader
        badge="Careers"
        title="Join Our Team"
        subtitle="Be part of a passionate team dedicated to culinary excellence"
      />

      <section className="section-padding">
        <div className="container-mx container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl font-700">Open Positions</h2>
            <p className="mt-3 text-muted-foreground">Find your next opportunity with us</p>
          </motion.div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-600 text-lg">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="group">
                  Apply
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-mx container-px max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl font-700">General Application</h2>
            <p className="mt-3 text-muted-foreground">Don&apos;t see the right role? Send us your resume.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ca-name">Name</Label>
                <Input id="ca-name" required placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="ca-email">Email</Label>
                <Input id="ca-email" required type="email" placeholder="you@example.com" className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="ca-role">Desired Role</Label>
              <Input id="ca-role" required placeholder="e.g. Chef, Server, Manager" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="ca-cover">Cover Letter</Label>
              <Textarea id="ca-cover" required rows={5} placeholder="Tell us about yourself..." className="mt-1.5" />
            </div>
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting...</> : <><Send className="h-4 w-4 mr-2" /> Submit Application</>}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
