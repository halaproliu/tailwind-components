import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";
import placeholderData from "./snippets/placeholder.html?raw";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function StackedLayout() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Application Shells"
      dirname="StackedLayout"
      title="Stacked Layouts"
      iframeHeight={630}
      modules={modules}
    >
      <Preview
        title="Light nav with bottom border"
        placeholder={placeholderData}
        moduleName="light"
      />
      <Preview
        title="Light nav on gray background"
        placeholder={placeholderData}
        moduleName="lightGrayBackground"
      />
      <Preview
        title="Dark nav with white page header"
        placeholder={placeholderData}
        moduleName="darknav"
      />
      <Preview
        title="Branded nav with compact white page header"
        placeholder={placeholderData}
        moduleName="brandednav"
      />
      <Preview
        title="Dark nav with overlap"
        placeholder={placeholderData}
        moduleName="darknavwithoverlap"
      />
    </PreviewLayout>
  );
}

export default StackedLayout;
