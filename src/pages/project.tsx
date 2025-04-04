import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";

export default function Home(): ReactNode {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();

  const { description } = customFields as { description: string };

  return (
    <Layout title={tagline} description={description}>
      <Hero title="Nextensions" />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
