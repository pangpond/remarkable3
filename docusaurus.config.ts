import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./src/plugins/tailwind-config";

// import tailwindPlugin from "@/plugins/tailwind-config";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "reMarkable 3",
  tagline:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://pangpond.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/remarkable3/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pangpond", // Usually your GitHub org/user name.
  projectName: "remarkable3", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  customFields: {
    bio: "The road is long, but we will reach the destination",
    description:
      "A personal blog created by Pangpond, mainly sharing programming development knowledge and projects. This website is built with Docusaurus, a React-powered static website generator.",
  },

  // onBrokenLinks: "throw",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        as: "font",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: ["./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Nextensions",
      logo: {
        alt: "Nextensions 3 Logo",
        src: "img/n.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/code", label: "Code", position: "left" },
        { to: "/child", label: "Child", position: "left" },
        { to: "/self", label: "Improvement", position: "left" },
        { to: "/blog", label: "Nerd", position: "left" },
        { to: "/project", label: "Project", position: "left" },
        {
          href: "https://github.com/pangpond/remarkable3",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    docs: { sidebar: { autoCollapseCategories: true, hideable: true } },
    footer: {
      style: "dark",
      links: [
        {
          title: "Blog",
          items: [
            {
              label: "Code",
              to: "/code",
            },
            {
              label: "Child",
              to: "/child",
            },
            {
              label: "Improvement",
              to: "/self",
            },
            {
              label: "Nerd",
              to: "/blog",
            },
            {
              label: "Project",
              to: "/project",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Project",
              to: "/project",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nextensions, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        "bash",
        "json",
        "java",
        "python",
        "tsx",
        "php",
        "graphql",
        "rust",
        "sql",
        "yaml",
      ],
      defaultLanguage: "javascript",
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
    languageTabs: [
      { highlight: "python", language: "python", logoClass: "python" },
      { highlight: "bash", language: "curl", logoClass: "curl" },
      { highlight: "csharp", language: "csharp", logoClass: "csharp" },
      { highlight: "go", language: "go", logoClass: "go" },
      { highlight: "javascript", language: "nodejs", logoClass: "nodejs" },
      { highlight: "ruby", language: "ruby", logoClass: "ruby" },
      { highlight: "php", language: "php", logoClass: "php" },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
      { highlight: "dart", language: "dart", logoClass: "dart" },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      { highlight: "c", language: "c", logoClass: "c" },
      {
        highlight: "objective-c",
        language: "objective-c",
        logoClass: "objective-c",
      },
      { highlight: "ocaml", language: "ocaml", logoClass: "ocaml" },
      { highlight: "r", language: "r", logoClass: "r" },
      { highlight: "swift", language: "swift", logoClass: "swift" },
      { highlight: "kotlin", language: "kotlin", logoClass: "kotlin" },
      { highlight: "rust", language: "rust", logoClass: "rust" },
    ],
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        docsRouteBasePath: "/docs",
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchContextByPaths: ["blog", "self", "child"],
      },
    ],
    "@docusaurus/theme-mermaid",
  ],
  plugins: [
    [tailwindPlugin, {}],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "self",
        routeBasePath: "self",
        path: "./self",
        postsPerPage: 2,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Nextensions.`,
        },
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "child",
        routeBasePath: "child",
        path: "./child",
        postsPerPage: 2,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Nextensions.`,
        },
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "code",
        routeBasePath: "code",
        path: "./code",
      },
    ],
  ],
};

export default config;
