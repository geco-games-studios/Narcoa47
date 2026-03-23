'use client';

import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SectionTitle, SkillCategory } from '@/components/cards';
import { portfolioData } from '@/lib/portfolio-data';

export default function About() {
  const skills = portfolioData.skills;

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-primary/5">
        {/* About Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionTitle title="About me" description={portfolioData.shortBio} />

            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate game designer and full-stack developer specializing in game development and modern web applications. 
                    With expertise in C# with Unity, Next.js, React Native, Flutter, C# MAUI, and Python Django, I've worked on diverse projects 
                    ranging from game development to enterprise platforms and mobile solutions.
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <p>
                      Cavendish University (2021 - 2023) - Currently pursuing degree studies
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Professional Experience</h4>
                    <p>
                      Developer at Desac TV (Mufurila) | Contributor with TechKaizen on various development projects
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Notable Projects</h4>
                    <p>
                      Creator of 30+ unreleased projects on GitHub including an ERP Finance Platform and Accommodation Platform. 
                      Contributed to the screenplay and publication of the animated show "Monkey Business" (formerly Inshila Yamumana).
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Speaking & Community</h4>
                    <p>
                      Special guest speaker at NerdOtaku's Lscon 2023 discussing the gaming industry. 
                      Presenter at GDC Kitwe 2024 on AI and ML advancements in game development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto h-96 w-80">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="relative h-full w-full rounded-2xl border-4 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <Image
                    src="/Real/5.jpg"
                    alt={portfolioData.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              My Stack<span className="text-primary">.</span>
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              {/* My Stack */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-foreground">Technologies I Use</h3>
                <div className="grid gap-8">
                  {Object.entries(skills)
                    .slice(0, 2)
                    .map(([category, skillList]) => (
                      <SkillCategory
                        key={category}
                        category={category}
                        skills={skillList as string[]}
                      />
                    ))}
                </div>
              </div>

              {/* My Special Place */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-foreground">My Specializations</h3>
                <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 to-transparent p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in game development with C# and Unity, creating engaging gaming experiences. 
                    I'm equally skilled in building modern web applications with React and Next.js, 
                    mobile solutions with React Native and Flutter, and backend systems with Python Django. 
                    My passion lies in bridging the gap between game design and technical implementation.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['C# Unity', 'Next.js', 'React Native', 'Flutter', 'Python Django', 'Game Design'].map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Soft Skills<span className="text-primary">.</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills)
                .slice(2)
                .map(([category, skillList]) => (
                  <SkillCategory
                    key={category}
                    category={category}
                    skills={skillList as string[]}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
