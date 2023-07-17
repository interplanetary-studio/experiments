import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ObjectScene } from "./scenes/ObjectScene";

const App = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center bg-white">
      <ObjectScene />
    </section>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
