import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import ScrollProgress from "../components/navigation/ScrollProgress";
import Footer from "../components/navigation/Footer";
import BackToTop from "../components/navigation/BackToTop";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function PublicLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <ScrollToTop />

      <ScrollProgress />

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default PublicLayout;