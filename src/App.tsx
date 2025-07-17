import {useState} from "react";
import { Header } from "./components/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import { HeroSection } from "./components/Header/HeroSection/HeroSection";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeroSection/>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
