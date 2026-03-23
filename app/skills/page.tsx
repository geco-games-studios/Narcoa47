'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SectionTitle, SkillCategory } from '@/components/cards';
import { portfolioData } from '@/lib/portfolio-data';

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-primary/5">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionTitle 
              title="Skills"
              description="A comprehensive overview of my technical and professional abilities"
            />

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="rounded-lg border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
                >
                  <SkillCategory
                    category={category}
                    skills={skillList as string[]}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proficiency Levels */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Expertise Levels<span className="text-primary">.</span>
            </h2>

            <div className="space-y-8">
              {[
                { skill: 'React & Next.js', level: 95 },
                { skill: 'TypeScript', level: 90 },
                { skill: 'Node.js & Express', level: 85 },
                { skill: 'Database Design', level: 85 },
                { skill: 'UI/UX Implementation', level: 80 },
                { skill: 'DevOps & Deployment', level: 75 },
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{skill}</h3>
                    <span className="text-sm text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Platforms */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Tools & Platforms<span className="text-primary">.</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                'Git & GitHub',
                'VS Code',
                'Figma',
                'Docker',
                'AWS',
                'Firebase',
                'PostgreSQL',
                'MongoDB',
                'Jest & Testing Library',
              ].map((tool) => (
                <div
                  key={tool}
                  className="rounded-lg border border-border bg-card p-4 text-center font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Certifications<span className="text-primary">.</span>
            </h2>

            <div className="space-y-4">
              {[
                'AWS Certified Solutions Architect',
                'Google Cloud Professional Data Engineer',
                'Full Stack Web Development - Udacity',
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-lg border border-border p-4 hover:border-primary transition-colors"
                >
                  <div className="h-3 w-3 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
