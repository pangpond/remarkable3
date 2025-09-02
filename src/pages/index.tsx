import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Hero from "@site/src/components/Hero";
import Heading from "@theme/Heading";

import { Button } from "@site/src/components/ui/button";

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
