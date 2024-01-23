import Link from "next/link";
import { navItems } from "./content";

export const Navigation: React.FC = () => {
  const span1Classes = `nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-blue group-focus-visible:w-16 group-focus-visible:bg-blue`;
  const span2Classes = `nav-text text-sm font-bold font-mono uppercase tracking-widest text-blue text-black group-focus-visible:text-blue`;
  const aClasses = `group flex items-center py-3`;
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((link) => {
          return (
            <li key={link.name}>
              <Link className={aClasses} href={link.href}>
                <span className={span1Classes} />
                <span className={span2Classes}>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
