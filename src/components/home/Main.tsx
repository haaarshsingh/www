"use client";

import useTabs, { Tab } from "@/hooks/useTabs";
import Image from "next/image";
import Link from "next/link";
import {
  CSSProperties,
  FC,
  FocusEvent,
  PointerEvent,
  useRef,
  useState,
} from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { clsx } from "clsx";
import useTheme from "@/hooks/useTheme";

export default () => {
  const theme = useTheme();

  const [tabs] = useState({
    tabs: [
      {
        title: "kmenu",
        description: "2022 · Accessible command menu component.",
        href: "https://kmenu.hxrsh.in",
      },
      {
        title: "Craft",
        description: "2024 · Interaction design labaratory.",
        href: "/craft",
      },
      {
        title: "React Pointers",
        description: "2021 · Lightweight custom cursors for React.",
        href: "https://kmenu.hxrsh.in",
      },
      {
        title: "snip",
        description: "2020 · Modern Pastebin written in Rust.",
        href: "https://snip.place",
      },
      {
        title: "dots",
        description: "2020 · Pastel-themed i3wm and Arch Linux rice.",
        href: "https://snip.place",
      },
    ],
  });

  const css = useTabs(tabs);

  return (
    <main>
      <section className="mt-8">
        <h2
          className="mb-2 animate-intro font-medium tracking-tight opacity-0 [animation-delay:200ms]"
          id="projects"
        >
          Projects
        </h2>
        <Projects {...css.tabProps} />
      </section>
      <section className="mt-12">
        <h2
          className="mb-4 animate-intro font-medium tracking-tight opacity-0 [animation-delay:550ms]"
          id="where"
        >
          Where
        </h2>
        <div className="animate-intro opacity-0 [animation-delay:600ms]">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={theme === "dark" ? "/map-dark.webp" : "/map.webp"}
              width={560}
              height={325}
              alt="Map with a marker over the state of Texas"
              className="grayscale"
              draggable={false}
              quality={100}
              priority
            />
            <div aria-hidden>
              <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-marker rounded-full bg-blue-500" />
              <div className="absolute left-1/2 top-1/2 z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-neutral-50 bg-blue-500 shadow-2xl" />
            </div>
          </div>
          <div className="flex justify-end">
            <a
              className="mt-1 flex items-center text-sm text-neutral-500"
              href="https://en.wikipedia.org/wiki/Texas"
              target="_blank"
              rel="noreferrer"
            >
              <HiLocationMarker />
              <span className="exclude ml-1">Texas</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export type Props = { tabs: Tab[] };

export const Projects: FC<Props> = ({ tabs }) => {
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect();

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);

  const onLeaveTabs = () => {
    setTimeout(() => {
      setIsInitialHoveredElement(true);
      setHoveredTabIndex(null);
    }, 500);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
    i: number,
  ) => {
    if (!e.target || !(e.target instanceof HTMLAnchorElement)) return;

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) setIsInitialHoveredElement(false);

      return i;
    });
    setHoveredRect(e.target.getBoundingClientRect());
  };

  const hoverStyles: CSSProperties = { opacity: 0 };
  if (rect && hoveredRect) {
    hoverStyles.transform = `translate3d(0px,${
      hoveredRect.top - rect.top
    }px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 250ms 0ms, opacity 200ms 0ms, width 250ms`;
  }

  return (
    <div className="-ml-4">
      <div
        className="relative flex w-fit flex-col"
        ref={ref}
        onPointerLeave={onLeaveTabs}
      >
        {tabs.map((item, index) => (
          <Link
            href={item.href}
            target={item.href.startsWith("/") ? "_self" : "_blank"}
            rel="noreferrer"
            key={index}
            className={clsx(
              "exclude animate-children w-fit animate-intro p-3.5 opacity-0",
            )}
            onPointerEnter={(e) => onEnterTab(e, index)}
            onFocus={(e) => onEnterTab(e, index)}
          >
            <h3
              className={clsx(
                "pointer-events-none flex items-center tracking-tight underline decoration-neutral-300",
                hoveredTabIndex === index && "no-underline",
              )}
            >
              {item.title}
              {!item.href.startsWith("/") && (
                <HiOutlineArrowUpRight className="ml-1 text-sm text-neutral-500" />
              )}
            </h3>
            <p className="pointer-events-none text-sm tracking-tight text-neutral-500">
              {item.description}
            </p>
          </Link>
        ))}
        <div
          className="absolute left-0 top-0 -z-10 rounded-lg bg-neutral-950/5 p-3.5 dark:bg-neutral-50/5"
          style={hoverStyles}
        />
      </div>
    </div>
  );
};
