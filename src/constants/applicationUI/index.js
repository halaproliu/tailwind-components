import APPLICATION_SHELLS from "./applicationShells";
import HEADINGS from "./headings";
import DATA_DISPLAY from "./dataDisplay";
import LIST from "./lists";
import FORMS from "./forms";
import FEEDBACK from "./feedback";
import NAVIGATION from "./navigation";
import OVERLAYS from "./overlays";
import ELEMENTS from "./elements";
import LAYOUT from "./layout";
import PAGE_EXAMPLE from "./pageExample";

export const APPLICATION_UI = [
  {
    id: "product-application-ui",
    title: "Application UI",
    decription: `Form layouts, tables, dialogs — everything you need to build
    beautiful responsive web applications.`,
    children: [
      APPLICATION_SHELLS,
      HEADINGS,
      DATA_DISPLAY,
      LIST,
      FORMS,
      FEEDBACK,
      NAVIGATION,
      OVERLAYS,
      ELEMENTS,
      LAYOUT,
      PAGE_EXAMPLE,
    ],
  },
];
