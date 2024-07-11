import { Metadata } from "next";
import { FiX } from "react-icons/fi";

export const metadata: Metadata = {
  title: "404",
  description: "Whatever you're looking for, it ain't here.",
};

export default () => (
  <header>
    <div className="h-8 w-8 overflow-hidden rounded-full">
      <div className="flex h-full w-full items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800">
        <FiX className="h-4 w-4" />
      </div>
    </div>
    <div className="mt-6">
      <h1 className="font-medium tracking-tight">404</h1>
      <h2 className="tracking-tight">Page doesn&apos;t exist</h2>
    </div>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
    <main>
      <p className="text-sm tracking-tight">
        If you expected to see something here, open an{" "}
        <a
          href="https://github.com/harshhhdev/www/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          issue
        </a>
        .
      </p>
    </main>
  </header>
);
