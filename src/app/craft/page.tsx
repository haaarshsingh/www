import "./craft.css";

import Header from "@/components/craft/Header";
import Main from "@/components/craft/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craft",
  description: "Experimental laboratory of user interactions",
  openGraph: {
    title: "Craft",
    description: "Experimental laboratory of user interactions",
    images: [
      {
        url: "https://harshsingh.xyz/og?title=Craft&description=Experimental%20laboratory%20of%20user%20interactions",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Craft",
    description: "Experimental laboratory of user interactions",
    images: [
      {
        url: "https://harshsingh.xyz/og?title=Craft&description=Experimental%20laboratory%20of%20user%20interactions",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default () => (
  <>
    <Header />
    <Main />
  </>
);
