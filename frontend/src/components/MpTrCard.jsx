import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const MpTrCard = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width (including margin)
  useEffect(() => {
    const calculateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".carousel-card");
        if (card) {
          const style = window.getComputedStyle(card);
          const marginRight = parseInt(style.marginRight) || 0;
          setCardWidth(card.offsetWidth + marginRight);
        }
      }
    };

    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, []);

  const maxIndex = courses.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute left-[-16px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft size={16} />
      </button>

      {/* Carousel */}
      <div ref={containerRef} className="flex overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {courses.map((course, index) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id || index}
              className="carousel-card flex w-[500px] shrink-0 mr-4 rounded-lg shadow bg-white hover:shadow-lg transition"
            >
              {/* Left: Image */}
              <div className="w-42 h-42 flex-shrink-0 m-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-100 rounded px-2 py-0.5 mb-2">
                  {course.type}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center space-x-2">
                  {course.collaborators?.map((collab, i) => (
                    <img
                      key={i}
                      src={collab.logo}
                      alt={collab.name}
                      className="w-5 h-5 rounded-full"
                    />
                  ))}
                  {!course.collaborators && course.collaboratorLogo && (
                    <img
                      src={course.collaboratorLogo}
                      alt={course.collaboratorName}
                      className="w-5 h-5 rounded-full"
                    />
                  )}
                  <span className="text-gray-700 text-sm">
                    {course.collaboratorName}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
        className={`absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 ${
          currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

export default MpTrCard;
