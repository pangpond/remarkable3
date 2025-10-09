import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Hero({ title }: { title: string }): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const buttonOuterClass =
    "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-pretty text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg hover:shadow-purple-500/50 dark:shadow-lg dark:hover:shadow-purple-800/80";
  const buttonInnerClass =
    "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:group-hover:text-white";
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <Heading
          as="h1"
          className="mb-8 text-center text-4xl text-[clamp(2.4rem,_4vw,_4rem)] font-bold tracking-tighter text-system-marketing-primary sm:text-7xl"
        >
          Hello
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 from-10% via-pink-500 to-purple-500 to-90%">
            {title}
          </span>
          {title === "Nextensions" ? "Project" : "Reader"}
        </Heading>
        <div className="text-center mx-auto max-w-2xl">
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className={buttonOuterClass}>
              <span className={buttonInnerClass}>Get started</span>
            </a>
            <a href="#" className={buttonOuterClass}>
              <span className={buttonInnerClass}>Read more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
