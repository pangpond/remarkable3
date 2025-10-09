import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

const buttonOuterClass =
  "relative inline-flex items-center justify-center p-0.5 mb-2 text-lg font-medium text-pretty text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg hover:shadow-purple-500/50 dark:shadow-lg dark:hover:shadow-purple-800/80";

const buttonInnerClass =
  "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:group-hover:text-white group-hover:border-white dark:group-hover:border-gray-900 group-hover:border-1";

export default function PaginatorNavLink(props: Props): ReactNode {
  const { permalink, title, subLabel, isNext } = props;

  return (
    <Link
      className={clsx(
        "pagination-nav__link",
        isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev",
        buttonOuterClass,
        isNext ? "ms-2" : "me-2",
        "group w-full hover:text-white"
      )}
      to={permalink}
    >
      <span
        className={clsx(
          buttonInnerClass,
          "flex w-full flex-col gap-1 text-left text-gray-900 dark:text-gray-100 group-hover:text-white",
          isNext ? "items-end text-right" : "items-start"
        )}
      >
        {subLabel && (
          <span
            className={clsx(
              "pagination-nav__sublabel",
              "text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-white"
            )}
          >
            {subLabel}
          </span>
        )}
        <span
          className={clsx(
            "pagination-nav__label",
            "text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-white"
          )}
        >
          {title}
        </span>
      </span>
    </Link>
  );
}
