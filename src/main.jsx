import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/animations.css";

import App from "./App";

import {
  QueryProvider,
  ThemeProvider,
  LanguageProvider,
} from "@/app/providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </QueryProvider>,
);
