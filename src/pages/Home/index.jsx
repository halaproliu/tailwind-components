import ContainerItem from "./container-item";
import SectionItem from "./section-item";
import LayoutItem from "./layout-item";
import { APPLICATION_UI } from "@/constants/applicationUI";
import { MARKETING } from "@/constants/marketing";
import { ECOMMERCE } from "@/constants/ecommerce";
import { omit } from "@/utils/object";

function Home() {
  return (
    <>
      <div className="sticky top-0 z-40 overflow-x-auto whitespace-nowrap border-b border-slate-900/5 bg-transparent transition duration-100">
        <div className="max-w-container mx-auto flex justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900">
          <div className="flex space-x-8 pl-4 sm:pl-6 lg:pl-8">
            <a href="#product-application-ui">Application UI</a>
            <a href="#product-marketing">Marketing</a>
            <a href="#product-ecommerce">Ecommerce</a>
          </div>
          <div className="flex space-x-8 pr-4 sm:pr-6 lg:pr-8">
            <a href="#pricing">Pricing</a>
            <a href="#faqs">
              <abbr className="no-underline" title="Frequently asked questions">
                FAQs
              </abbr>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container relative mx-auto w-full space-y-20 px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        {APPLICATION_UI.map((c) => (
          <ContainerItem key={c.id} {...omit(c, ["children"])}>
            {(c.children || []).map((s) => (
              <SectionItem key={s.id} {...omit(s, ["children"])}>
                {(s.children || []).map((l, i) => (
                  <LayoutItem key={i} {...l} />
                ))}
              </SectionItem>
            ))}
          </ContainerItem>
        ))}
        {MARKETING.map((c) => (
          <ContainerItem key={c.id} {...omit(c, ["children"])}>
            {(c.children || []).map((s) => (
              <SectionItem key={s.id} {...omit(s, ["children"])}>
                {(s.children || []).map((l, i) => (
                  <LayoutItem key={i} {...l} />
                ))}
              </SectionItem>
            ))}
          </ContainerItem>
        ))}
        {ECOMMERCE.map((c) => (
          <ContainerItem key={c.id} {...omit(c, ["children"])}>
            {(c.children || []).map((s) => (
              <SectionItem key={s.id} {...omit(s, ["children"])}>
                {(s.children || []).map((l, i) => (
                  <LayoutItem key={i} {...l} />
                ))}
              </SectionItem>
            ))}
          </ContainerItem>
        ))}
      </div>
    </>
  );
}

export default Home;
