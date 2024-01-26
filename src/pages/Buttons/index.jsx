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
      title="Buttons"
      iframeHeight={104}
      normalIframeHeight={288}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="Primary buttons"
        moduleName="PrimaryButtons"
        previewWrapper={
          '<div class="bg-white py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Secondary buttons"
        moduleName="SecondaryButtons"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Primary buttons on dark"
        moduleName="PrimaryButtonsOnDark"
        normalIframeHeight={288}
        previewWrapper={
          '<div class="bg-gray-900 px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Secondary buttons on dark"
        moduleName="SecondaryButtonsOnDark"
        normalIframeHeight={288}
        previewWrapper={
          '<div class="bg-gray-900 px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Soft buttons"
        moduleName="SoftButtons"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Buttons with leading icon"
        moduleName="ButtonsWithLeadingIcon"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Buttons with trailing icon"
        moduleName="ButtonsWithTrailingIcon"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Rounded primary buttons"
        moduleName="RoundedPrimaryButtons"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Rounded secondary buttons"
        moduleName="RoundedSecondaryButtons"
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Circular buttons"
        moduleName="CircularButtons"
        iframeHeight={100}
        normalIframeHeight={192}
        previewWrapper={
          '<div class="bg-white px-4 py-8"><div class="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}
