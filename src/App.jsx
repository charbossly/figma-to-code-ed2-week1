import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Collections from "./components/collections";
import Cta from "./components/cta";
import Features from "./components/features";
import Modal from "./components/commons/mod";
import SignupForm from "./components/commons/signup";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header setShowModal={setShowModal} />
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <Collections />
      <Features />
      <Cta setShowModal={setShowModal} />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <SignupForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
}

export default App;
