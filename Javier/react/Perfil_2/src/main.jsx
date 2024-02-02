import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import {Avatar, Data} from "./FirstApp";
import { FirsApp } from "./FirstApp";
import { Mostrar } from "./FirstApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirsApp />
    <Mostrar />
    <Avatar />
    <Data nombre="aldair" edad="18" apellido="torres" />
  </React.StrictMode>
);
