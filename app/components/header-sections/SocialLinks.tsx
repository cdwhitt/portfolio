import { socialLinks } from "./content";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="ml-1 mt-8 flex lg:justify-center" aria-label="Social media">
      {socialLinks.map((link) => (
        <li key={link.id} className="mr-5 text-xs">
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.id} (opens in a new tab)`}
          >
            <span className="sr-only">{link.id}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
