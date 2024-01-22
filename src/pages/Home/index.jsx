import ContainerItem from "./container-item";
import SectionItem from "./section-item";
import LayoutItem from "./layout-item";

function Home() {
  return (
    <>
      <div className="sticky top-0 z-40 overflow-x-auto whitespace-nowrap border-b border-slate-900/5 bg-transparent transition duration-100">
        <div className="max-w-container mx-auto flex justify-between space-x-8 py-4 text-sm font-semibold leading-6 text-slate-900">
          <div className="flex space-x-8 pl-4 sm:pl-6 lg:pl-8">
            <a href="#product-application-ui">Application UI</a>
            <a href="#product-marketing">Marketing</a>
            <a href="#product-ecommerce">Ecommerce</a>
          </div>
          <div className="flex space-x-8 pr-4 sm:pr-6 lg:pr-8">
            <a href="#pricing">Pricing</a>
            <a href="#faqs">
              <abbr className="no-underline" title="Frequently asked questions">
                FAQs
              </abbr>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container relative mx-auto w-full space-y-20 px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <ContainerItem
          title="Application UI"
          description={
            <>
              Form layouts, tables, dialogs — everything you need to build
              beautiful responsive web applications.
            </>
          }
        >
          <SectionItem
            id="product-application-ui-application-shells"
            title="Application Shells"
            compName="application-ui"
          >
            <LayoutItem
              name="Stacked Layouts"
              count="9"
              img="/stacked.png"
              url="/stacked"
            />
            <LayoutItem
              name="Sidebar Layouts"
              count="8"
              img="/sidebar.png"
              url="/sidebar"
            />
            <LayoutItem
              name="Multi-Column Layouts"
              count="6"
              img="/multi-column.png"
            />
          </SectionItem>
          <SectionItem
            id="product-application-ui-headings"
            title="Headings"
            compName="application-ui"
          >
            <LayoutItem
              name="Page Headings"
              count="13"
              img="/page-headings.png"
            />
            <LayoutItem
              name="Card Headings"
              count="6"
              img="/card-headings.png"
            />
            <LayoutItem
              name="Section Headings"
              count="10"
              img="/section-headings.png"
            />
          </SectionItem>
          <SectionItem
            id="product-application-ui-data-display"
            title="Data Display"
            compName="application-ui"
          >
            <LayoutItem
              name="Description Lists"
              count="7"
              img="/description-lists.png"
            />
            <LayoutItem name="Stats" count="5" img="/stats.png" />
            <LayoutItem name="Calendars" count="8" img="/calendars.png" />
          </SectionItem>
          <SectionItem
            id="product-application-ui-lists"
            title="Lists"
            compName="application-ui"
          >
            <LayoutItem
              name="Stacked Lists"
              count="17"
              img="/stacked-lists.png"
            />
            <LayoutItem name="Tables" count="20" img="/tables.png" />
            <LayoutItem name="Grid Lists" count="7" img="/grid-lists.png" />
            <LayoutItem name="Feeds" count="3" img="/feeds.png" />
          </SectionItem>
          <SectionItem
            id="product-application-ui-forms"
            title="Forms"
            compName="application-ui"
          >
            <LayoutItem name="Form Layouts" count="5" img="/form-layouts.png" />
            <LayoutItem
              name="Input Groups"
              count="21"
              img="/input-groups.png"
            />
            <LayoutItem name="Select Menus" count="7" img="/select-menus.png" />
            <LayoutItem
              name="Sign-in and Registration"
              count="5"
              img="/sign-in-forms.png"
            />
            <LayoutItem name="Textareas" count="5" img="/textareas.png" />
            <LayoutItem
              name="Radio Groups"
              count="12"
              img="/radio-groups.png"
            />
            <LayoutItem name="Checkboxes" count="4" img="/checkboxes.png" />
            <LayoutItem name="Toggles" count="5" img="/toggles.png" />
            <LayoutItem
              name="Action Panels"
              count="8"
              img="/action-panels.png"
            />
            <LayoutItem name="Comboboxes" count="5" img="/comboboxes.png" />
          </SectionItem>
          <SectionItem
            id="product-application-ui-feedback"
            title="Feedback"
            compName="application-ui"
          >
            <LayoutItem name="Alerts" count="6" img="/alerts.png" />
            <LayoutItem name="Empty States" count="6" img="/empty-states.png" />
          </SectionItem>
          <SectionItem
            id="product-application-ui-navigation"
            title="Navigation"
            compName="application-ui"
          >
            <LayoutItem name="Navbars" count="11" img="/navbars.png" />
            <LayoutItem name="Pagination" count="3" img="/pagination.png" />
            <LayoutItem name="Tabs" count="6" img="/tabs.png" />
            <LayoutItem
              name="Vertical Navigation"
              count="6"
              img="/vertical-navigation.png"
            />
            <LayoutItem
              name="Sidebar Navigation"
              count="5"
              img="/sidebar-navigation.png"
            />
            <LayoutItem name="Breadcrumbs" count="4" img="/breadcrumbs.png" />
            <LayoutItem name="Steps" count="8" img="/steps.png" />
            <LayoutItem
              name="Command Palettes"
              count="9"
              img="/command-palettes.png"
            />
          </SectionItem>
          <SectionItem
            id="product-application-ui-overlays"
            title="Overlays"
            compName="application-ui"
          >
            <LayoutItem name="Dialogs" count="6" img="/dialogs.png" />
            <LayoutItem name="Slide-overs" count="12" img="/slide-overs.png" />
            <LayoutItem
              name="Notifications"
              count="6"
              img="/notifications.png"
            />
          </SectionItem>
          <SectionItem
            id="product-application-ui-elements"
            title="Elements"
            compName="application-ui"
          >
            <LayoutItem name="Avatars" count="11" img="/avatars.png" />
            <LayoutItem name="Badges" count="18" img="/badges.png" />
            <LayoutItem name="Dropdowns" count="5" img="/dropdowns.png" />
            <LayoutItem name="Buttons" count="10" img="/buttons.png" />
            <LayoutItem
              name="Button Groups"
              count="5"
              img="/button-groups.png"
            />
          </SectionItem>
          <SectionItem
            id="product-application-ui-layout"
            title="Layout"
            compName="application-ui"
          >
            <LayoutItem name="Containers" count="5" img="/containers.png" />
            <LayoutItem name="Panels" count="10" img="/panels.png" />
            <LayoutItem
              name="List containers"
              count="7"
              img="/list-containers.png"
            />
            <LayoutItem
              name="Media Objects"
              count="8"
              img="/media-objects.png"
            />
            <LayoutItem name="Dividers" count="8" img="/dividers.png" />
          </SectionItem>
          <SectionItem
            id="product-application-ui-page-examples"
            title="Page Examples"
            compName="application-ui"
          >
            <LayoutItem name="Home Screens" count="2" img="/home-screens.png" />
            <LayoutItem
              name="Detail Screens"
              count="2"
              img="/detail-screens.png"
            />
            <LayoutItem
              name="Settings Screens"
              count="2"
              img="/settings-screens.png"
            />
          </SectionItem>
        </ContainerItem>
        <section id="product-marketing" className="scroll-mt-28">
          <h2 className="text-xl font-bold text-slate-900">Marketing</h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Heroes, feature sections, newsletter sign up forms — everything you
            need to build beautiful marketing websites.
          </p>
          <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
            <section
              id="product-marketing-sections"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Page Sections
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/heroes.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/heroes">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Hero Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      12 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/feature-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/feature-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Feature Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      18 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/cta-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/cta-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">CTA Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      11 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/pricing.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/pricing">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Pricing Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      13 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/header.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/header">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Header Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      10 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/newsletter-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/newsletter-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Newsletter Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      7 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/stats-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/stats-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Stats</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      10 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/testimonials.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/testimonials">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Testimonials</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      9 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/blog-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/blog-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Blog Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      7 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/contact-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/contact-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Contact Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/team-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/team-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Team Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      9 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/content-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/content-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Content Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      6 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/logo-clouds.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/logo-clouds">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Logo Clouds</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      12 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/faq-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/faq-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">FAQs</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      10 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/footers.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/sections/footers">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Footers</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      10 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section
              id="product-marketing-elements"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Elements
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/headers.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/elements/headers">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Headers</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      12 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/flyout-menus.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/elements/flyout-menus">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Flyout Menus</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      7 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/banners.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/elements/banners">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Banners</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      13 components
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section
              id="product-marketing-feedback"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Feedback
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/404-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/feedback/404-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">404 Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section
              id="product-marketing-page-examples"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Page Examples
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/landing-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/page-examples/landing-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Landing Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/pricing-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/page-examples/pricing-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Pricing Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      3 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/marketing/about-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/marketing/page-examples/about-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">About Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      3 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section id="product-ecommerce" className="scroll-mt-28">
          <h2 className="text-xl font-bold text-slate-900">Ecommerce</h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Checkout forms, shopping carts, product views — everything you need
            to build your next ecommerce front-end.
          </p>
          <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
            <section
              id="product-ecommerce-components"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Components
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/product-overviews.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/product-overviews">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Product Overviews</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/product-lists.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/product-lists">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Product Lists</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      11 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/category-previews.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/category-previews">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Category Previews</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      6 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/shopping-carts.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/shopping-carts">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Shopping Carts</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      6 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/category-filters.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/category-filters">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Category Filters</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/product-quickviews.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/product-quickviews">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Product Quickviews</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/product-features.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/product-features">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Product Features</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      9 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/store-navigation.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/store-navigation">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Store Navigation</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/promo-sections.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/promo-sections">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Promo Sections</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/checkout-forms.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/checkout-forms">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Checkout Forms</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/reviews.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/reviews">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Reviews</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/order-summaries.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/order-summaries">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Order Summaries</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/order-history.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/order-history">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Order History</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/incentives.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/components/incentives">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Incentives</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section
              id="product-ecommerce-page-examples"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Page Examples
              </h3>
              <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/storefront-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/storefront-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Storefront Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      4 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/product-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/product-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Product Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/category-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/category-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Category Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/shopping-cart-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/shopping-cart-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Shopping Cart Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      3 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/checkout-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/checkout-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Checkout Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/order-detail-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/order-detail-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Order Detail Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      3 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/img/category-thumbnails/ecommerce/order-history-pages.png`}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="/components/ecommerce/page-examples/order-history-pages">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Order History Pages</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 examples
                    </p>
                    <p className="pointer-events-none absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                      <span className="sr-only">
                        PNG previews only, upgrade to get the HTML.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
