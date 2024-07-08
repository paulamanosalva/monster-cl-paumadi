/* eslint-disable react/prop-types */
const ScrollButton = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className=" text-white text-center text-lg rounded-full focus:outline-none hover:text-lime-400 transition-colors duration-300 mt-6"
    >
      Descubre tu Monster
      <svg
        className="w-4 h-4 ml-2 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollButton;
