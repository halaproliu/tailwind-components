import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import StackedLayout from "@/pages/StackedLayout";
import SidebarLayout from "@/pages/SidebarLayout";
import MultiColumnLayout from "@/pages/MultiColumnLayout";
import PageHeadings from "@/pages/PageHeadings";
import Dialogs from "@/pages/Dialogs";
import SlideOvers from "@/pages/SlideOvers";
import Notifications from "@/pages/Notifications";

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
  </Routes>
);

export default routes;
