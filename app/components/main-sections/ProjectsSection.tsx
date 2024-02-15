import {
  contentDateClasses,
  contentDivClasses,
  contentLinkClasses,
  divHeaderWrapperClasses,
  sectionClasses,
  sectionHeaderClasses,
  tagClasses,
} from "./styles";

type GitHubData = {
  id: string;
  name: string;
  language: string;
  html_url: string;
  pushed_at: string;
  homepage: string;
  description: string;
  languages_url: string;
};
type ProjectsProps = {
  projects: Array<GitHubData>;
};

export const ProjectsSection: React.FC<ProjectsProps> = (
  props: ProjectsProps
) => {
  const { projects } = props;
  const formatDate = (date: Date) => date.toDateString();

  return (
    <section id="projects" className={sectionClasses} aria-label="Projects">
      <div className={divHeaderWrapperClasses}>
        <h2 className={sectionHeaderClasses}>Projects</h2>
      </div>
      <div>
        <ol className="group/list">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.homepage ? project.homepage : project.html_url}
              target="_blank"
            >
              <li key={project.id} className="mb-12">
                <div className={contentDivClasses}>
                  <header
                    className={contentDateClasses}
                    aria-label={`${project.name} - ${formatDate(
                      new Date(project.pushed_at)
                    )}`}
                  >
                    Last updated on {formatDate(new Date(project.pushed_at))}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-bold dark:text-white">
                      {project.name} {project.homepage && "🔗"}
                    </h3>
                    <div className="dark:text-slate font-mono">
                      {project?.description}
                    </div>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ol>
        <p className="text-center">
          <a
            href="https://github.com/cdwhitt"
            target="_blank"
            className={contentLinkClasses}
          >
            👉 View more on GitHub
          </a>
        </p>
      </div>
    </section>
  );
};
