import React from "react";
import { BrowserRouter } from "react-router-dom";
// Components
import Navbar from "./components/layouts/Navbar";
import Logo from "./components/layouts/Logo";
import Contact from "./components/layouts/Contact";
import Carousel from "./components/layouts/Carousel";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Contact />
      <Logo />
      <Navbar />
      <Carousel />
    </BrowserRouter>
  );
};

export default App;
