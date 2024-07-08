/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const updateCarousel = () => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  return (
    
        <div className="max-w-screen-lg mx-auto py-10">
    <div className="relative overflow-hidden">
        <div ref={carouselRef} className="carousel-inner flex transition-transform duration-500 ease-in-out">
          {items.map((item, index) => (
            <div key={index} className="carousel-item min-w-full">
              <div className="p-4">
                <div className={`bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center`}>
                  <div className="md:w-1/2 md:pr-4 ml-24">
                    <h2 className="text-4xl text-white font-bold">{item.title}</h2>
                    <p className="mt-2 text-white">{item.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <img src={item.image} alt={item.title} className="ml-24" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-gray-600 transition-colors duration-300"
        >
          Ant
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-gray-600 transition-colors duration-300"
        >
          Sig
        </button>
      </div>
    </div>
  );
};

export default Carousel;
