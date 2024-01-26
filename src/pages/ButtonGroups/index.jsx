import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

export default function Buttons() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Elements"
      title="ButtonGroups"
      iframeHeight={100}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="Basic"
        moduleName="Basic"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><!-- full content --></div>'
        }
      />
      <Preview
        title="Icon only"
        moduleName="IconOnly"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><!-- full content --></div>'
        }
      />
      <Preview
        title="With stat"
        moduleName="WithStat"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><!-- full content --></div>'
        }
      />
      <Preview
        title="With dropdown"
        moduleName="WithDropdown"
        iframeHeight={256}
        iframeStyle={{ height: 256 }}
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8" style="min-height:256px"><!-- full content --></div>'
        }
      />
      <Preview
        title="With checkbox and dropdown"
        moduleName="WithCheckboxAndDropdown"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><!-- full content --></div>'
        }
      />
    </PreviewLayout>
  );
}
