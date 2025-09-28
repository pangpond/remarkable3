import type { ComponentProps, ComponentType, ReactNode } from "react";
import Link from "@docusaurus/Link";

type ProjectItem = {
  title: string;
  description: string;
  to: string;
  Icon?: ComponentType<ComponentProps<"svg">>;
};

const projectList: ProjectItem[] = [
  {
    title: "React Native Library",
    description:
      "Discover our React Native library for building cross-platform mobile applications with ease and efficiency.",
    to: "/docs/react-native/react-native-library",
  },
  {
    title: "React Native Library",
    description:
      "Discover our React Native library for building cross-platform mobile applications with ease and efficiency.",
    to: "/docs/react-native/react-native-library",
  },
  {
    title: "React Native Library",
    description:
      "Discover our React Native library for building cross-platform mobile applications with ease and efficiency.",
    to: "/docs/react-native/react-native-library",
  },
  {
    title: "React Native Library",
    description:
      "Discover our React Native library for building cross-platform mobile applications with ease and efficiency.",
    to: "/docs/react-native/react-native-library",
  },
];

function ProjectCard({ title, description, to, Icon }: ProjectItem): ReactNode {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <div>
        {Icon ? (
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
            <Icon className="h-8 w-8" role="img" />
          </div>
        ) : null}
        <p className="text-xl font-semibold">{title}</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-all group-hover:gap-2 group-hover:text-primary-dark">
        View docs ->
      </span>
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
