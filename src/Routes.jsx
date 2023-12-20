import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingpageOne = React.lazy(() => import("pages/LandingpageOne"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigate to="/landingpageone" replace />
                <Home />
              </>
            }
          />
          <Route path="/landingpageone" element={<LandingpageOne />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
