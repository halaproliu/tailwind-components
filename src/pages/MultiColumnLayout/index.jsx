import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

import placeholder from "./snippets/placeholder.html?raw";
import placeholderPadding from "./snippets/NarrowBrandedSidebar/placeholder.html?raw";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function MultiColumnLayout() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Application Shells"
      title="Multi-Column Layouts"
      iframeHeight={720}
      modules={modules}
      replaceMarkedList={[
        { text: "<!-- Main area -->", replaceText: placeholder },
        {
          text: "<!-- Secondary column (hidden on smaller screens) -->",
          replaceText: placeholder,
        },
        {
          text: "<!-- Your content padding -->",
          replaceText: placeholderPadding,
        },
      ]}
      placeholder={placeholder}
    >
      <Preview
        title="Full-width three-column"
        moduleName="fullwidththreecolumn"
        normalIframeHeight={816}
        iframeStyle={{ height: 720 }}
      />
      <Preview
        title="Full-width secondary column on right"
        moduleName="secondarywidthonright"
        normalIframeHeight={816}
      />
      <Preview
        title="Constrained three column"
        moduleName="ConstrainedThreeColumn"
        normalIframeHeight={816}
      />
      <Preview
        title="Constrained with sticky columns"
        moduleName="ConstrainedWithStickyColumns"
        normalIframeHeight={816}
      />
      <Preview
        title="Full-width with narrow sidebar"
        moduleName="Full-widthWithNarrowSidebar"
        normalIframeHeight={816}
      />
      <Preview
        title="Full-width with narrow sidebar and header"
        moduleName="Full-widthWithNarrowSidebarHeader"
        normalIframeHeight={816}
      />
      <Preview
        title="Full-width with narrow branded sidebar"
        moduleName="NarrowBrandedSidebar"
        normalIframeHeight={816}
      />
      <Preview
        title="Full-width with narrow sidebar and secondary column on right"
        moduleName="NarrowSidebarAndSecondaryColumn"
        normalIframeHeight={816}
      />
    </PreviewLayout>
  );
}

export default MultiColumnLayout;
