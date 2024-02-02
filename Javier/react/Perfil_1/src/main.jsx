import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import { Avatar, Data } from "./FirstApp";

import { MotoviajoAp } from "./Motoviajero";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="card">
      <Avatar />

      <Data nombre="aldair" edad="18" apellido="torres" />
      <MotoviajoAp />
    </div>
  </React.StrictMode>
);
