import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;