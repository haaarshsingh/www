import {
  AnchorHTMLAttributes,
  createElement,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

const CustomLink = ((props) => {
  if (props.href?.startsWith("/"))
    return (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    );

  if (props.href?.startsWith("#")) return <a {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}) as FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;

const Img = ((props) => {
  return <Image className="rounded-lg" {...props} />;
}) as FC<ImageProps>;

const Code = (({ children, ...props }) => {
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}) as FC<{ children: ReactNode }>;

const slugify = (s: string) =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

const createHeading = (level: number) => {
  const Heading = ({ children }: { children: ReactNode }) => {
    const slug = slugify(children as string);

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
};

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  Image: Img,
  a: CustomLink,
  code: Code,
};

export default ((props) => (
  <MDXRemote
    {...props}
    components={{ ...components, ...((props.components || {}) as any) }}
  />
)) as FC<MDXRemoteProps>;
