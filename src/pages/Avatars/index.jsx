import Preview from "@/components/Preview";
import PreviewLayout from "@/components/Preview/layout";

const modules = import.meta.glob(`./snippets/*/index.*`, {
  eager: true,
  as: "raw",
});

function Avatars() {
  return (
    <PreviewLayout
      moduleName="Application UI"
      subModuleName="Elements"
      title="Avatars"
      iframeHeight={560}
      modules={modules}
    >
      <Preview
        title="Circular avatars"
        moduleName="CircularAvatars"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Rounded avatars"
        moduleName="RoundedAvatars"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Circular avatars with top notification"
        moduleName="CircularAvatarsWithTN"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Rounded avatars with top notification"
        moduleName="RoundedAvatarsWithTN"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Circular avatars with bottom notification"
        moduleName="CircularAvatarsWithBN"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Rounded avatars with bottom notification"
        moduleName="RoundedAvatarsWithBN"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Circular avatars with placeholder icon"
        moduleName="CircularAvatarsWithPIcon"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Circular avatars with placeholder initials"
        moduleName="CircularAvatarsWithPInitials"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Avatar group stacked bottom to top"
        moduleName="AvatarGroupStackedBTT"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="Avatar group stacked top to bottom"
        moduleName="AvatarGroupStackedTTB"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
      <Preview
        title="With text"
        moduleName="WithText"
        previewWrapper={
          '<div class="flex items-center justify-center bg-white p-8"><div class="mx-auto flex w-full max-w-lg items-end justify-around"><!-- full content --></div></div>'
        }
      />
    </PreviewLayout>
  );
}

export default Avatars;
