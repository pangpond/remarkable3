import React, { type ReactNode } from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostItem/Footer/ReadMoreLink";

const buttonOuterClass =
  "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-lg font-medium text-pretty text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg hover:shadow-purple-500/50 dark:shadow-lg dark:hover:shadow-purple-800/80";

const buttonInnerClass =
  "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:group-hover:text-white";

export default function BlogPostItemFooterReadMoreLink(
  props: Props,
): ReactNode {
  const { blogPostTitle, className, ...linkProps } = props;

  return (
    <Link
      aria-label={translate(
        {
          message: "Read more about {title}",
          id: "theme.blog.post.readMoreLabel",
          description:
            "The ARIA label for the link to full blog posts from excerpts",
        },
        { title: blogPostTitle },
      )}
      className={clsx(buttonOuterClass, className)}
      {...linkProps}
    >
      <span className={buttonInnerClass}>
        <Translate
          id="theme.blog.post.readMore"
          description="The label used in blog post item excerpts to link to full blog posts"
        >
          Read more
        </Translate>
      </span>
    </Link>
  );
}
