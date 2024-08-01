import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Collections from "./components/collections";
import Cta from "./components/cta";
import Features from "./components/features";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Collections />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
