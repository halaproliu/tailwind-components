import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

import placeholderData from "./snippets/placeholder.html?raw";

const modules = import.meta.glob(`./snippets/*/index.*`, { eager: true, as: 'raw' });

function SidebarLayout() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Application Shells"
      title="Sidebar Layouts"
      iframeHeight={720}
      modules={modules}
    >
      <Preview
        title="Brand sidebar with header"
        moduleName="brandSidebarWithHeader"
        placeholder={placeholderData}
      />
      <Preview
        title="Dark sidebar with header"
        moduleName="darkSidebarWithHeader"
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with header"
        moduleName="lighSidebarWithHeader"
        placeholder={placeholderData}
      />
      <Preview
        title="Brand sidebar"
        moduleName="brandSidebar"
        placeholder={placeholderData}
      />
      <Preview
        title="Dark sidebar"
        moduleName="darkSidebar"
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with constrained content area"
        moduleName="lightSidebarWithConstrained"
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar with off-white background"
        moduleName="lightSidebarWithOffWhite"
        placeholder={placeholderData}
      />
      <Preview
        title="Light sidebar"
        moduleName="lightSidebar"
        placeholder={placeholderData}
      />
    </PreviewLayout>
  );
}

export default SidebarLayout;
