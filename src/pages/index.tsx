import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Hero from "@site/src/components/Hero";
import Heading from "@theme/Heading";

import { Button } from "@site/src/components/ui/button";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className="px-2 py-20 text-center text-slate-800"
      style={{
        backgroundImage: `url('/img/banner.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className="mb-8 text-center text-4xl text-[clamp(2.4rem,_4vw,_4rem)] font-bold tracking-tighter text-system-marketing-primary sm:text-7xl"
        >
          Hello
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 from-10% via-pink-500 to-purple-500 to-90%">
            {siteConfig.title}
          </span>
          Reader
        </Heading>

        <p className="mb-4 text-lg md:text-xl lg:text-2xl">
          <span className="mb-1 block">{siteConfig.tagline}</span>
          <Link
            href="https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template"
            className="text-blue-700 dark:text-green-700"
          >
            Please read README.md for more about project information
          </Link>
        </p>

        <Button asChild>
          <Link to="/docs/intro" className="hover:text-primary-foreground">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {
    siteConfig: { customFields, tagline, title },
  } = useDocusaurusContext();

  const { description } = customFields as { description: string };

  return (
    <Layout title={tagline} description={description}>
      <Hero title={title} />
      <main></main>
    </Layout>
  );
}
