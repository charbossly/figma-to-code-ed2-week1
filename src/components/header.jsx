import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import Close from "../assets/images/close.png";

function Header({ setShowModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Top sales", href: "#collections" },
    { name: "Collections", href: "#collections" },
    { name: "Our blog", href: "#cta" },
    { name: "About us", href: "#features" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`border-b-2 font-raleway border-grayUi50 ${
        isMenuOpen && "min-h-screen"
      } relative`}
    >
      <header
        className={`max-w-screen-lg transition-all delay-75 mx-10 md:mx-16 lg:mx-auto flex  items-center py-6 ${
          !isMenuOpen
            ? "border-l-2 border-grayUi50 justify-between"
            : "border-r-2 border-grayUi50 justify-end "
        }`}
      >
        {!isMenuOpen && (
          <div className="">
            <img src={Logo} alt="Logo" className="w-8 h-8 mr-4" />
          </div>
        )}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-grayUi700 hover:text-grayUi800 font-normal hover:font-semibold delay-200 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex  items-center space-x-3">
          <a
            href="#"
            onClick={setShowModal}
            className="text-grayUi700 hover:text-grayUi800  pr-4 border-r-2 border-grayUi400"
          >
            Sign up
          </a>
          <button
            onClick={setShowModal}
            className="px-4 py-2 bg-grayUi900 hover:bg-grayUi400 transition-all delay-75 text-white rounded-full"
          >
            Connect Wallet
          </button>
        </div>
        <div className="lg:hidden flex items-center ">
          <button onClick={toggleMenu} className="focus:outline-none">
            {!isMenuOpen ? (
              <img src={Menu} className="w-6 h-6 cursor-pointer" alt="Menu" />
            ) : (
              <img src={Close} className="w-6 h-6 cursor-pointer" alt="Close" />
            )}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <>
          <div className="lg:hidden mx-10 md:mx-16 border-r-2 border-grayUi50 min-h-[calc(100vh-70px)]">
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-grayUi700 font-normal hover:text-grayUi800 hover:font-semibold delay-200 transition-all "
                >
                  {link.name}
                </a>
              ))}
              <div className="flex  items-center space-x-3 ml-6 mt-24">
                <a
                  href="#"
                  onClick={() => {
                    setShowModal(true);
                    closeMenu();
                  }}
                  className="text-grayUi700 hover:text-grayUi800  pr-4 border-r-2 border-grayUi400"
                >
                  Sign up
                </a>
                <button
                  onClick={setShowModal}
                  className="px-4 py-2 bg-grayUi900 transition-all delay-75 hover:bg-grayUi400 text-white rounded-full"
                >
                  Connect Wallet
                </button>
              </div>
            </nav>
          </div>
          {isMenuOpen && (
            <hr className="border-grayUi50 boder w-full my-8 border absolute bottom-10" />
          )}
        </>
      )}
    </div>
  );
}

export default Header;
