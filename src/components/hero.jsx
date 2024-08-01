import Top10 from "../assets/images/top10.png";
import Machine from "../assets/images/machine.png";
import Deco from "../assets/images/deco.png";

function Hero({ setShowModal }) {
  return (
    <div className="max-w-screen-lg overflow-hidden  ml-10 md:mx-16 lg:mx-auto  border-l-2 border-grayUi50 py-12 min-h-screen">
      <div className="my-20 flex gap-y-20 md:gap-y-8 lg:gap-y-0 flex-col lg:flex-row lg:justify-between relative">
        <div className="w-full lg:w-2/3 space-y-10">
          <h1 className="text-t48 md:text-t80 lg:text-t96 font-raleway  font-normal leading-[5rem] md:leading-[6rem] md:tracking-widest lg:tracking-wider md:w-[90%] lg:w-full text-grayUi700 mb-4">
            See the NFT new world
          </h1>
          <p className="text-gray-600 mb-6 md:w-3/5">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, di
          </p>
          <div className="flex items-center gap-x-2">
            <span className="text-grayUi700">Discover Now</span>
            <button
              onClick={setShowModal}
              className="bg-transparent border  hover:animate-bounce  transition-all duration-100 hover-border-grayUi400 border-grayUi700 text-white p-2.5 rounded-full inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full h-96 relative lg:w-1/3">
          <div className="absolute top-4  -right-48 sm:right-16 h-96 sm:h-72 lg:right-0 w-52 lg:w-48 lg:h-72  rounded-full overflow-hidden md:mr-4">
            <img
              src={Top10}
              alt="Stylized NFT art piece, abstract human face in purple and red tones"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="absolute hover:scale-110 transition-all duration-300 -bottom-32 sm:-bottom-16 lg:-bottom-24 left-0 sm:left-24 lg:left-auto sm:right-52 w-64 h-96 sm:h-72 md:w-48 lg:h-72  rounded-full overflow-hidden md:mr-4">
            <img
              src={Machine}
              alt="Stylized NFT art piece, abstract human face in purple and red tones"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-16 right-10 sm:right-72 lg:right-52 w-28 md:w-24   rounded-full overflow-hidden mr-4">
            <img
              src={Deco}
              alt="Stylized NFT art piece, abstract human face in purple and red tones"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
