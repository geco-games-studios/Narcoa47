'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SectionTitle, ProjectCard } from '@/components/cards';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = portfolioData.projects;
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-primary/5">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionTitle 
              title="Projects"
              description="A selection of my work and accomplishments"
            />
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="border-b border-border bg-card">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <h2 className="mb-12 text-4xl font-bold text-foreground">
                Featured Work<span className="text-primary">.</span>
              </h2>

              <div className="space-y-16">
                {featuredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="grid gap-8 md:grid-cols-2 md:items-center"
                  >
                    {/* Alternate layout for odd/even */}
                    {idx % 2 === 0 ? (
                      <>
                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={project.link}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
                          >
                            View Project
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={project.link}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
                          >
                            View Project
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <h2 className="mb-12 text-4xl font-bold text-foreground">
                Other Projects<span className="text-primary">.</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Ready to Collaborate<span className="text-primary">?</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link
              href="mailto:narcoa47@outlook.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
