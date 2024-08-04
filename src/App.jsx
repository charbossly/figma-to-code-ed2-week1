import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Modal from "./components/commons/Modal";
import SignupForm from "./components/commons/Signup";

function App() {
  const [showModal, setShowModal] = useState(false);

  const changeModal = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <Header changeModal={changeModal} />
      <Hero showModal={showModal} changeModal={changeModal} />
      <Collections />
      <Features />
      <Cta changeModal={changeModal} />
      <Footer />
      <Modal showModal={showModal} changeModal={changeModal}>
        <SignupForm changeModal={changeModal} />
      </Modal>
    </>
  );
}

export default App;
