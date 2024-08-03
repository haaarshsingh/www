"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsRewindFill, BsPlayFill, BsFastForwardFill } from "react-icons/bs";
import { SiAirplayaudio } from "react-icons/si";
import Post from "../Post";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";
import clsx from "clsx";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(0);

  const buttons = [
    {
      label: "Idle",
      onClick: () => setState(0),
      dimensions: { w: 100, h: 28, r: 28 },
    },
    {
      label: "Face ID",
      onClick: () => setState(1),
      dimensions: { w: 96, h: 96, r: 28 },
    },
    {
      label: "Call",
      onClick: () => setState(2),
      dimensions: { w: 284, h: 56, r: 99 },
    },
    {
      label: "Music",
      onClick: () => setState(3),
      dimensions: { w: 324, h: 144, r: 32 },
    },
  ];

  return (
    <Post
      title="Dynamic Island"
      description="Recreation of Apple's dynamic island for the web."
      tags={["tailwindcss", "framer motion"]}
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ width: 100, height: 28, borderRadius: 28 }}
        animate={{
          width: buttons[state].dimensions.w,
          height: buttons[state].dimensions.h,
          borderRadius: buttons[state].dimensions.r,
        }}
        transition={{
          type: "spring",
          bounce: 0.3,
          ease: "linear",
        }}
        className="absolute top-0 mb-36 mt-6 flex select-none items-center justify-center overflow-hidden bg-black"
        ref={ref}
      >
        <AnimatePresence>
          {state === 1 && <FaceId />}
          {state === 2 && <Call />}
          {state === 3 && <Music />}
        </AnimatePresence>
      </motion.div>
      <div className="absolute bottom-0 flex w-full items-center justify-center gap-x-2 border-t border-t-neutral-200 bg-neutral-100 py-3 dark:border-t-neutral-700/50 dark:bg-neutral-800">
        {buttons.map((button, index) => (
          <button
            className="rounded border border-neutral-400/50 bg-neutral-50 px-3 py-1 text-sm dark:border-neutral-600 dark:bg-neutral-700"
            onClick={button.onClick}
            key={index}
          >
            {button.label}
          </button>
        ))}
      </div>
    </Post>
  );
};

const FaceId = () => (
  <motion.svg
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: 5 }}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2222 2H7.11111C4.28832 2 2 4.28832 2 7.11111V12.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.7778 2H42.8889C45.7117 2 48 4.28832 48 7.11111V12.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.2222 14.7778V19.8889"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.7778 14.7778V19.8889"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.3333 35.2222C17.3333 35.2222 19.8889 37.7777 25 37.7777C30.1111 37.7777 32.6666 35.2222 32.6666 35.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.9999 14.7778V27.5556H22.4444"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2222 48H7.11111C4.28832 48 2 45.7118 2 42.8889V37.7778"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.7778 48H42.8889C45.7117 48 48 45.7118 48 42.8889V37.7778"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </motion.svg>
);

