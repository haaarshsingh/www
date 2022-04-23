import { Blog } from "@layer/generated";
import { FC, useEffect, useRef } from "react";
import { FiClock, FiEdit2 } from "react-icons/fi";
import { format } from "date-fns";
import useWindowDimensions from "@hooks/useWindowDimensions";

const Post: FC<{ blog: Blog }> = ({ blog }) => {
  const { height, width } = useWindowDimensions();
  const Bar = useRef<HTMLDivElement>(null);

  const listener = () => {
    let dh = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ),
      wh = height,
      pos =
        pageYOffset ||
        (document.documentElement.clientHeight
          ? document.documentElement.scrollTop
          : document.body.scrollTop),
      bw = (pos / (dh - wh!)) * 100;

    Bar.current!.style.width = `${bw}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [height, width]);

  return (
    <div className="mt-16">
      <div
        className="fixed top-0 left-0 w-0 h-1 overflow-hidden z-10"
        ref={Bar}
      >
        <div className="w-full h-full absolute bg-gradient-100" />
      </div>
      <h1 className="text-4xl xl:text-6xl">{blog.title}</h1>
      <div className="flex justify-between mt-6">
        <p className="text-base sm:text-xl">
          {format(Date.parse(blog.published), "dd MMMM, yyyy")}
        </p>
        <div className="flex">
          <div className="text-lg sm:text-xl flex justify-center items-center text-gray-400">
            <FiClock className="mr-2" />
            {Math.trunc(blog.readingTime.minutes)}
            {Math.trunc(blog.readingTime.minutes) === 1
              ? " minute"
              : " minutes"}
          </div>
          <div className="text-lg sm:text-xl flex items-center justify-center ml-5 text-gray-400">
            <FiEdit2 className="mr-2 text-lg sm:text-xl" />
            {blog.wordCount} words
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
