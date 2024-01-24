import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import StackedLayout from "@/pages/StackedLayout";
import SidebarLayout from "@/pages/SidebarLayout";
import PageHeadings from "@/pages/PageHeadings";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stacked" element={<StackedLayout />} />
    <Route path="/sidebar" element={<SidebarLayout />} />
    <Route path="/pageHeadings" element={<PageHeadings />} />
  </Routes>
);

export default routes;
