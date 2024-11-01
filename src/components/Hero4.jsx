import React, { useState, useEffect } from 'react';
import quotesIcon from '../assets/images/quotes.svg'; 
import starIcon from '../assets/images/star.svg';
import emptyStarIcon from '../assets/images/empty-star.svg'; 
import '../index.css';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!res.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await res.json();
        
        // Add the console.log here to check the fetched data
        console.log('Fetched Testimonials:', data);
        
        setTestimonials(data);  // Update state with the fetched testimonials
      } catch (error) {
        setError('Failed to load testimonials. Please try again later.');
        console.error('Error fetching testimonials:', error);  // Log any errors that occur
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="hero4">
      <div className="testimonials">
        <h1>Clients are Loving Our App</h1>
        {error ? <p>{error}</p> : null}
        <div className="testimonial-cards">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={quotesIcon} alt="Quote Icon" className="quote-icon" />
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      starIndex < testimonial.starRating ? (
                        <img key={starIndex} src={starIcon} alt="Star" />
                      ) : (
                        <img key={starIndex} src={emptyStarIcon} alt="Empty Star" />
                      )
                    ))}
                  </div>
                </div>
                <p>{testimonial.comment}</p>
                <div className="testimonial-footer">
                  <img src={testimonial.avatarUrl || 'https://example.com/default-avatar.jpg'} alt={`${testimonial.author}'s avatar`} className="avatar" />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.jobRole}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading testimonials...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
