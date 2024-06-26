import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import nonActiveIndicator from "../../assets/non-active-indicator.svg";
import activeIndicator from "../../assets/active-indicator.svg";

const Carousel = ({ bgImages, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bgImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveCarousel(true);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bgImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveCarousel(true);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setActiveCarousel(true);
  };

  return (
    <div className="max-w-[1366px] h-[462px] w-full m-auto relative">
      <div
        className={`w-full h-full bg-cover bg-center bg-no-repeat shadow-inset`}
        style={{
          backgroundImage: `url(${bgImages[currentIndex]})`,
        }}
      >
        <div className="absolute w-[300px] md:w-[638px] top-[20%] left-[10%] min-[400px]:left-[18%] min-[500px]:left-[25%] md:left-[10%] text-center md:text-left">
          <div className="text-white text-sm md:text-lg leading-[34px] tracking-[0.75px]">
            {title}
          </div>
          <div className="text-white text-[32px] md:text-[48px] leading-[48px] md:leading-[70px] tracking-[1px]">
            {subtitle}
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="block absolute top-[45%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="block absolute top-[45%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-4 left-[35%] min-[400px]:left-[37%] min-[500px]:left-[40%] md:left-[47%] flex py-2 z-50">
        {bgImages.map((image, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
            className="cursor-pointer"
          >
            <div
              className={`h-2 bg-contain bg-center bg-no-repeat ${
                activeCarousel && currentIndex === slideIndex
                  ? "bg-[image:var(--active-indicator)] w-16"
                  : "bg-[image:var(--non-active-indicator)] w-6"
              }`}
              style={{
                "--active-indicator": `url(${activeIndicator})`,
                "--non-active-indicator": `url(${nonActiveIndicator})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
