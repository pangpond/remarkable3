import type { Plugin } from "@docusaurus/types";
import type { PluginOptions } from "@docusaurus/types";
import type { AcceptedPlugin } from "postcss";

export default function tailwindPlugin(
  context: any,
  options: PluginOptions
): Plugin<void> {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions: { plugins: AcceptedPlugin[] }) {
      postcssOptions.plugins = [require("@tailwindcss/postcss")];
      return postcssOptions;
    },
  };
}
