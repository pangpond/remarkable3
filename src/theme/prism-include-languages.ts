import siteConfig from "@generated/docusaurus.config";
import type * as PrismNamespace from "prismjs";
import type { Optional } from "utility-types";
import type { Prism } from "prism-react-renderer";

import includeCustomLanguages from "../prism-include-languages";

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace
): void {
  const {
    themeConfig: { prism },
  } = siteConfig;

  const { additionalLanguages = [] } = prism as { additionalLanguages: string[] };

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === "php") {
      require("prismjs/components/prism-markup-templating.js");
    }
    require(`prismjs/components/prism-${lang}`);
  });

  includeCustomLanguages(PrismObject as unknown as Prism);

  delete (globalThis as Optional<typeof globalThis, "Prism">).Prism;
  if (typeof PrismBefore !== "undefined") {
    globalThis.Prism = PrismBefore;
  }
}
