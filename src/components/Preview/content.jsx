import { Fragment } from "react";
import { getId, getRandomId } from "@/utils/random";
import cls from "classnames";

const tabId = getId();
const nextTabId = getId();
const randomId = getRandomId();

function PreviewContent(props) {
  const {
    previewSrc = "",
    placeholder = "",
    frameId,
    isPreview,
    language,
    code,
    iframeHeight = 630,
  } = props;
  const srcDoc = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>tailwind</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <!-- full content -->
    </body>
  </html>
  `
    .replace("<!-- full content -->", previewSrc)
    .replace("{/* Your content */}", placeholder)
    .replace("<!-- Your content -->", placeholder);

  return (
    <div className="col-span-2 row-start-2 min-w-0">
      {!!isPreview && (
        <Fragment>
          <div
            className="mt-4 focus:outline-none"
            id={`headlessui-tabs-panel-${tabId}`}
            role="tabpanel"
            tabIndex="0"
            data-headlessui-state="selected"
            aria-labelledby={`headlessui-tabs-tab-${tabId}`}
          >
            <div id={frameId} className="relative" style={{ height: "auto" }}>
              <style>
                {`#${frameId} {
          height: ${iframeHeight}px;
        }
        @media (min-width: 704px) {
          #${frameId} {
            height: ${iframeHeight}px;
          }
        }`}
              </style>
              <iframe
                className="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10"
                id={frameId}
                srcDoc={srcDoc}
              />
              <div className="absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex">
                <div className="h-8 w-1.5 rounded-full bg-slate-400"></div>
              </div>
            </div>
          </div>
          <span
            id={`headlessui-tabs-panel-${randomId}`}
            role="tabpanel"
            aria-labelledby={`headlessui-tabs-tab-${randomId}`}
            tabIndex="-1"
            style={{
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              borderWidth: 0,
            }}
          />
        </Fragment>
      )}
      {!isPreview && (
        <div
          className="mt-4 focus:outline-none"
          id={`headlessui-tabs-panel-${nextTabId}`}
          role="tabpanel"
          aria-labelledby={`headlessui-tabs-tab-${nextTabId}`}
          tabIndex="0"
          data-headlessui-state="selected"
        >
          <div className="flex space-x-2 rounded-t-lg border-b border-slate-700 bg-slate-800 px-2 text-sm leading-6 sm:hidden">
            <button
              type="button"
              className="-mb-px border-b border-sky-400 px-2 py-3 font-medium text-sky-400"
            >
              HTML
            </button>
            <button
              type="button"
              className="-mb-px border-b border-transparent px-2 py-3 font-medium text-slate-400 hover:text-slate-300"
            >
              React
            </button>
            <button
              type="button"
              className="-mb-px border-b border-transparent px-2 py-3 font-medium text-slate-400 hover:text-slate-300"
            >
              Vue
            </button>
          </div>
          <pre
            className={cls(
              "flex overflow-auto rounded-b-lg text-sm leading-[1.5714285714] text-white sm:rounded-t-lg",
              `language-${language}`,
            )}
          >
            <code className="p-4" dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </div>
      )}
    </div>
  );
}

export default PreviewContent;
