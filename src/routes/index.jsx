import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import StackedLayout from "@/pages/StackedLayout";
import SidebarLayout from "@/pages/SidebarLayout";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stacked" element={<StackedLayout />} />
    <Route path="/sidebar" element={<SidebarLayout />} />
  </Routes>
);

export default routes;
