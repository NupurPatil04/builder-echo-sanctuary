import "./global.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (container) {
  const win = window as any;
  if (!win.__app_root) {
    win.__app_root = createRoot(container);
  }
  win.__app_root.render(<App />);
}
