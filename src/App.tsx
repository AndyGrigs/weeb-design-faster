
import { BrowserMockup } from "./components/Header/BrowserMockup/BrowserMockup";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Header/HeroSection/HeroSection";
import { Companies } from "./components/Companies/Companies";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeroSection/>
        <BrowserMockup/>
        <Companies/>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
