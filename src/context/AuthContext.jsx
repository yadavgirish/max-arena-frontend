import { createContext, useContext, useEffect, useState } from "react";

import { apiRequest } from "../services/api";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadCurrentUser() {
    try {
      const data = await apiRequest("/user/me");

      if (data?.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCurrentUser();
  }, []);

  async function logout() {
    try {
      await apiRequest("/user/logout", {
        method: "POST",
      });
    } finally {
      setUser(null);
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    setUser,
    logout,
    refreshUser: loadCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };