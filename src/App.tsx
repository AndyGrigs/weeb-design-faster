
import { BrowserMockup } from "./components/Header/BrowserMockup/BrowserMockup";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Header/HeroSection/HeroSection";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HeroSection/>
        <BrowserMockup/>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
