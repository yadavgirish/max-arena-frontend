import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-lime-400">
              MAX ARENA / MEMBER AREA
            </p>

            <h1 className="font-space text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              Welcome, {user?.name || "Athlete"}
            </h1>

            <p className="mt-3 text-sm text-white/45">
              Your MAX ARENA member dashboard.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="w-fit rounded-xl border border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-red-400/30 hover:text-red-300"
          >
            Logout
          </button>
        </div>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              Member
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              {user?.name || "Athlete"}
            </h2>

            <p className="mt-2 break-all text-sm text-white/40">
              {user?.email}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              Membership
            </p>

            <h2 className="mt-3 text-xl font-semibold">No Active Plan</h2>

            <p className="mt-2 text-sm text-white/40">
              Choose a membership to get started.
            </p>
          </div>

          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/[0.06] p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-lime-400/70">
              Ready?
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Train With Purpose.
            </h2>

            <Link
              to="/memberships"
              className="mt-5 inline-flex rounded-xl bg-lime-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-lime-300"
            >
              View Memberships
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            to="/classes"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/30 hover:bg-white/[0.05]"
          >
            <p className="text-2xl">🏋️</p>

            <h2 className="mt-4 text-lg font-semibold">
              Explore Classes
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Discover training sessions and workout programs.
            </p>
          </Link>

          <Link
            to="/trainers"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/30 hover:bg-white/[0.05]"
          >
            <p className="text-2xl">💪</p>

            <h2 className="mt-4 text-lg font-semibold">
              Meet Trainers
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Explore the MAX ARENA coaching team.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;