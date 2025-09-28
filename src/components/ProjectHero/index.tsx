import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type ProjectHeroProps = {
  title: string;
  subtitle?: string;
};

export default function ProjectHero({
  title,
  subtitle,
}: ProjectHeroProps): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const description = subtitle ?? siteConfig.tagline;

  return (
    <div className="relative isolate px-6 pt-12 pb-20 lg:px-8 lg:pt-16 lg:pb-28">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <Heading
          as="h1"
          className="mb-8 text-center text-4xl text-[clamp(2.4rem,_4vw,_4rem)] font-bold tracking-tighter text-system-marketing-primary sm:text-7xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 from-10% via-pink-500 to-purple-500 to-90%">
            {title}
          </span>
          Projects
        </Heading>
        <p className="mx-auto max-w-2xl text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
