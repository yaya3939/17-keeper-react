// const react = require("react");
// const reactDOM = require("react-dom");
//在import里，大小写是很重要的
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
