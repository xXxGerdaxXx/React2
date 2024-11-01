import React from 'react';
import iphoneFeatures from '../assets/images/iphone-features.svg'; // Adjust the path
import vector1 from '../assets/images/vector1.svg'; // Adjust the path
import vector2 from '../assets/images/vector2.svg'; // Adjust the path
import vector3 from '../assets/images/vector3.svg'; // Adjust the path
import vector4 from '../assets/images/vector4.svg'; // Adjust the path
import vector5 from '../assets/images/vector5.svg'; // Adjust the path
import vector6 from '../assets/images/vector6.svg'; // Adjust the path

const FeaturesSection = () => {
  return (
    <section className="container">
      <div className="mockup">
        <img src={iphoneFeatures} alt="App mockup" />
      </div>

      <div className="Features">
        <h2>App Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas Nam luctus facilisis
          ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <img src={vector1} alt="Easy Payments Icon" />
            <div>
              <h3>Easy Payments</h3>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={vector2} alt="Data Security Icon" />
            <div>
              <h3>Data Security</h3>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={vector3} alt="Cost Statistics Icon" />
            <div>
              <h3>Cost Statistics</h3>
              <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={vector4} alt="Support Icon" />
            <div>
              <h3>Support 24/7</h3>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={vector5} alt="Regular Cashback Icon" />
            <div>
              <h3>Regular Cashback</h3>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={vector6} alt="Top Standards Icon" />
            <div>
              <h3>Top Standards</h3>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
