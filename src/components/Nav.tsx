"use client";

import Link from "next/link";
import {
  CSSProperties,
  FC,
  FocusEvent,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import useTabs, { Tab } from "@/hooks/useTabs";
import { usePathname } from "next/navigation";

const active = (path: string) => {
  if (path.includes("craft")) return 1;
  else if (path.includes("writing")) return 2;
  else return 0;
};

export default () => {
  const pathname = usePathname();

  const [selected, setSelected] = useState<number>(active(pathname));
  const [tabs] = useState({
    tabs: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Craft",
        href: "/craft",
      },
      {
        title: "Writing",
        href: "/writing",
      },
    ],
  });

  const css = useTabs(tabs);

  useEffect(() => {
    setSelected(active(pathname));
  }, [pathname]);

  return (
    <div className="fixed bottom-0 left-1/2 z-50 mb-8 flex -translate-x-1/2 items-center rounded-full border-2 border-neutral-600 bg-black/75 px-3.5 pb-2.5 pt-2 text-neutral-50 shadow-menu backdrop-blur-sm dark:bg-neutral-800/75">
      <Links {...css.tabProps} selectedTabIndex={selected} />
      <div className="mx-3 h-0.5 w-0.5 rounded-full bg-neutral-400" />
      <a
        href="mailto:hi.harsh@pm.me?subject=Project%20Inquiry"
        rel="noreferrer"
        target="_blank"
        className="exclude rounded-full bg-neutral-50/25 px-3.5 py-1.5 text-sm shadow-button transition-colors hover:bg-neutral-50/30 active:bg-neutral-50/40"
      >
        Contact
      </a>
    </div>
  );
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
};

export const Links: FC<Props> = ({ tabs, selectedTabIndex }) => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLAnchorElement | null>>(
    [],
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const ref = useRef<HTMLElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const isInitialRender = useRef(true);

  const onLeaveTabs = () => {
    setHoveredTabIndex(null);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
    i: number,
  ) => {
    if (!e.target || !(e.target instanceof HTMLAnchorElement)) return;

    setHoveredTabIndex(i);
    setHoveredRect(e.target.getBoundingClientRect());
  };

  const hoverStyles: CSSProperties = {
    opacity: 0,
    transform: "translateY(20px)",
  };

  if (rect && hoveredRect) {
    hoverStyles.transform =
      hoveredTabIndex === null
        ? `translate3d(${hoveredRect.left - rect.left}px,20px,0px)`
        : `translate3d(${hoveredRect.left - rect.left}px,0px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition =
      "transform 250ms 0ms, opacity 250ms 0ms, width 250ms";
  }

  const selectStyles: CSSProperties = { opacity: 0 };
  if (rect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8;
    selectStyles.transform = `translateX(calc(${
      selectedRect.left - rect.left
    }px + 10%))`;
    selectStyles.opacity = 1;
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`;

    isInitialRender.current = false;
  }

  return (
    <nav
      className="relative z-50 flex items-center"
      ref={ref}
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={clsx(
            "exclude px-3.5 py-1 text-sm transition-colors",
            hoveredTabIndex === index || selectedTabIndex === index
              ? "text-neutral-50"
              : "text-neutral-500",
          )}
          onPointerEnter={(e) => onEnterTab(e, index)}
          onFocus={(e) => onEnterTab(e, index)}
          ref={(el) => (buttonRefs[index] = el) as any}
        >
          {item.title}
        </Link>
      ))}
      <div
        className="pointer-events-none absolute left-0 top-0 rounded-full bg-neutral-50/25"
        style={hoverStyles}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -mb-1.5 flex justify-center rounded-full"
        style={selectStyles}
      >
        <div className="h-0.5 w-0.5 rounded-full bg-neutral-50" />
      </div>
    </nav>
  );
};
