"use client";

import { AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { RiCheckFill, RiLinksFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default (({ title, date, slug }) => {
  const [copy, setCopy] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(slug);
    setCopy(true);
  };

  useEffect(() => {
    if (copy)
      setTimeout(() => {
        setCopy(false);
      }, 1000);
  }, [copy]);

  return (
    <header>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h1 className="animate-intro font-medium tracking-tight opacity-0">
            {title}
          </h1>
          <span className="animate-intro tracking-tight text-neutral-500 opacity-0 [animation-delay:100ms]">
            {date}
          </span>
        </div>
        <div className="relative flex justify-center">
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="absolute top-0 -mt-8 whitespace-nowrap rounded border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs"
              >
                {copy ? "Copied" : "Copy URL"}
              </motion.div>
            )}
          </AnimatePresence>
          <button
            className="cursor-copy rounded-full bg-neutral-200 p-2.5 text-sm transition-colors hover:bg-neutral-300/75 active:bg-neutral-300"
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            onClick={onClick}
          >
            {copy ? <RiCheckFill /> : <RiLinksFill />}
          </button>
        </div>
      </div>
      <hr className="my-6 border-neutral-200" />
    </header>
  );
}) as FC<{ title: string; date: string; slug: string }>;
