import React from "react";
import ReactDom from "react-dom/client";
import App from "./views/App";


let root = document.getElementById("root")!;
ReactDom.createRoot(root).render(<App />);
