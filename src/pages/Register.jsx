import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authApi";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      if (!data?.success) {
        throw new Error(data?.message || "Registration failed.");
      }

      if (data.user) {
        setUser(data.user);
      }

      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-16 text-white">
      <div className="mx-auto flex min-h-[75vh] max-w-md items-center justify-center">
        <div className="w-full">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-lime-400">
              MAX ARENA
            </p>

            <h1 className="font-space text-4xl font-bold uppercase tracking-tight">
              Join The Arena
            </h1>

            <p className="mt-3 text-sm text-white/45">
              Create your MAX ARENA account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {error && (
              <div className="mb-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-lime-400/60 disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-lime-400/60 disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    disabled={loading}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 pr-20 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-lime-400/60 disabled:opacity-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wider text-white/40 transition hover:text-lime-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-lime-400 px-5 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-white/40">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-lime-400 transition hover:text-lime-300"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 transition hover:text-white/70"
            >
              ← Back to MAX ARENA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;