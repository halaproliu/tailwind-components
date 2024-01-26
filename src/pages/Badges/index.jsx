import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

export default function Badges() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Elements"
      title="Badges"
      iframeHeight={88}
      normalIframeHeight={128}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="With border"
        moduleName="WithBorder"
        iframeStyle={{ height: 88 }}
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With border on dark"
        moduleName="WithBorderOnDark"
        previewWrapper={
          '<div class="flex items-center justify-center bg-gray-900 p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With border and dot"
        moduleName="WithBorderAndDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With border and dot on dark"
        moduleName="WithBorderAndDotOnDark"
        previewWrapper={
          '<div class="flex items-center justify-center bg-gray-900 p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Pill with border"
        moduleName="PillWithBorder"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Pill with border and dot"
        moduleName="PillWithBorderAndDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With border and remove button"
        moduleName="WithBorderAndRemoveButton"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Flat"
        moduleName="Flat"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Flat pill"
        moduleName="FlatPill"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Flat with dot"
        moduleName="FlatWithDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Flat pill with dot"
        moduleName="FlatPillWithDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Flat with remove button"
        moduleName="FlatWithRemoveButton"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small with border"
        moduleName="SmallWithBorder"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small flat"
        moduleName="SmallFlat"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small pill with border"
        moduleName="SmallPillWithBorder"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small flat pill"
        moduleName="SmallFlatPill"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small flat with dot"
        moduleName="SmallFlatWithDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Small flat pill with dot"
        moduleName="SmallFlatPillWithDot"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="flex flex-wrap justify-center gap-x-6 gap-y-4"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}
