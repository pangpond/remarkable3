import type { ComponentProps, ComponentType, ReactNode } from "react";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@awesome.me/kit-ea57288417/icons/classic/brands";
import { faMobileAlt } from "@awesome.me/kit-ea57288417/icons/classic/solid";
import { faCode } from "@awesome.me/kit-ea57288417/icons/classic/solid";
import { faDatabase } from "@awesome.me/kit-ea57288417/icons/classic/solid";
import { faFolderOpen } from "@awesome.me/kit-ea57288417/icons/classic/solid";

type ProjectItem = {
  title: string;
  description: string;
  to: string;
  icon?: any; // FontAwesome icon
};

// FontAwesome Pro icons are now imported at the top

const projectList: ProjectItem[] = [
  {
    title: "React Native Library",
    description:
      "Discover our React Native library for building cross-platform mobile applications with ease and efficiency.",
    to: "/docs/react-native/react-native-library",
    icon: faReact,
  },
  {
    title: "Mobile Development",
    description:
      "Build beautiful and performant mobile apps with our comprehensive development tools and frameworks.",
    to: "/docs/mobile-development",
    icon: faMobileAlt,
  },
  {
    title: "Web Development",
    description:
      "Create modern web applications with our cutting-edge web development tools and best practices.",
    to: "/docs/web-development",
    icon: faCode,
  },
  {
    title: "Backend Services",
    description:
      "Scalable backend solutions and database management systems for enterprise applications.",
    to: "/docs/backend-services",
    icon: faDatabase,
  },
];

function ProjectCard({ title, description, to, icon }: ProjectItem): ReactNode {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 dark:border-slate-700/60 dark:from-slate-900 dark:to-slate-800/50"
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/10 group-hover:to-primary/20" />

      <div className="relative z-10 flex h-full flex-col">
        {icon ? (
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md dark:from-primary/20 dark:to-primary/30">
            <FontAwesomeIcon icon={icon} className="h-8 w-8" />
          </div>
        ) : (
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md dark:from-slate-700 dark:to-slate-600 dark:text-slate-300">
            <FontAwesomeIcon icon={faFolderOpen} className="h-8 w-8" />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2 group-hover:text-primary-dark">
          <span>Explore project</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectFeature(): ReactNode {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project) => (
            <ProjectCard key={project.to} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
