"use client";
import { useEffect, useState } from "react";
import { MainHeader } from "./components/header-sections/MainHeader";
import { Navigation } from "./components/header-sections/Navigation";
import { SocialLinks } from "./components/header-sections/SocialLinks";
import { AboutSection } from "./components/main-sections/AboutSection";
import { BlogSection } from "./components/main-sections/BlogSection";
import { ExperienceSection } from "./components/main-sections/ExperienceSection";
import { ProjectsSection } from "./components/main-sections/ProjectsSection";
import { FooterSection } from "./components/main-sections/FooterSection";

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cwhitt91"
        );
        const data = await res.json();
        const items = data.items.slice(0, 3);
        setPosts(items);
      } catch {
        setError(true);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.github.com/users/cdwhitt/repos");
        const data = await res.json();

        const filteredData = data.filter(
          (item: { description: null }) => item.description !== null
        );

        setProjects(filteredData);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 xl:px-10">
        <div>
          <MainHeader />
          <Navigation />
        </div>
        <div>
          <SocialLinks />
        </div>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection projects={projects} />
        <BlogSection posts={posts} />
        <FooterSection />
      </main>
    </div>
  );
}
