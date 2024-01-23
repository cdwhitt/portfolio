"use client";
import { experienceContent, skillsColorLookup } from "./content";
import {
  contentDateClasses,
  contentDivClasses,
  contentLinkClasses,
  divHeaderWrapperClasses,
  sectionClasses,
  sectionHeaderClasses,
  skillsClasses,
} from "./styles";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className={sectionClasses}
      aria-label="Work experience"
    >
      <div className={divHeaderWrapperClasses}>
        <h2 className={sectionHeaderClasses}>Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceContent.map((job) => (
            <li key={job.id} className="mb-12">
              <div className={contentDivClasses}>
                <header
                  className={contentDateClasses}
                  aria-label={job.duration}
                >
                  {job.duration}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3
                    className="font-bold"
                    aria-label={`${job.title} - ${job.id}`}
                  >
                    {job.title} ⚡️ {job.id}
                  </h3>
                  {job.url && (
                    <p>
                      🔗:{" "}
                      <a
                        href={job.url}
                        target="_blank"
                        className={contentLinkClasses}
                      >
                        {`${job.url.substring(0, 30)}${
                          job.url.length > 30 ? "..." : ""
                        }`}
                      </a>
                    </p>
                  )}

                  <p>{job.about}</p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div
                          className={skillsClasses}
                          style={
                            Array.isArray(skillsColorLookup[skill])
                              ? {
                                  borderBottom: "5px",
                                  borderStyle: "solid",
                                  borderImage: `linear-gradient(to right, ${skillsColorLookup[skill][0]}, ${skillsColorLookup[skill][1]}) 1`,
                                }
                              : {
                                  borderBottom: `5px solid ${skillsColorLookup[skill]}`,
                                }
                          }
                        >
                          {skill.toUpperCase()}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-center">
          <a
            href="https://www.linkedin.com/in/casey-whittaker/"
            target="_blank"
            className={contentLinkClasses}
          >
            👉 Connect with me on LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};
