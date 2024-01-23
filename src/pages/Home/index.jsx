import ContainerItem from "./container-item";
import SectionItem from "./section-item";
import LayoutItem from "./layout-item";
import { MARKETING } from "@/constants/marketing";
import { omit } from "@/utils/object";
import { ECOMMERCE } from "@/constants/ecommerce";

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
          id="product-application-ui"
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
        {
          MARKETING.map(c => (
          <ContainerItem key={c.id} {...omit(c, ['children'])}>
            {(c.children || []).map(s => (
              <SectionItem key={s.id} {...omit(s, ['children'])}>
                {(s.children || []).map((l, i) => <LayoutItem key={i} {...l}></LayoutItem>)}
              </SectionItem>))}
          </ContainerItem>))
        }
        {
          ECOMMERCE.map(c => (
          <ContainerItem key={c.id} {...omit(c, ['children'])}>
            {(c.children || []).map(s => (
              <SectionItem key={s.id} {...omit(s, ['children'])}>
                {(s.children || []).map((l, i) => <LayoutItem key={i} {...l}></LayoutItem>)}
              </SectionItem>))}
          </ContainerItem>))
        }
      </div>
    </>
  );
}

export default Home;
