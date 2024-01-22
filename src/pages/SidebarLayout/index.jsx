import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

import placeholderData from "./snippets/placeholder.html?raw";

import htmlbrandSidebarWithHeaderData from "./snippets/brandSidebarWithHeader/index.html?raw";
import reactbrandSidebarWithHeaderData from "./snippets/brandSidebarWithHeader/index.jsx?raw";
import vuebrandSidebarWithHeaderData from "./snippets/brandSidebarWithHeader/index.vue?raw";

import htmldarkSidebarWithHeaderData from "./snippets/darkSidebarWithHeader/index.html?raw";
import reactdarkSidebarWithHeaderData from "./snippets/darkSidebarWithHeader/index.jsx?raw";
import vuedarkSidebarWithHeaderData from "./snippets/darkSidebarWithHeader/index.vue?raw";

import htmllightSidebarWithHeaderData from "./snippets/lightSidebarWithHeader/index.html?raw";
import reactlightSidebarWithHeaderData from "./snippets/lightSidebarWithHeader/index.jsx?raw";
import vuelightSidebarWithHeaderData from "./snippets/lightSidebarWithHeader/index.vue?raw";

import htmlbrandSidebarData from "./snippets/brandSidebar/index.html?raw";
import reactbrandSidebarData from "./snippets/brandSidebar/index.jsx?raw";
import vuebrandSidebarData from "./snippets/brandSidebar/index.vue?raw";

import htmldarkSidebarData from "./snippets/darkSidebar/index.html?raw";
import reactdarkSidebarData from "./snippets/darkSidebar/index.jsx?raw";
import vuedarkSidebarData from "./snippets/darkSidebar/index.vue?raw";

import htmllightSidebarWithConstrainedData from "./snippets/lightSidebarWithConstrained/index.html?raw";
import reactlightSidebarWithConstrainedData from "./snippets/lightSidebarWithConstrained/index.jsx?raw";
import vuelightSidebarWithConstrainedData from "./snippets/lightSidebarWithConstrained/index.vue?raw";

import htmllightSidebarWithOffWhiteData from "./snippets/lightSidebarWithOffWhite/index.html?raw";
import reactlightSidebarWithOffWhiteData from "./snippets/lightSidebarWithOffWhite/index.jsx?raw";
import vuelightSidebarWithOffWhiteData from "./snippets/lightSidebarWithOffWhite/index.vue?raw";

import htmllightSidebarData from "./snippets/lightSidebar/index.html?raw";
import reactlightSidebarData from "./snippets/lightSidebar/index.jsx?raw";
import vuelightSidebarData from "./snippets/lightSidebar/index.vue?raw";

function SidebarLayout() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Application Shells"
      title="Sidebar Layouts"
      iframeHeight={720}
    >
      <Preview
        title="Brand sidebar with header"
        data={{
          html: htmlbrandSidebarWithHeaderData,
          react: reactbrandSidebarWithHeaderData,
          vue: vuebrandSidebarWithHeaderData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Dark sidebar with header"
        data={{
          html: htmldarkSidebarWithHeaderData,
          react: reactdarkSidebarWithHeaderData,
          vue: vuedarkSidebarWithHeaderData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with header"
        data={{
          html: htmllightSidebarWithHeaderData,
          react: reactlightSidebarWithHeaderData,
          vue: vuelightSidebarWithHeaderData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Brand sidebar"
        data={{
          html: htmlbrandSidebarData,
          react: reactbrandSidebarData,
          vue: vuebrandSidebarData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Dark sidebar"
        data={{
          html: htmldarkSidebarData,
          react: reactdarkSidebarData,
          vue: vuedarkSidebarData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with constrained content area"
        data={{
          html: htmllightSidebarWithConstrainedData,
          react: reactlightSidebarWithConstrainedData,
          vue: vuelightSidebarWithConstrainedData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with off-white background"
        data={{
          html: htmllightSidebarWithOffWhiteData,
          react: reactlightSidebarWithOffWhiteData,
          vue: vuelightSidebarWithOffWhiteData,
        }}
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar"
        data={{
          html: htmllightSidebarData,
          react: reactlightSidebarData,
          vue: vuelightSidebarData,
        }}
        placeholder={placeholderData}
      />
    </PreviewLayout>
  );
}

export default SidebarLayout;
