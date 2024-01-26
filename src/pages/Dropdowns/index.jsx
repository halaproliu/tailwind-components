import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

export default function Dropdowns() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Elements"
      title="Dropdowns"
      iframeHeight={360}
      modules={modules}
    >
      <Preview
        title="Simple"
        moduleName="Simple"
        previewWrapper={
          '<div class="bg-gray-100 p-8" style="min-height: 360px"><div class="mx-auto w-64 text-right"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With dividers"
        moduleName="WithDividers"
        iframeHeight={460}
        previewWrapper={
          '<div class="bg-gray-100 p-8" style="min-height: 460px"><div class="mx-auto w-64 text-right"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With icons"
        moduleName="WithIcons"
        iframeHeight={460}
        previewWrapper={
          '<div class="bg-gray-100 p-8" style="min-height: 460px"><div class="mx-auto w-64 text-right"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With minimal menu icon"
        moduleName="WithMinimalMenuIcon"
        previewWrapper={
          '<div class="bg-gray-100 p-8" style="min-height: 360px"><div class="mx-auto w-64 text-right"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With simple header"
        moduleName="WithSimpleHeader"
        previewWrapper={
          '<div class="bg-gray-100 p-8" style="min-height: 360px"><div class="mx-auto w-64 text-right"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}
