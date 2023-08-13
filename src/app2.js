import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/body.js";
import Footer from "./components/Footer.js";

// config driven UI
const Applayout = () => (
  <>
    <Header/>
    <Body/>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
