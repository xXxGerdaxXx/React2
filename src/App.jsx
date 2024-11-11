import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Contact from './components/Contact';
import MapAndCenters from './components/MapAndCenters';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import BrandsSection from './components/Brands';
import FeaturesSection from './components/AppFeatures';
import HowItWorksSection from './components/Hero2';
import Hero3Section from './components/Hero3';
import TestimonialsSection from './components/Hero4';
import FAQSection from './components/Faq';
import Subscribe from './components/Subscribe';
import ContactButton from './components/ContactButton';
import ContactBoxesTablet from './components/ContactBoxesTablet';

import Footer2 from './components/Footer2';

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            
            <Route 
              path="/" 
              element={
                <>
                <Header isContactPage={false} /> 
                  <HeroSection />
                  <BrandsSection />
                  <FeaturesSection />
                  <HowItWorksSection />
                  <Hero3Section />
                  <TestimonialsSection />
                  <FAQSection />
                  <ContactButton/>
                  <ContactBoxesTablet/>
                  <Subscribe />
                  <Footer />
                </>
              } 
            />

            
            <Route 
              path="/contact" 
              element={
                <>
                  <Header isContactPage={true} /> 
                  <Breadcrumb />
                  <Contact />
                  <MapAndCenters />
                  <Footer2 />
                </>
              } 
            />
          </Routes>
        </main>
        
        
      </div>
    </Router>
  );
}

export default App;

