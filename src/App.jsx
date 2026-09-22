import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;