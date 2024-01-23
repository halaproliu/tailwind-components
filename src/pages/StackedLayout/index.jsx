import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";
import htmlData from "./snippets/light/index.html?raw";
import reactData from "./snippets/light/index.jsx?raw";
import vueData from "./snippets/light/index.vue?raw";
import placeholderData from "./snippets/light/placeholder.html?raw";

import htmlBackgroundData from "./snippets/lightGrayBackground/index.html?raw";
import reactBackgroundData from "./snippets/lightGrayBackground/index.jsx?raw";
import vueBackgroundData from "./snippets/lightGrayBackground/index.vue?raw";

import htmlDarkNavData from "./snippets/darknav/index.html?raw";
import reactDarkNavData from "./snippets/darknav/index.jsx?raw";
import vueDarkNavData from "./snippets/darknav/index.vue?raw";

import htmlBrandednavData from "./snippets/brandednav/index.html?raw";
import reactBrandednavData from "./snippets/brandednav/index.jsx?raw";
import vueBrandednavData from "./snippets/brandednav/index.vue?raw";

import htmlDarknavwithoverlapData from "./snippets/darknavwithoverlap/index.html?raw";
import reactDarknavwithoverlapData from "./snippets/darknavwithoverlap/index.jsx?raw";
import vueDarknavwithoverlapData from "./snippets/darknavwithoverlap/index.vue?raw";

function StackedLayout() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Application Shells"
      title="Stacked Layouts"
      iframeHeight={630}
    >
      <Preview
        title="Light nav with bottom border"
        data={{
          html: htmlData,
          react: reactData,
          vue: vueData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Light nav on gray background"
        data={{
          html: htmlBackgroundData,
          react: reactBackgroundData,
          vue: vueBackgroundData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Dark nav with white page header"
        data={{
          html: htmlDarkNavData,
          react: reactDarkNavData,
          vue: vueDarkNavData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Branded nav with compact white page header"
        data={{
          html: htmlBrandednavData,
          react: reactBrandednavData,
          vue: vueBrandednavData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Dark nav with overlap"
        data={{
          html: htmlDarknavwithoverlapData,
          react: reactDarknavwithoverlapData,
          vue: vueDarknavwithoverlapData,
        }}
        placeholder={placeholderData}
      />
    </PreviewLayout>
  );
}

export default StackedLayout;
