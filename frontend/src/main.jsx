import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CampaignProvider } from "./context/CampaignContext.jsx"; // ✅ Explicitly specify .jsx

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CampaignProvider> {/* ✅ Wrap App with Context Provider */}
      <App />
    </CampaignProvider>
  </BrowserRouter>
);
