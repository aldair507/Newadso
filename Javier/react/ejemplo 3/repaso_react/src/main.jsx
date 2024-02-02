import React from "react";
import ReactDOM from "react-dom/client";
import "./App"
import { Data, Avatar } from "./Avatar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div >
      <Avatar />
    </div>
    
    <Data  />
  </React.StrictMode>
);
