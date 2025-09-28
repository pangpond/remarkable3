import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import ProjectFeature from "../components/ProjectFeature";
import ProjectHero from "../components/ProjectHero";

export default function Home(): ReactNode {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();

  const { description } = customFields as { description: string };

  return (
    <Layout title={tagline} description={description}>
      <ProjectHero title="Nextensions" />
      <ProjectFeature />
    </Layout>
  );
}
