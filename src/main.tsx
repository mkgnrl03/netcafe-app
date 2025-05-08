import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="p-4 font-sans bg-gray-950 text-white w-full h-dvh" >
     <App />
    </div>
  </React.StrictMode>,
);
