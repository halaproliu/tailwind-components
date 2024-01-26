import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

export default function Notification() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Overlays"
      title="Notification"
      iframeHeight={320}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="Simple"
        moduleName="Simple"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
      <Preview
        title="Condensed"
        moduleName="Condensed"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
      <Preview
        title="With action below"
        moduleName="WithActionsBelow"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
      <Preview
        title="With avatar"
        moduleName="WithAvatar"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
      <Preview
        title="With split buttons"
        moduleName="WithSplitButtons"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
      <Preview
        title="With buttons below"
        moduleName="WithButtonsBelow"
        previewWrapper="<div class='bg-gray-100' style='min-height: 320px'><!-- full content --></div>"
      />
    </PreviewLayout>
  );
}
