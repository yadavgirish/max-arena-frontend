import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function PublicOnlyRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border border-white/15 border-t-lime-400" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
            Checking your session
          </p>
        </div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute;