import React, { useState, useEffect } from 'react';
import vector from '../assets/images/Vector.svg';
import vectorgreen from '../assets/images/Vectorgreen.svg';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCommentAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// Använde chatt för att konvertera min gamla HTML och JS
const FAQSection = () => {
  const [faqs, setFaqs] = useState([]); 
  const [error, setError] = useState(null); 
  const [openQuestion, setOpenQuestion] = useState(null); 

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq'); 
        if (!res.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await res.json();
        console.log('Fetched FAQs:', data); 
        setFaqs(data); 
      } catch (error) {
        setError('Failed to load FAQs. Please try again later.');
        console.error('Error fetching FAQs:', error); 
      }
    };
  
    fetchFAQs(); 
  }, []); 
  

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); 
  };

  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-text">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>

        <div className="contact-boxes">
          <div className="contact-box">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <p>Still have questions?</p>
            <a href="index2.html">
              Contact us <img src={vector} alt="Arrow" />
            </a>
          </div>

          <div className="contact-box2">
            <div className="contact-icon2">
              <FontAwesomeIcon icon={faCommentAlt} />
            </div>
            <p>Don't like phone calls?</p>
            <a href="index2.html">
              Contact us <img src={vectorgreen} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* Handle error case */}
      {error ? <p>{error}</p> : null}

  
      <div className="questions-list">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className="questions-item">
              <div className="question-header">
                <h3>{faq.title}</h3>
                <button
                  className={`more-button ${openQuestion === index ? 'active' : ''}`}
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={openQuestion === index ? 'true' : 'false'}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`chevron-icon ${openQuestion === index ? 'rotate' : ''}`}
                  />
                </button>
              </div>
              
              <div className={`questions-item-content ${openQuestion === index ? 'show-answer' : ''}`}>
                <p>{faq.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading FAQs...</p>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
