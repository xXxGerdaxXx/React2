import React, { useState, useEffect, useRef } from 'react';
import iphone12Pro from '../assets/images/iPhone 12 Pro.svg';
import iphone12ProMiddle from '../assets/images/iPhone 12 Pro-middle.svg';
import iphone12ProThird from '../assets/images/iPhone 12 Pro-third.svg';
//Använde chatt för att konvertera min gamla HTML till JSX
const HowItWorksSection = () => {
  const images = [iphone12Pro, iphone12ProMiddle, iphone12ProThird];
  const [currentIndex, setCurrentIndex] = useState(0); // Manage the current image index

  const imageRefs = useRef([]); // Ref array to store image DOM nodes
  const prevBtnRef = useRef(null); 
  const nextBtnRef = useRef(null); 

  const updateCarousel = () => {
    if (window.innerWidth < 768) {
      // Mobile behavior: Slide images
      imageRefs.current.forEach((image, index) => {
        image.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    } else {
      // Tablet and Desktop behavior: Scale the centered image
      imageRefs.current.forEach((image, index) => {
        if (index === currentIndex) {
          image.classList.add('center'); // Scale the current image
        } else {
          image.classList.remove('center'); // Remove scaling from others
        }
      });
    }
  };
  
  

  useEffect(() => {
    // Set up event listeners for next and prev buttons
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    nextBtn.addEventListener('click', handleNextClick);
    prevBtn.addEventListener('click', handlePrevClick);

    // Initial update
    updateCarousel();

    // Listen for window resize to adjust carousel behavior
    window.addEventListener('resize', updateCarousel);

    return () => {
      // Clean up event listeners when the component is unmounted
      nextBtn.removeEventListener('click', handleNextClick);
      prevBtn.removeEventListener('click', handlePrevClick);
      window.removeEventListener('resize', updateCarousel);
    };
  }, [currentIndex]); // Dependency array with currentIndex ensures it updates properly

  useEffect(() => {
    updateCarousel(); // Call updateCarousel whenever currentIndex changes
  }, [currentIndex]);

  return (
    <section className="hero2">
      <div className="carousel-container">
        <div className="hero2-content">
          <h1>How Does It Work?</h1>
        </div>

        {/* Carousel Images */}
        <div className="carousel-images">
          {images.map((image, index) => (
            <div
              className="hero2-image"
              key={index}
              ref={(el) => (imageRefs.current[index] = el)} 
            >
              <img src={image} alt={`App showcasing transaction history - ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="description">
          <h2>Latest transaction history</h2>
          <h3>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum.
          </h3>
        </div>
          {/* Descriptions */}
          <div className="description-tablet">
          <h2>Step 3. Transfers to people from your
          contact list</h2>
          <h3>
          Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
          Pellentesque volutpat ligula est. Mattis fermentum, at nec
          lacus.
          </h3>
          </div>
          {/* Descriptions */}
          <div className="description-mobile">
          <h2>Transfers to people from
          your contact list</h2>
          <h3>
          Proin volutpat mollis egestas. Nam luctus facilisis
          ultrices. Pellentesque volutpat ligula est. Mattis
          fermentum, at nec lacus.
          </h3>
          </div>

        {/* Navigation Buttons */}
        <button className="prev" ref={prevBtnRef}>Prev</button>
        <button className="next" ref={nextBtnRef}>Next</button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
