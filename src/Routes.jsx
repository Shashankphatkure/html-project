import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SampleWireframe = React.lazy(() => import("pages/SampleWireframe"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/samplewireframe" element={<SampleWireframe />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