const Call = () => (
  <motion.div
    className="mx-3 flex w-full items-center justify-between"
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: 5 }}
  >
    <div className="flex items-center">
      <Image
        src="/craft/example.webp"
        width={36}
        height={36}
        alt="That Mexican OT"
      />
      <div className="ml-2 flex w-20 flex-col">
        <span className="text-xs text-neutral-500">mobile</span>
        <span className="whitespace-nowrap text-xs text-neutral-100">
          That Mexican OT
        </span>
      </div>
    </div>
    <div className="flex items-center gap-x-2">
      <button className="rotate-[135deg] rounded-full bg-[#F35143] p-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.031 44C36.015 44 35.999 44 35.984 44C28.467 43.755 19.663 36.47 13.596 30.4C7.52397 24.329 0.238974 15.521 0.00197393 8.03804C-0.0820261 5.41304 6.36097 0.746036 6.42597 0.701036C8.09697 -0.464964 9.95297 -0.0519642 10.715 1.00304C11.23 1.71704 16.112 9.11904 16.643 9.95804C17.195 10.827 17.114 12.124 16.425 13.427C16.048 14.147 14.789 16.36 14.2 17.392C14.834 18.298 16.52 20.519 19.998 23.996C23.475 27.473 25.695 29.16 26.604 29.797C27.636 29.208 29.848 27.949 30.57 27.569C31.85 26.89 33.141 26.806 34.021 27.344C34.917 27.893 42.296 32.799 42.976 33.275C43.548 33.675 43.916 34.364 43.987 35.165C44.058 35.974 43.81 36.829 43.288 37.574C43.245 37.638 38.633 44 36.031 44Z"
            fill="white"
          />
        </svg>
      </button>
      <button className="rounded-full bg-[#57D76B] p-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.031 44C36.015 44 35.999 44 35.984 44C28.467 43.755 19.663 36.47 13.596 30.4C7.52397 24.329 0.238974 15.521 0.00197393 8.03804C-0.0820261 5.41304 6.36097 0.746036 6.42597 0.701036C8.09697 -0.464964 9.95297 -0.0519642 10.715 1.00304C11.23 1.71704 16.112 9.11904 16.643 9.95804C17.195 10.827 17.114 12.124 16.425 13.427C16.048 14.147 14.789 16.36 14.2 17.392C14.834 18.298 16.52 20.519 19.998 23.996C23.475 27.473 25.695 29.16 26.604 29.797C27.636 29.208 29.848 27.949 30.57 27.569C31.85 26.89 33.141 26.806 34.021 27.344C34.917 27.893 42.296 32.799 42.976 33.275C43.548 33.675 43.916 34.364 43.987 35.165C44.058 35.974 43.81 36.829 43.288 37.574C43.245 37.638 38.633 44 36.031 44Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </motion.div>
);

const Music = () => {
  const totalTime = 2 * 60 + 21;
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (active && timeElapsed < totalTime) {
      timerId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [active, timeElapsed]);

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  const progressPercentage = (timeElapsed / totalTime) * 100;

  return (
    <motion.div
      className="mx-4 flex w-full flex-col"
      initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(4px)", y: 5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/craft/album.webp"
            width={48}
            height={48}
            alt="Lonestar Luchador album art"
            className="rounded-md"
          />
          <div className="ml-2 flex flex-col">
            <span className="flex items-center text-xs font-medium text-neutral-100">
              Lonestar Lucahdor
              <svg
                width="10"
                height="10"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <rect width="36" height="36" rx="6" fill="white" />
                <path
                  d="M12 27V9H23.9653V12.1377H15.7543V16.4268H23.3497V19.5645H15.7543V23.8623H24V27H12Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="mt-0.5 text-xs text-neutral-500">
              That Mexican OT
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-0.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              className={clsx(`line line${i}`, !active && "pause")}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 mt-2 flex items-center justify-center gap-x-2">
        <span className="w-5 text-[10px] text-neutral-400">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
        <div className="h-1 w-[232px] overflow-hidden rounded-full bg-neutral-700">
          <div
            className="h-1 rounded-full bg-neutral-50"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="w-5 text-[10px] text-neutral-400">-2:21</span>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <button className="text-xl text-neutral-500">
          <PiStarFill />
        </button>
        <div className="flex items-center gap-x-3">
          <button className="text-xl text-neutral-100">
            <BsRewindFill />
          </button>
          <button
            className="text-4xl text-neutral-100"
            onClick={() => setActive((a) => !a)}
          >
            <AnimatePresence>
              {active ? (
                <motion.svg
                  width="16"
                  height="18.74"
                  viewBox="0 0 68 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <rect width="28" height="91" rx="5" fill="white" />
                  <rect x="40" width="28" height="91" rx="5" fill="white" />
                </motion.svg>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <svg
                    width="16"
                    height="18.87"
                    viewBox="0 0 73 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-0.5"
                  >
                    <path
                      d="M69.2366 36.8318L9.04791 1.33595C5.04817 -1.02288 -9.8854e-08 1.86065 -5.048e-07 6.50414L-6.71109e-06 77.4959C-7.11704e-06 82.1393 5.04816 85.0229 9.0479 82.6641L69.2365 47.1682C73.1727 44.8469 73.1727 39.1531 69.2366 36.8318Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button className="text-xl text-neutral-100">
            <BsFastForwardFill />
          </button>
        </div>
        <button className="text-lg text-neutral-500">
          <SiAirplayaudio />
        </button>
      </div>
    </motion.div>
  );
};
