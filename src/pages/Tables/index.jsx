import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";
import WithHiddenHeadings from "./snippets/WithHiddenHeadings";

const modules = import.meta.glob(`./snippets/*/*.*`, {
  eager: true,
  as: "raw",
});

function getPlaceholder(moduleName) {
  return modules[`./snippets/${moduleName}/placeholder.html`];
}

function Tables() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Lists"
      title="Tables"
      iframeHeight={530}
      normalIframeHeight={602}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="Simple"
        moduleName="Simple"
        iframeStyle={{ height: 530 }}
        replaceMarkedList={[
          {
            text: "<!-- More people... -->",
            replaceText: getPlaceholder("Simple"),
          },
        ]}
        previewWrapper={
          '<div class="bg-white py-10 min-h-[530px]"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Simple on dark"
        moduleName="SimpleOnDark"
        iframeStyle={{ height: 530 }}
        replaceMarkedList={[
          {
            text: "<!-- More people... -->",
            replaceText: getPlaceholder("SimpleOnDark"),
          },
        ]}
      />
      <Preview
        title="Simple in card"
        moduleName="SimpleInCard"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Full width"
        moduleName="FullWidth"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Full width with constrained content"
        moduleName="FullWidthWithConstainedContent"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With striped rows"
        moduleName="WithStripedRows"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With uppercase headings"
        moduleName="WithUppercaseHeadings"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With stacked columns on mobile"
        moduleName="WithStackedColumnsOnMobile"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With hidden columns on mobile"
        moduleName="WithHiddenColumnsOnMobile"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With avatars and multi-line content"
        moduleName="WithAvatarsAndMultiLine"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With sticky header"
        moduleName="WithStickyHeader"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With vertical lines"
        moduleName="WithVerticalLines"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With condensed content"
        moduleName="WithCondensedContent"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With sortable headings"
        moduleName="WithSortableHeadings"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With grouped rows"
        moduleName="WithGroupedRows"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With summary rows"
        moduleName="WithSummaryRows"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With border"
        moduleName="WithBorder"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With checkboxes"
        moduleName="WithCheckboxes"
        previewWrapper={
          '<div class="bg-white py-10"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With hidden headings"
        moduleName="WithHiddenHeadings"
        iframeHeight={561}
        iframeStyle={{ height: 561 }}
        previewWrapper={
          '<div class="bg-white py-10"><!-- full content --></div>'
        }
        render={() => (
          <div className="bg-white py-10">
            <WithHiddenHeadings />
          </div>
        )}
      />
      <Preview
        title="Full width with avatars on dark"
        moduleName="FullWidthWithAvatarsOnDark"
        iframeHeight={692}
        iframeStyle={{ height: 692 }}
        previewWrapper={
          '<div class="bg-gray-900 py-10" style="min-height: 692px"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}

export default Tables;
