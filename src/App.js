import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "../src/assets/css/index.css";
import "./assets/css/header.css";
import "./assets/css/home.css";
import "./assets/css/about.css";
import "./assets/css/services.css";
import "./assets/css/projects.css";
import "./assets/css/contact.css";
import "./assets/css/footer.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
