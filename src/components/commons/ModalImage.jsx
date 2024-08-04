import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function Modal({ selectedImg, changeSelectedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      changeSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop fixed font-raleway top-0 left-0 w-full z-50 h-full bg-black bg-opacity-75 flex justify-center items-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      onClick={handleClick}
    >
      <motion.img
        src={selectedImg}
        className="w-96 h-96 object-cover"
        alt="Enlarged"
        variants={modalVariants}
      />
      <motion.div
        className="absolute top-50 left-50  rounded-full flex justify-center items-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={modalVariants}
          onClick={() => {
            toast.success("Bid Placed successfully");
            setTimeout(() => {
              changeSelectedImg(null);
            }, 1000);
          }}
          className="bg-grayUi500 hover:bg-grayUi300 text-white font-bold py-2 px-4 rounded-full"
        >
          Place a bid
        </motion.button>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
}

export default Modal;
