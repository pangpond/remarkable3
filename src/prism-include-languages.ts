import type { Prism } from "prism-react-renderer";

// Extend Prism's bash grammar so `npx` is highlighted like other shell commands.
type PrismWithInsertBefore = Prism & {
  languages: Prism["languages"] & {
    insertBefore?: (
      inside: string,
      before: string,
      insert: Record<string, unknown>
    ) => void;
  };
};

const EXTRA_COMMANDS_TOKEN = "extra-cli-commands";
// Append to this list to style more CLI commands like Prism's built-in command token.
const EXTRA_COMMANDS = ["npx", "bb", "brew", "cursor", "yarn"];

export default function includeCustomLanguages(prism: Prism): void {
  const enhancedPrism = prism as PrismWithInsertBefore;

  if (
    !enhancedPrism?.languages?.bash ||
    !enhancedPrism.languages.insertBefore
  ) {
    return;
  }

  const bashLanguage = enhancedPrism.languages.bash as Record<string, unknown>;
  if (EXTRA_COMMANDS_TOKEN in bashLanguage) {
    return;
  }

  enhancedPrism.languages.insertBefore("bash", "function", {
    [EXTRA_COMMANDS_TOKEN]: {
      pattern: new RegExp(
        `(^|[\\s;|&]|[<>]\\()(${EXTRA_COMMANDS.join("|")})(?=$|[)\\s;|&])`
      ),
      lookbehind: true,
      alias: "function",
    },
  });
}
