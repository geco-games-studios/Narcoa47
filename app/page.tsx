'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-32">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Content */}
              <div>
                <p className="mb-4 text-lg text-primary font-medium">
                  Hey, I'm {portfolioData.name.split(' ')[0]} 👋
                </p>
                <h1 className="text-balance mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {portfolioData.title}
                </h1>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {portfolioData.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:border-primary hover:shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-12 flex gap-8 pt-8 border-t border-border">
                  <div>
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative mx-auto h-96 w-80 md:h-full md:w-full max-w-md">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-full rounded-3xl border-4 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <Image
                    src="/Real/5.jpg"
                    alt={portfolioData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Preview */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground">Featured Work</h2>
              <p className="mt-2 text-muted-foreground">
                Check out some of my recent projects
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {portfolioData.projects.slice(0, 2).map((project) => (
                <Link
                  key={project.id}
                  href={project.link}
                  className="group rounded-lg border border-border overflow-hidden transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
