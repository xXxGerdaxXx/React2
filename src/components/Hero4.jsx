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
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        
        const data = await res.json();
        console.log('Fetched Testimonials:', data);
        setTestimonials(data);
      } catch (error) {
        setError('Failed to load testimonials. Please try again later.');
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  const renderStars = (rating) => (
    Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src={i < rating ? starIcon : emptyStarIcon} alt={i < rating ? "Star" : "Empty Star"} />
    ))
  );

  return (
    <section className="hero4">
      <div className="testimonials">
        <h1>Clients are Loving Our App</h1>
        {error ? <p>{error}</p> : testimonials.length === 0 ? <p>Loading testimonials...</p> : (
          <div className="testimonial-cards">
            {testimonials.map(({ comment, starRating, avatarUrl, author, jobRole }, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={quotesIcon} alt="Quote Icon" className="quote-icon" />
                  <div className="stars">{renderStars(starRating)}</div>
                </div>
                <p>{comment}</p>
                <div className="testimonial-footer">
                  <img src={avatarUrl || 'https://example.com/default-avatar.jpg'} alt={`${author}'s avatar`} className="avatar" />
                  <div>
                    <h4>{author}</h4>
                    <p>{jobRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
