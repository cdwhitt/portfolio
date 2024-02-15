import {
  contentLinkClasses,
  divHeaderWrapperClasses,
  sectionClasses,
  sectionHeaderClasses,
} from "./styles";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className={sectionClasses} aria-label="About me">
      <div className={divHeaderWrapperClasses}>
        <h2 className={sectionHeaderClasses}>About</h2>
      </div>
      <div className="dark:text-slate">
        <p className="mb-4">
          In the era of personal blogs and MySpace, the limitless creativity on
          the internet captivated me. As a kid, I was fascinated by how websites
          worked; I had no idea that people with fine-tuned skills could use
          HTML and CSS to create visually striking websites, but I knew I wanted
          to learn. When I was 12 years old, I began my digital foray by
          launching my first blog. Despite a small readership, it was my first
          real venture into web design, teaching me invaluable skills as I
          experimented with HTML, CSS, and even PHP. This blog wasn't just a
          youthful hobby; it laid the groundwork for my future in software
          development.
        </p>
        <p className="mb-4">
          Fast forward to today, and thanks to{" "}
          <a
            href="http://www.launchacademy.com"
            target="_blank"
            className={contentLinkClasses}
          >
            Launch Academy
          </a>{" "}
          in Boston, my programming skills have flourished. Now, I'm proudly
          working as a Software Engineer, having been employed by three
          different companies - two startups and one large company - in the
          Boston area, turning my early passion into a thriving career.
        </p>
        <p className="mb-4">
          When I'm not writing code, you can find me with a book in hand,
          probably sitting in a park, trying to hit{" "}
          <a
            href="https://www.goodreads.com/user/show/104339093-casey-whittaker"
            target="_blank"
            className={contentLinkClasses}
          >
            my reading goal for the year
          </a>
          .
        </p>
      </div>
    </section>
  );
};
