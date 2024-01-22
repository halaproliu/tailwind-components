import { Fragment } from "react";
import cls from "classnames";
import * as clipboard from "@/utils/clipboard";
import { getId } from "@/utils/random";

const tabId = getId();
const tabNextId = getId();

function PreviewHeader(props) {
  const {
    title,
    componentId,
    isPreview,
    language,
    onChange,
    onPreviewChange,
    data,
  } = props;

  const handleCopyText = async () => {
    await clipboard.writeText(data[language]);
    alert("copied");
  };

  return (
    <Fragment>
      <div className="flex min-w-0">
        <h2 className="truncate text-base font-medium leading-7 text-slate-900">
          <a href={componentId}>{title}</a>
        </h2>
        <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
          Requires JS
        </a>
      </div>
      <div className="ml-6 flex items-center">
        <div
          className="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            className={cls(
              "flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3",
              {
                "bg-white shadow": isPreview,
              },
            )}
            id={`headlessui-tabs-tab-${tabId}`}
            role="tab"
            type="button"
            aria-selected={isPreview}
            tabIndex="0"
            data-headlessui-state={isPreview ? "selected" : ""}
            aria-controls={`headlessui-tabs-panel-${tabId}`}
            onClick={() => onPreviewChange(true)}
          >
            <svg
              className="h-5 w-5 flex-none stroke-sky-500"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z" />
              <circle cx="10" cy="10" r="2.25"></circle>
            </svg>
            <span className="sr-only text-slate-900 lg:not-sr-only lg:ml-2">
              Preview
            </span>
          </button>
          <button
            className={cls(
              "flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3",
              {
                "bg-white shadow": !isPreview,
              },
            )}
            id={`headlessui-tabs-tab-${tabNextId}`}
            role="tab"
            type="button"
            aria-selected={!isPreview}
            tabIndex="-1"
            data-headlessui-state={!isPreview ? "selected" : ""}
            aria-controls={`headlessui-tabs-panel-${tabNextId}`}
            onClick={() => onPreviewChange(false)}
          >
            <svg
              className="h-5 w-5 flex-none stroke-slate-600"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25" />
            </svg>
            <span className="sr-only text-slate-600 lg:not-sr-only lg:ml-2">
              Code
            </span>
          </button>
        </div>
        <div className="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
        <div className="relative hidden sm:block">
          <select
            value={language}
            onChange={(e) => onChange(e.target.value, e)}
            className="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm"
          >
            <option value="html">HTML</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 8 6"
            width="8"
            height="6"
            fill="none"
            className="pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500"
          >
            <path
              d="M7 1.5l-3 3-3-3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button
          onClick={handleCopyText}
          className="group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex"
        >
          <svg
            className="h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7475 16.2499L18.2475 16.2499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7475 19.2499L18.2475 19.2499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g className="opacity-0">
              <path
                d="M15.9975 5.99988L15.9975 3.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9975 5.99988L20.9975 4.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9975 5.99988L10.9975 4.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </Fragment>
  );
}

export default PreviewHeader;
