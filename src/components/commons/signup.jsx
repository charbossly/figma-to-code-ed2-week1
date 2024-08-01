import Logo from "../../assets/images/logo.png";

function SignupForm({ setShowModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowModal(false);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative font-raleway">
      <div
        className="absolute -top-10 -right-4 cursor-pointer border-2 rounded-full  p-2 px-3 text-sm"
        onClick={handleClose}
      >
        X
      </div>
      <img
        src={Logo}
        alt=""
        className="w-16 h-16 object-cover rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-grayUi700 text-white py-2 px-4 rounded-md"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
