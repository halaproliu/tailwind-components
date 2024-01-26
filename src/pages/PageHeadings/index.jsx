import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function PageHeadings() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Headings"
      title="Page Headings"
      iframeHeight={100}
      modules={modules}
      className="pb-10"
    >
      <Preview
        title="With Actions"
        moduleName="withActions"
        iframeStyle={{ height: 100 }}
        previewWrapper={
          '<div class="bg-white p-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With Actions on dark"
        moduleName="withActionsOnDark"
        iframeStyle={{ height: 100 }}
        previewWrapper={
          '<div class="bg-gray-800 p-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With Actions and breadcrumbs"
        moduleName="withActionsAndBreadcrumbs"
        iframeStyle={{ height: 128 }}
        iframeHeight
        previewWrapper={
          '<div class="bg-white p-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With Actions and breadcrumbs on dark"
        moduleName="withActionsAndBreadcrumbsOnDark"
        iframeStyle={{ height: 128 }}
        previewWrapper={
          '<div class="bg-gray-800 p-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With meta and actions"
        moduleName="withMetaAndActions"
        iframeStyle={{ height: 384 }}
        previewWrapper={
          '<div class="bg-white p-8" style="min-height: 384px;"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With meta and actions on dark"
        moduleName="withMetaAndActionsOnDark"
        iframeStyle={{ height: 384 }}
        previewWrapper={
          '<div class="bg-gray-800 p-8" style="min-height: 384px;"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With banner image"
        moduleName="withBannerImage"
        iframeStyle={{ height: 280 }}
        previewWrapper={
          '<div class="bg-white pb-6"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With avatar and actions"
        moduleName="withAvatarAndActions"
        iframeStyle={{ height: 112 }}
        previewWrapper={
          '<div class="bg-white"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Card with avatar and stats"
        moduleName="cardWithAvatarAndStats"
        iframeStyle={{ height: 280 }}
        previewWrapper={
          '<div class="bg-gray-200 py-8"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With meta, actions, and breadcrumbs"
        moduleName="withMetaActionAndBreadcrumbs"
        iframeStyle={{ height: 384 }}
        previewWrapper={
          '<div class="bg-white p-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With meta, actions, and breadcrumbs on dark"
        moduleName="withMetaActionsAndBreadcrumbsOnDark"
        iframeStyle={{ height: 384 }}
        previewWrapper={
          '<div class="bg-gray-800 p-8" style="min-height: 384px"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With filters and action"
        moduleName="withFiltersAndAction"
        iframeStyle={{ height: 100 }}
        previewWrapper={
          '<div class="bg-white py-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With logo, meta and actions"
        moduleName="withLogoMetaAndActions"
        iframeStyle={{ height: 208 }}
        previewWrapper={
          '<div class="bg-white py-8"><div class="mx-auto max-w-7xl"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}

export default PageHeadings;
