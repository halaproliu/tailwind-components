import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import StackedLayout from "@/pages/StackedLayout";
import SidebarLayout from "@/pages/SidebarLayout";
import MultiColumnLayout from "@/pages/MultiColumnLayout";
import PageHeadings from "@/pages/PageHeadings";
import Dialogs from "@/pages/Dialogs";
import SlideOvers from "@/pages/SlideOvers";
import Notifications from "@/pages/Notifications";
import Avatars from "@/pages/Avatars";
import Badges from "@/pages/Badges";
import Dropdowns from "@/pages/Dropdowns";
import Buttons from "@/pages/Buttons";
import ButtonGroups from "@/pages/ButtonGroups";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stacked" element={<StackedLayout />} />
    <Route path="/sidebar" element={<SidebarLayout />} />
    <Route path="/multiColumn" element={<MultiColumnLayout />} />
    <Route path="/pageHeadings" element={<PageHeadings />} />
    <Route path="/dialogs" element={<Dialogs />} />
    <Route path="/slideOvers" element={<SlideOvers />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/avatars" element={<Avatars />} />
    <Route path="/badges" element={<Badges />} />
    <Route path="/dropdowns" element={<Dropdowns />} />
    <Route path="/buttons" element={<Buttons />} />
    <Route path="/buttonGroups" element={<ButtonGroups />} />
  </Routes>
);

export default routes;
