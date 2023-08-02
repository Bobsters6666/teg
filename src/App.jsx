import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Partner from "./components/Partners/Partner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
    </>
  );
}

export default App;
