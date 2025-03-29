import {useState} from "react";
import { Header } from "./components/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
