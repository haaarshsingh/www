import clsx from "clsx";
import { FC, ReactNode } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Copy } from "../writing/post/Header";

type Props = {
  title: string;
  description: string;
  tags: string[];
  className?: string;
  children: ReactNode;
};

export const slugify = (s: string) =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

export default (({ title, description, tags, children, className }) => (
  <article id={slugify(title)}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium tracking-tight">{title}</h3>
        <p className="mt-1 text-sm tracking-tight text-neutral-500">
          {description}
        </p>
      </div>
      <Copy slug={`craft#${slugify(title)}`} />
    </div>
    <div
      className={clsx(
        "my-4 flex min-h-96 w-full items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100/25 dark:border-neutral-700/50 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="cursor-default rounded bg-neutral-200 px-2 py-1 text-xs tracking-tight text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500"
          >
            {tag}
          </div>
        ))}
      </div>
      <a
        className="flex items-center text-sm tracking-tight"
        href={`https://github.com/harshhhdev/www`}
      >
        View Source
        <HiOutlineArrowUpRight className="ml-1 mt-[1px] text-xs text-neutral-500" />
      </a>
    </div>
  </article>
)) as FC<Props>;
