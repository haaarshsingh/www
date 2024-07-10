import "./craft.css";

import Header from "@/components/craft/Header";
import Main from "@/components/craft/Main";

export const metadata = {
  title: "Craft",
  description: "Experimental laboratory of user interactions.",
};

export default () => (
  <>
    <Header />
    <Main />
  </>
);
