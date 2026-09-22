import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";

import PublicLayout from "../layouts/PublicLayout";
import PageTransition from "../components/animations/PageTransition";

// Pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Programs = lazy(() => import("../pages/Programs"));
const ProgramDetails = lazy(() => import("../pages/ProgramDetails"));
const Trainers = lazy(() => import("../pages/Trainers"));
const TrainerDetails = lazy(() => import("../pages/TrainerDetails"));
const Memberships = lazy(() => import("../pages/Memberships"));
const Classes = lazy(() => import("../pages/Classes"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const Join = lazy(() => import("../pages/Join"));
const FreeTrial = lazy(() => import("../pages/FreeTrial"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#050505] text-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border border-white/15 border-t-white" />

        <p className="mt-5 font-space text-[9px] uppercase tracking-[0.3em] text-white/35">
          ENTERING THE ARENA
        </p>
      </div>
    </div>
  );
}

function AnimatedPage({ children }) {
  return <PageTransition>{children}</PageTransition>;
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />

          <Route
            path="/about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />

          <Route
            path="/programs"
            element={
              <AnimatedPage>
                <Programs />
              </AnimatedPage>
            }
          />

          <Route
            path="/programs/:slug"
            element={
              <AnimatedPage>
                <ProgramDetails />
              </AnimatedPage>
            }
          />

          <Route
            path="/trainers"
            element={
              <AnimatedPage>
                <Trainers />
              </AnimatedPage>
            }
          />

          <Route
            path="/trainers/:id"
            element={
              <AnimatedPage>
                <TrainerDetails />
              </AnimatedPage>
            }
          />

          <Route
            path="/memberships"
            element={
              <AnimatedPage>
                <Memberships />
              </AnimatedPage>
            }
          />

          <Route
            path="/classes"
            element={
              <AnimatedPage>
                <Classes />
              </AnimatedPage>
            }
          />

          <Route
            path="/gallery"
            element={
              <AnimatedPage>
                <Gallery />
              </AnimatedPage>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />

          <Route
            path="/join"
            element={
              <AnimatedPage>
                <Join />
              </AnimatedPage>
            }
          />

          <Route
            path="/free-trial"
            element={
              <AnimatedPage>
                <FreeTrial />
              </AnimatedPage>
            }
          />

          <Route
            path="*"
            element={
              <AnimatedPage>
                <NotFound />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
