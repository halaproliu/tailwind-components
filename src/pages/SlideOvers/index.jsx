import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

import placeholderData from "./snippets/placeholder.html?raw";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function SlideOvers() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Overlays"
      title="Slide-overs"
      iframeHeight={500}
      modules={modules}
    >
      <Preview
        title="Empty"
        moduleName="Empty"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="Wide Empty"
        moduleName="WideEmpty"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="With background overlay"
        moduleName="WithBackgroundOverlay"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="With close button on outside"
        moduleName="WithCloseButtonOnOutside"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="With branded header"
        moduleName="WithBrandedHeader"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="With sticky footer"
        moduleName="WithStickyFooter"
        placeholder={placeholderData}
        previewWrapper={
          '<div className="min-h-[500px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="Create project form example"
        moduleName="CreateProjectFormExample"
        placeholder={placeholderData}
        iframeStyle={{ height: 960 }}
        previewWrapper={
          '<div className="min-h-[960px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="Wide create project form example"
        moduleName="WideCreateProjectFormExample"
        placeholder={placeholderData}
        iframeStyle={{ height: 960 }}
        previewWrapper={
          '<div className="min-h-[960px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="User profile example"
        moduleName="UserProfileExample"
        placeholder={placeholderData}
        iframeStyle={{ height: 800 }}
        previewWrapper={
          '<div className="min-h-[800px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="Wide horizontal User profile example"
        moduleName="WideHorizontal"
        placeholder={placeholderData}
        iframeStyle={{ height: 660 }}
        previewWrapper={
          '<div className="min-h-[660px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="Contact list example"
        moduleName="ContactListExample"
        placeholder={placeholderData}
        iframeStyle={{ height: 768 }}
        previewWrapper={
          '<div className="min-h-[768px] bg-gray-100"><!-- full content --></div>'
        }
      />
      <Preview
        title="File details example"
        moduleName="FileDetails"
        placeholder={placeholderData}
        iframeStyle={{ height: 1024 }}
        previewWrapper={
          '<div className="min-h-[64rem] bg-gray-100"><!-- full content --></div>'
        }
      />
    </PreviewLayout>
  );
}

export default SlideOvers;
