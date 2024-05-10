import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
