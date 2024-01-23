import { contentLinkClasses } from "./styles";
import Image from "next/image";

export const FooterSection: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-black sm:pb-0">
      <p>
        This portfolio was inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className={contentLinkClasses}
        >
          Brittany Chiang
        </a>
        , who is way better than me at layout design! All content, projects,
        writings, and styles used in this portfolio are my own. Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          className={contentLinkClasses}
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className={contentLinkClasses}
        >
          Tailwind CSS
        </a>
        , and deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className={contentLinkClasses}
        >
          Vercel
        </a>
        .{" "}
        <a href="mailto:cwhitt91@gmail.com" target="_blank">
          <Image
            src={"/heart.png"}
            height={15}
            width={15}
            alt={""}
            className="inline-block"
          />{" "}
          <Image
            src={"/email.gif"}
            height={20}
            width={20}
            alt={"Get in touch!"}
            className="inline-block"
          />
        </a>
      </p>
    </footer>
  );
};
