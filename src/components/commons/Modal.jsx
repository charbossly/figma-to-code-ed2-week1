import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

function Modal({ showModal, changeModal, children }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      changeModal(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop font-raleway fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClick}
        >
          <motion.div
            className="bg-white rounded-lg p-8"
            variants={modalVariants}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
