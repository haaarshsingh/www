"use client";

import { ChangeEvent, useState } from "react";
import Post from "../Post";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import clsx from "clsx";

export default () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("Mama Tried — Merle Haggard");
  const [isClicked, setIsClicked] = useState(false);

  const handleSpanClick = () => {
    setIsEditing(true);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <Post
      title="Arc Tabs"
      description="Arc Browser tabs with SVG animations."
      tags={["react", "tailwindcss", "framer motion"]}
    >
      <motion.div
        className="flex h-9 select-none items-center justify-between gap-x-2 rounded-[10px] bg-neutral-200 px-3 dark:bg-neutral-800"
        animate={{ scale: isClicked ? 0.98 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center">
          <AppleMusicIcon />
          <Volume />
          {isEditing ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoFocus
              className="w-44 bg-transparent text-sm tracking-tight outline-none"
            />
          ) : (
            <span
              className="h-5 w-44 truncate text-sm tracking-tight"
              onClick={handleSpanClick}
            >
              {inputValue}
            </span>
          )}
        </div>
        <button className="rounded p-1 text-neutral-500 transition-all hover:bg-neutral-50/10 active:scale-95">
          <FiX />
        </button>
      </motion.div>
    </Post>
  );
};

const Volume = () => {
  const [mute, setMute] = useState(false);

  return (
    <button
      className={clsx(
        "mx-1 rounded p-1 transition-all hover:bg-neutral-50/10",
        mute
          ? "text-neutral-400 dark:text-neutral-500"
          : "text-neutral-700 dark:text-neutral-300",
      )}
      onClick={() => setMute((mute) => !mute)}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4.89143 7.00951H2.69269C2.62605 7.00951 2.56213 7.03599 2.51501 7.08311C2.46788 7.13024 2.44141 7.19416 2.44141 7.2608V10.7789C2.44141 10.8455 2.46788 10.9094 2.51501 10.9565C2.56213 11.0037 2.62605 11.0301 2.69269 11.0301H4.88044C4.99628 11.0292 5.10885 11.0685 5.19894 11.1413L8.07207 13.4937C8.10947 13.5212 8.15376 13.5379 8.20003 13.5417C8.2463 13.5456 8.29273 13.5366 8.33418 13.5156C8.37563 13.4947 8.41047 13.4627 8.43484 13.4232C8.45921 13.3837 8.47216 13.3382 8.47224 13.2918V4.7479C8.47216 4.70147 8.45921 4.65598 8.43484 4.61646C8.41047 4.57694 8.37563 4.54494 8.33418 4.52402C8.29273 4.5031 8.2463 4.49408 8.20003 4.49794C8.15376 4.50181 8.10947 4.51842 8.07207 4.54593L5.19894 6.89832C5.113 6.9709 5.00392 7.01035 4.89143 7.00951Z"
          stroke="currentColor"
          strokeWidth="1.11683"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: mute ? 2.5 : 0 }}
        />
        <motion.path
          d="M12.0488 12.5381C12.6607 11.4726 13.054 10.5259 13.054 9.02001C13.054 7.51416 12.677 6.5781 12.0488 5.50195"
          stroke="currentColor"
          strokeWidth="1.11683"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
          transition={{ delay: 0.05 }}
        />
        <motion.path
          d="M13.5586 14.0457C14.5009 12.6008 15.0663 11.1738 15.0663 9.01994C15.0663 6.86607 14.5009 5.47047 13.5586 3.99414"
          stroke="currentColor"
          strokeWidth="1.11683"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
          transition={{ delay: 0.1 }}
        />
        <motion.path
          d="M10.5381 11.0304C10.844 10.4217 11.0407 9.74757 11.0407 9.02008C11.0407 8.28255 10.8522 7.6248 10.5381 7.00977"
          stroke="currentColor"
          strokeWidth="1.11683"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
        />
        <motion.path
          d="M14.6698 14.7159L3.61328 3.65918"
          stroke="currentColor"
          strokeWidth="1.11683"
          strokeMiterlimit="10"
          strokeLinecap="round"
          animate={{ pathLength: mute ? 1 : 0, opacity: mute ? 1 : 0 }}
        />
      </svg>
    </button>
  );
};

const AppleMusicIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 361 361"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M360 112.61C360 108.31 360 104.01 359.98 99.71C359.96 96.09 359.92 92.47 359.82 88.85C359.61 80.96 359.14 73.01 357.74 65.21C356.32 57.29 353.99 49.92 350.33 42.72C346.73 35.65 342.03 29.19 336.42 23.58C330.81 17.97 324.34 13.27 317.27 9.67C310.08 6.01 302.71 3.69 294.8 2.26C287 0.86 279.04 0.39 271.15 0.18C267.53 0.08 263.91 0.04 260.29 0.02C255.99 0 251.69 0 247.39 0H112.61C108.31 0 104.01 0 99.71 0.02C96.09 0.04 92.47 0.08 88.85 0.18C80.96 0.4 73 0.86 65.2 2.27C57.28 3.69 49.92 6.02 42.73 9.68C35.66 13.28 29.19 17.98 23.58 23.59C17.97 29.2 13.27 35.66 9.67 42.73C6.01 49.93 3.68 57.3 2.26 65.22C0.86 73.02 0.39 80.98 0.18 88.86C0.08 92.48 0.04 96.1 0.02 99.72C0 104.01 0 108.31 0 112.61V247.38C0 251.68 0 255.98 0.02 260.28C0.04 263.9 0.08 267.52 0.18 271.14C0.39 279.03 0.86 286.98 2.26 294.78C3.68 302.7 6.01 310.07 9.67 317.27C13.27 324.34 17.97 330.8 23.58 336.41C29.19 342.02 35.66 346.72 42.73 350.32C49.92 353.98 57.29 356.3 65.2 357.73C73 359.13 80.96 359.6 88.85 359.81C92.47 359.91 96.09 359.95 99.71 359.97C104.01 360 108.31 359.99 112.61 359.99H247.38C251.68 359.99 255.98 359.99 260.28 359.97C263.9 359.95 267.52 359.91 271.14 359.81C279.03 359.6 286.99 359.13 294.79 357.73C302.71 356.31 310.07 353.98 317.26 350.32C324.33 346.72 330.8 342.02 336.41 336.41C342.02 330.8 346.72 324.34 350.32 317.27C353.98 310.07 356.31 302.7 357.73 294.78C359.13 286.98 359.6 279.02 359.81 271.14C359.91 267.52 359.95 263.9 359.97 260.28C360 255.98 359.99 251.68 359.99 247.38V112.61H360Z"
      fill="url(#paint0_linear_1082_51)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M254.5 55C253.63 55.08 245.9 56.45 244.97 56.64L137.97 78.2301L137.93 78.24C135.14 78.83 132.95 79.82 131.26 81.24C129.22 82.95 128.09 85.3701 127.66 88.1901C127.57 88.7901 127.42 90.01 127.42 91.81C127.42 91.81 127.42 201.13 127.42 225.73C127.42 228.86 127.17 231.9 125.05 234.49C122.93 237.08 120.31 237.86 117.24 238.48C114.91 238.95 112.58 239.42 110.25 239.89C101.41 241.67 95.6598 242.88 90.4498 244.9C85.4698 246.83 81.7398 249.29 78.7698 252.41C72.8798 258.58 70.4898 266.95 71.3098 274.79C72.0098 281.48 75.0198 287.88 80.1898 292.61C83.6798 295.81 88.0398 298.24 93.1798 299.27C98.5098 300.34 104.19 299.97 112.49 298.29C116.91 297.4 121.05 296.01 124.99 293.68C128.89 291.38 132.23 288.31 134.84 284.57C137.46 280.82 139.15 276.65 140.08 272.22C141.04 267.65 141.27 263.52 141.27 258.96V142.81C141.27 136.59 143.03 134.95 148.05 133.73C148.05 133.73 236.99 115.79 241.14 114.98C246.93 113.87 249.66 115.52 249.66 121.59V200.88C249.66 204.02 249.63 207.2 247.49 209.8C245.37 212.39 242.75 213.17 239.68 213.79C237.35 214.26 235.02 214.73 232.69 215.2C223.85 216.98 218.1 218.19 212.89 220.21C207.91 222.14 204.18 224.6 201.21 227.72C195.32 233.89 192.72 242.26 193.54 250.1C194.24 256.79 197.46 263.19 202.63 267.92C206.12 271.12 210.48 273.48 215.62 274.52C220.95 275.59 226.63 275.21 234.93 273.54C239.35 272.65 243.49 271.32 247.43 268.99C251.33 266.69 254.67 263.62 257.28 259.88C259.9 256.13 261.59 251.96 262.52 247.53C263.48 242.96 263.52 238.83 263.52 234.27V64.46C263.54 58.3 260.29 54.5 254.5 55Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1082_51"
        x1="180"
        y1="358.605"
        x2="180"
        y2="7.75858"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA233B" />
        <stop offset="1" stopColor="#FB5C74" />
      </linearGradient>
    </defs>
  </svg>
);
