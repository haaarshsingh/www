import NextImage, { ImageProps } from "next/image";
import NextLink from "next/link";
import {
  FC,
  ReactChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { FiCheck, FiClipboard, FiDownload } from "react-icons/fi";

const Link: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  const link = href;
  const internal = link && (link.startsWith("/") || link.startsWith("#"));

  if (internal) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

const Header1: FC<{ children: ReactNode; id: string }> = ({ children, id }) => {
  return (
    <a
      href={`#${id}`}
      className="my-12 flex items-center group w-fit header no-outline"
    >
      <h1 className="opacity-0 group-hover:opacity-100 text-3xl">#</h1>
      <h1 id={id} className="text-4xl ml-2">
        {children}
      </h1>
    </a>
  );
};

const Header3: FC<{ children: ReactNode; id: string }> = ({ children, id }) => {
  return (
    <a
      href={`#${id}`}
      className="text-2xl mb-5 mt-4 flex items-center group w-fit header no-outline"
    >
      <h3 className="opacity-0 group-hover:opacity-100">#</h3>
      <h3 id={id} className="text-3xl ml-2">
        {children}
      </h3>
    </a>
  );
};

const Image: FC<{ alt: string; src: string; props: ImageProps }> = ({
  alt,
  src,
  props,
}) => {
  return <NextImage alt={alt} layout="fill" {...props} />;
};

const CodeBlock: FC<{
  className: string | undefined;
  children: ReactChildren;
}> = ({ className, children }): JSX.Element => {
  const textInput = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current?.textContent!);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative"
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute flex justify-center items-center right-3 top-3 w-7 h-7 p-1 rounded border bg-gray-200 dark:bg-[#282e33] ${
            copied
              ? "focus:outline-none focus:border-green-500 border-green-400 text-green-400"
              : "border-gray-400 text-gray-400"
          }`}
          onClick={onCopy}
        >
          {copied ? <FiCheck /> : <FiClipboard />}
        </button>
      )}

      <pre>{children}</pre>
    </div>
  );
};

const Copy: FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 10000);
  }, [copied, setCopied]);

  return (
    <button
      className={`flex items-center text-gray-900 dark:text-white py-3 px-4 text-xl rounded-lg transition-colors ${
        copied
          ? "bg-green-500 hover:bg-green-600 text-gray-100"
          : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      }`}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
      }}
    >
      {copied ? <FiCheck className="mr-2" /> : <FiClipboard className="mr-2" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const Download: FC = () => {
  return (
    <a
      className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center text-white py-3 px-4 text-xl rounded-lg transition-colors my-5 no-outline w-fit header"
      href="/pfp.jpg"
      download="pfp.jpg"
    >
      <FiDownload className="mr-2" /> Download Headshot
    </a>
  );
};

const Table: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <div className="w-fit border-gray-700 border rounded-xl overflow-x-scroll">
      {children}
    </div>
  );
};

const Components = {
  a: Link,
  h1: Header1,
  h3: Header3,
  Image: Image,
  pre: CodeBlock,
  table: Table,
  Copy,
  Download,
};

export default Components;
