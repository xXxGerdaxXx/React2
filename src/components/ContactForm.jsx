import React, { useState } from 'react';
import '../index.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    specialist: 'doctor1',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOk = () => {
    setSubmitted(false);
    setFormData({
      fullname: '',
      email: '',
      specialist: 'doctor1',
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const newErrors = {}; 

    // kod från Hans videolektion
    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!namePattern.test(formData.fullname.trim())) {
      newErrors.fullname = "Please enter at least two words in the name field.";
    }

   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address with at least two letters.";
    }

   
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    // kod från chat
    console.log('Form Data:', JSON.stringify(formData));

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorText = await res.text(); 
      console.error('Error:', errorText); 
    } else {
      console.log('Form successfully submitted');
      setSubmitted(true);
      setFormData({
        fullname: '',
        email: '',
        specialist: 'doctor1',
      });
    }
  };

  if (submitted) {
    return (
      <div className="informationbox">
        <h1>Din bokning är registrerad!</h1>
        <p>Vi kommer att kontakta dig så snart som möjligt.</p>
        <button className="btn-green" onClick={handleOk}>OK</button>
      </div>
    );
  }

  return (
    <div className="consultation-form-index2">
      <h2>Get Online Consultation</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="fullname-index2">Full name</label>
        <input
          type="text"
          id="fullname-index2"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
        {errors.fullname && <p className="error-text">{errors.fullname}</p>}

        <label htmlFor="email-index2">Email address</label>
        <input
          type="email"
          id="email-index2"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label htmlFor="specialist-index2">Specialist</label>
        <select
          id="specialist-index2"
          name="specialist"
          value={formData.specialist}
          onChange={handleChange}
          required
        >
          <option value="doctor1">Doctor: William Hartnell</option>
          <option value="doctor2">Doctor: Patrick Troughton</option>
          <option value="doctor3">Doctor: Jon Pertwee</option>
          <option value="doctor4">Doctor: Tom Baker</option>
          <option value="doctor5">Doctor: Peter Davison</option>
          <option value="doctor6">Doctor: Colin Baker</option>
          <option value="doctor7">Doctor: Sylvester McCoy</option>
          <option value="doctor8">Doctor: Paul McGann</option>
        </select>

        <button type="submit" className="btn-primary-index2">Make an appointment</button>
      </form>
    </div>
  );
}

export default ContactForm;
