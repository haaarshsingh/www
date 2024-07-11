"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Post from "../Post";
import clsx from "clsx";
import { motion } from "framer-motion";

type Path = { w: number; offset: number }[];

export default () => {
  const [active, setActive] = useState(0);
  const [clipPaths, setClipPaths] = useState<Path>([]);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const tabs = useMemo(
    () => [
      {
        label: "Overview",
      },
      {
        label: "Integrations",
      },
      {
        label: "Activity",
      },
      {
        label: "Domains",
      },
      {
        label: "Usage",
        hide: true,
      },
    ],
    [],
  );

  useEffect(() => {
    const newClipPaths = tabs.map((_, i) => {
      const rect = tabRefs.current[i].getBoundingClientRect();
      return {
        w: rect.width,
        offset: rect.left - tabRefs.current[0].getBoundingClientRect().left,
      };
    });

    setClipPaths(newClipPaths);
  }, [tabs]);

  const getClipPath = (i: number) => {
    if (clipPaths.length === 0) return "";
    const { offset, w } = clipPaths[i];
    return `inset(4px calc(100% - (${offset + 3.5}px + ${w}px)) calc(100% - (0px + 32px)) ${offset + 3.5}px round 20px)`;
  };

  return (
    <Post
      title="Exclusion Tabs"
      description="Tabs that use clipping to blend between inactive and active."
      tags={["react", "tailwindcss", "framer motion"]}
      className="relative"
    >
      <div
        className={clsx("relative flex w-fit items-center rounded-full p-1")}
      >
        {tabs.map((item, i) => (
          <button
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el!;
            }}
            className={clsx(
              "z-10 rounded-full px-3 py-1 text-sm tracking-tight text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-600",
              item.hide && "hidden sm:block",
            )}
            onClick={() => setActive(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <motion.div
        style={{ clipPath: getClipPath(active) }}
        animate={{ clipPath: getClipPath(active) }}
        transition={{ type: "spring", stiffness: 300, damping: 29 }}
        className={clsx(
          "[will-change: clip-path] pointer-events-none absolute left-1/2 z-20 flex w-fit -translate-x-1/2 items-center bg-neutral-950 p-1 dark:bg-neutral-50",
        )}
        aria-hidden
      >
        {tabs.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "z-20 rounded-full px-3 py-1 text-sm tracking-tight text-neutral-50 transition-colors dark:text-neutral-950",
              item.hide && "hidden sm:block",
            )}
            aria-hidden
          >
            {item.label}
          </span>
        ))}
      </motion.div>
    </Post>
  );
};
