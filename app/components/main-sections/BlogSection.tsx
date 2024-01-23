import {
  contentDateClasses,
  contentDivClasses,
  contentLinkClasses,
  divHeaderWrapperClasses,
  sectionClasses,
  sectionHeaderClasses,
  tagClasses,
} from "./styles";

type MediumData = {
  author: string;
  categories: Array<string>;
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};
type BlogProps = {
  posts: Array<MediumData>;
};

export const BlogSection: React.FC<BlogProps> = (props: BlogProps) => {
  const { posts } = props;
  const formatDate = (date: Date) => date.toDateString();
  return (
    <section id="blog" className={sectionClasses} aria-label="Blog">
      <div className={divHeaderWrapperClasses}>
        <h2 className={sectionHeaderClasses}>Blog</h2>
      </div>
      <div>
        <ol className="group/list">
          {posts.map((post) => (
            <a key={post.guid} href={post.link} target="_blank">
              <li key={post.guid} className="mb-12">
                <div className={contentDivClasses}>
                  <header
                    className={contentDateClasses}
                    aria-label={`${post.title} - ${formatDate(
                      new Date(post.pubDate)
                    )}`}
                  >
                    Published on {formatDate(new Date(post.pubDate))}
                  </header>

                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-bold">{post.title}</h3>
                    <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                      {post.categories.map((cat) => (
                        <li key={cat} className="mr-1.5 mt-2">
                          <div
                            className={tagClasses}
                            style={{
                              borderBottom: "5px solid #347BFF",
                            }}
                          >
                            {cat.toUpperCase()}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ol>
        <p className="text-center">
          <a
            href="https://medium.com/@cwhitt91"
            target="_blank"
            className={contentLinkClasses}
          >
            👉 Read more on Medium
          </a>
        </p>
      </div>
    </section>
  );
};
