"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Post from "../Post";
import clsx from "clsx";
import Image from "next/image";
import { TbX } from "react-icons/tb";

const getPosition = (i: number) => {
  switch (i) {
    case 0:
      return "left-1/2 top-0";
    case 1:
      return "top-[12%] left-[12%]";
    case 2:
      return "left-0 top-1/2";
    case 3:
      return "top-[12%] right-[12%]";
    case 4:
      return "bottom-0 left-1/2";
    case 5:
      return "bottom-[12%] left-[12%]";
    case 6:
      return "right-0 top-1/2";
    case 7:
      return "bottom-[12%] right-[12%]";
  }
};

const getTransformY = (i: number) => {
  switch (i) {
    case 2:
      return "-50%";
    case 6:
      return "-50%";
  }
};

const getTransformX = (i: number) => {
  switch (i) {
    case 0:
      return "-50%";
    case 4:
      return "-50%";
  }
};

const getRotation = (i: number) => {
  switch (i) {
    case 1:
      return 315;
    case 2:
      return 270;
    case 3:
      return 45;
    case 4:
      return 180;
    case 5:
      return 225;
    case 6:
      return 90;
    case 7:
      return 135;
    default:
      return 0;
  }
};

export default () => {
  const [angle, setAngle] = useState(100);
  const [active, setActive] = useState<number | null>(null);
  const dragging = useRef(false);
  const startAngle = useRef(angle);
  const startX = useRef(0);
  const startY = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (active !== null) return;
    dragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    startAngle.current = angle;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current || active !== null) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    const newAngle = startAngle.current + (dx + dy) / 1.5;
    setAngle(newAngle);
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <Post
      title="Radial Select"
      description="Animated radial carousel select component."
      tags={["tailwindcss", "framer-motion"]}
      className="relative"
    >
      <motion.div
        className={clsx(
          "relative my-8 flex h-[384px] w-[384px] items-center justify-center rounded-full",
          active === null && "cursor-move",
        )}
        animate={{
          transform:
            active === null
              ? `rotateZ(${angle}deg)`
              : `rotateZ(${Math.round(angle / 360) * 360}deg)`,
        }}
        transition={{ type: "spring", damping: 15 }}
        onMouseDown={onMouseDown}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.button
            key={i}
            className={clsx(
              "absolute h-20 w-20 overflow-hidden rounded-lg border-4 border-neutral-900 shadow-lg dark:border-neutral-50",
              active === i ? "left-1/2 top-1/2" : getPosition(i),
            )}
            draggable={false}
            onClick={() => setActive((active) => (active === i ? null : i))}
            animate={{
              rotateZ:
                active === null
                  ? getRotation(i)
                  : Math.round(getRotation(i) / 360) * 360,
              y: active === null ? getTransformY(i) : "-50%",
              x: active === null ? getTransformX(i) : "-50%",
              opacity: active === null ? 1 : active === i ? 1 : 0,
              scale: active === null ? 1 : active === i ? 2.5 : 0,
            }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              width={80}
              height={80}
              src={`/craft/radial/${i}.webp`}
              alt=""
            />
            <AnimatePresence>
              {active === i && (
                <div className="absolute right-0 top-0 z-10 m-1 rounded-full bg-neutral-900/25 p-0.5 text-[8px] text-neutral-50 shadow-lg backdrop-blur dark:bg-neutral-50/50 dark:text-neutral-600">
                  <TbX />
                </div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.div>
    </Post>
  );
};
