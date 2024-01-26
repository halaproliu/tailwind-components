import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function Dialogs() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Overlays"
      title="Dialogs"
      iframeHeight={560}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="Centered with single action"
        moduleName="CenteredWithSingleAction"
        previewWrapper={
          '<div class="bg-gray-300" style="height:560px;"><!-- full content --></div>'
        }
      />
      <Preview
        title="Centered with wide buttons"
        moduleName="CenteredWithWideButtons"
      />
      <Preview title="Simple alert" moduleName="SimpleAlert" />
      <Preview
        title="Simple with dismiss button"
        moduleName="SimpleWithDismissButton"
      />
      <Preview
        title="Simple with gray footer"
        moduleName="SimpleWithGrayFooter"
      />
      <Preview
        title="Simple alert with left-aligned buttons"
        moduleName="SimpleAlertWithLeftAlignedButtons"
      />
    </PreviewLayout>
  );
}

export default Dialogs;
