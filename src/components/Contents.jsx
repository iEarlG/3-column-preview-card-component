import React from 'react';

import sedans from '../assets/images/icon-sedans.svg';
import suvs from '../assets/images/icon-suvs.svg';
import luxury from '../assets/images/icon-luxury.svg';

const Contents = () => {
  return (
    <main>
      <div className="container">
        <div className="content sedans">
          <img src={sedans} alt="sedans" className="sedans-img" />

          <h2>Sedans</h2>
          <p>Choose a sedan for its affordability and excellent fuel economy. 
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="sedans-btn">Learn more</button>
        </div>

        <div className="content suvs">
          <img src={suvs} alt="suvs" className="suvs-img" />

          <h2>SUVs</h2>
          <p>Take an SUV for its spacious interior, power, and versatility. 
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="suvs-btn">Learn more</button>
        </div>

        <div className="content luxury">
          <img src={luxury} alt="luxury" className="luxury-img" />

          <h2>Luxury</h2>
          <p>Cruise in the best car brands without the bloated prices. 
            Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="luxury-btn">Learn more</button>
        </div>
    </div>
    </main>
  );
};

export default Contents;