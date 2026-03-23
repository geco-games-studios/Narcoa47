import { CheckCircle2 } from 'lucide-react';

export function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
        <span className="text-primary">.</span>
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function ExperienceCard({
  company,
  position,
  duration,
  description,
  highlights,
}: {
  company: string;
  position: string;
  duration: string;
  description: string;
  highlights?: string[];
}) {
  return (
    <div className="border-l-4 border-primary pl-6 py-4">
      <div className="mb-2">
        <a
          href="#"
          className="font-semibold text-foreground transition-colors hover:text-primary"
        >
          {position}
        </a>
        <p className="text-sm text-muted-foreground">
          {company} • {duration}
        </p>
      </div>
      <p className="mb-3 text-muted-foreground">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="space-y-1">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
}: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}) {
  return (
    <a
      href={link}
      className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-foreground">{category}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
