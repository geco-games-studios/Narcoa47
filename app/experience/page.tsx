'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SectionTitle, ExperienceCard } from '@/components/cards';
import { portfolioData } from '@/lib/portfolio-data';

export default function Experience() {
  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-primary/5">
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <SectionTitle 
              title="Experience"
              description="A timeline of my professional journey and accomplishments"
            />

            <div className="space-y-12">
              {portfolioData.experience.map((job) => (
                <ExperienceCard
                  key={job.id}
                  company={job.company}
                  position={job.position}
                  duration={job.duration}
                  description={job.description}
                  highlights={job.highlights}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline visual indicator */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              What I've Learned<span className="text-primary">.</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Technical Growth</h3>
                <p className="text-muted-foreground">
                  Mastered modern web technologies and best practices in software architecture, 
                  performance optimization, and secure coding.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
                <p className="text-muted-foreground">
                  Led teams, mentored junior developers, and collaborated with cross-functional groups 
                  to deliver high-impact projects.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Problem Solving</h3>
                <p className="text-muted-foreground">
                  Developed strong analytical skills to identify complex issues and implement scalable solutions 
                  that improve business outcomes.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                <p className="text-muted-foreground">
                  Learned to effectively communicate with stakeholders, clients, and team members 
                  to ensure project success and alignment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
