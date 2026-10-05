import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      {/* <Contact/>
      <About/> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;