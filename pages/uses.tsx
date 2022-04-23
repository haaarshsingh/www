import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allInfos } from "@layer/generated";
import components from "@components/MDX";
import Wrapper from "@components/Wrapper";
import { useTranslation } from "next-i18next";
import Header from "@components/Header";

const Uses: NextPage<{ uses: { body: { code: string } } }> = ({ uses }) => {
  const Component = useMDXComponent(uses.body.code);
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Header head={t("usesHeader")} bio={t("usesBio")} />
      <div className="blog">
        <Component components={components} />
      </div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const uses = allInfos.find((page: { slug: string }) => page.slug === "uses")!;

  return {
    props: { uses, ...(await serverSideTranslations(locale!, ["common"])) },
  };
};

export default Uses;
