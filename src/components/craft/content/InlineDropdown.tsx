"use client";

import Post from "../Post";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  TbArrowsTransferDown,
  TbBolt,
  TbCheck,
  TbCloudPlus,
  TbCopyPlus,
  TbPencil,
  TbSettings,
  TbTrash,
  TbX,
} from "react-icons/tb";

export default () => {
  const [favorite, setFavorite] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (animating)
      setTimeout(() => {
        setAnimating(false);
      }, 100);
  }, [animating]);

  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const [holding, setHolding] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const maxTime = 1000;

  const handleStart = () => {
    setHolding(true);
  };

  const handleEnd = () => {
    setHolding(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (holding) {
      timer = setInterval(() => {
        setElapsedTime((prev) => Math.min(prev + 100, maxTime));
      }, 100);
    } else if (!holding && elapsedTime > 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [holding, elapsedTime]);

  const widthPercentage = (elapsedTime / maxTime) * 100;

  return (
    <Post
      title="Inline Dropdown"
      description="Interactive project card dropdown."
      tags={["tailwindcss", "framer motion"]}
    >
      <div className="flex w-52 flex-col items-start gap-y-1 rounded-lg border border-neutral-300 bg-neutral-200/10 p-1 dark:border-neutral-700 dark:bg-neutral-800">
        <button
          className="relative flex w-full items-center justify-end overflow-hidden rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10"
          onClick={() => {
            setFavorite((favorite) => !favorite);
            setAnimating(true);
          }}
        >
          <AnimatePresence>
            {favorite ? (
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                key={0}
                className="absolute left-0 ml-2"
              >
                Remove Favorite
              </motion.span>
            ) : (
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                key={1}
                className="absolute left-0 ml-2"
              >
                Add Favorite
              </motion.span>
            )}
          </AnimatePresence>
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-0.5"
            animate={{ scale: animating ? 1 : 1.1 }}
          >
            <motion.path
              d="M4.12212 3.66898L0.932115 4.13148L0.875615 4.14298C0.790085 4.16569 0.712113 4.21069 0.649661 4.27339C0.58721 4.33608 0.542517 4.41423 0.520146 4.49985C0.497776 4.58547 0.498529 4.67549 0.522329 4.76072C0.546129 4.84595 0.592124 4.92334 0.655615 4.98498L2.96662 7.23448L2.42162 10.412L2.41512 10.467C2.40988 10.5554 2.42825 10.6437 2.46834 10.7227C2.50843 10.8018 2.56881 10.8687 2.64328 10.9167C2.71776 10.9648 2.80366 10.9921 2.89219 10.996C2.98072 10.9999 3.0687 10.9803 3.14712 10.939L6.00012 9.43898L8.84661 10.939L8.89662 10.962C8.97915 10.9945 9.06884 11.0045 9.15649 10.9909C9.24415 10.9773 9.32661 10.9406 9.39541 10.8846C9.46422 10.8286 9.51689 10.7554 9.54803 10.6723C9.57917 10.5892 9.58766 10.4994 9.57261 10.412L9.02711 7.23448L11.3391 4.98448L11.3781 4.94198C11.4338 4.87337 11.4704 4.79121 11.484 4.70388C11.4976 4.61655 11.4878 4.52717 11.4557 4.44485C11.4235 4.36253 11.3701 4.2902 11.3009 4.23524C11.2316 4.18028 11.1491 4.14465 11.0616 4.13198L7.87162 3.66898L6.44562 0.778985C6.40435 0.695252 6.34047 0.624742 6.26121 0.575437C6.18195 0.526132 6.09046 0.5 5.99712 0.5C5.90377 0.5 5.81228 0.526132 5.73302 0.575437C5.65376 0.624742 5.58988 0.695252 5.54862 0.778985L4.12212 3.66898Z"
              className={clsx(
                "stroke-neutral-950 transition-colors dark:stroke-neutral-50",
                favorite
                  ? "fill-neutral-950 dark:fill-neutral-50"
                  : "fill-transparent",
              )}
            />
          </motion.svg>
        </button>
        <div className="group relative flex h-7 w-full cursor-pointer items-center overflow-hidden rounded text-xs">
          <AnimatePresence>
            {editing ? (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ staggerChildren: 0.1 }}
                key={0}
                className="absolute left-0 flex w-full items-center justify-between"
              >
                <input
                  defaultValue="Craft"
                  className="ml-2 w-4/6 cursor-pointer bg-transparent outline-none"
                  ref={ref}
                />
                <div className="absolute right-0 mr-2 flex items-center gap-x-1">
                  <button
                    className="rounded bg-neutral-300 p-[3px] text-neutral-700 hover:bg-neutral-400/50 dark:bg-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-500"
                    onClick={() => setEditing(false)}
                  >
                    <TbCheck />
                  </button>
                  <button
                    className="rounded bg-neutral-300 p-[3px] text-neutral-700 hover:bg-neutral-400/50 dark:bg-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-500"
                    onClick={() => setEditing(false)}
                  >
                    <TbX />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.button
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                key={1}
                className="absolute right-0 flex w-full items-center"
                onClick={() => {
                  setEditing(true);
                  setTimeout(() => ref.current?.focus(), 100);
                }}
              >
                <span className="ml-2">Edit Name</span>
                <TbPencil className="absolute right-0 mr-2 text-base" />
              </motion.button>
            )}
          </AnimatePresence>
          <div
            className={clsx(
              "pointer-events-none absolute left-0 h-full w-full bg-neutral-950/10 transition-colors dark:bg-neutral-50/10",
              editing ? "block" : "hidden group-hover:block",
            )}
          />
        </div>
        <hr className="w-full border-neutral-300 dark:border-neutral-600" />
        <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10">
          New Deployment
          <TbCloudPlus className="text-base" />
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10">
          Duplicate
          <TbCopyPlus className="text-base" />
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10">
          Analytics
          <TbBolt className="text-base" />
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10">
          Transfer Project
          <TbArrowsTransferDown className="text-base" />
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1.5 text-xs hover:bg-neutral-950/10 active:bg-neutral-50/15 dark:hover:bg-neutral-50/10">
          Project Settings
          <TbSettings className="text-base" />
        </button>
        <hr className="w-full border-neutral-300 dark:border-neutral-600" />
        <button
          className="group relative flex h-7 w-full items-center justify-end overflow-hidden rounded px-2 text-xs text-red-400 hover:bg-red-500/5 dark:hover:bg-red-500/20"
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        >
          <AnimatePresence>
            {holding ? (
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                key={0}
                className="absolute left-0 ml-2 select-none"
              >
                Hold to Confirm
              </motion.span>
            ) : (
              <motion.span
                className="absolute left-0 ml-2 select-none"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                key={1}
              >
                Delete Project
              </motion.span>
            )}
          </AnimatePresence>
          <TbTrash className="text-base" />
          <div className="absolute left-0 hidden h-full w-full bg-red-500/10 transition-colors group-hover:block dark:bg-red-500/25">
            <motion.div
              className="h-full bg-red-500/25"
              initial={{ width: 0 }}
              animate={{ width: `${widthPercentage}%` }}
            />
          </div>
        </button>
      </div>
    </Post>
  );
};
