import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function HomePage(props) {
  return (
    <div>
      <header className="index">
        <div id="header-image">
          <img src="img/header-photo.png" alt="Hawaiian Island" />
          <h1 id="header-txt">
            [LOGO]
          </h1>
        </div>
      </header>

      <main>

        <hr className="dotted" />

        <div className="homepage">
          <h2>WHAT IS SHOP LOCAL HAWAI'I?</h2>
          <p>
            The tourism industry fuels the Hawaiian economy, however, with millions of tourists entering the state each year
            it is critical for the native population and environment that tourists spend their money at local, Hawaiian
            owned
            businesses. Rather than supporting foreign tourism companies that do not help support the local population and
            disregard the urbanizing effects of their efforts, visitors should be well educated on the sustainable,
            locally-run businesses that are accessible to them on the islands. Our mission is to provide tourists with the
            resources to plan their next trip to Hawai'i around locally-owned businesses, in order to support the indegenous
            population. Make your next visit to Hawai'i sustainable and supportive of the local population by exploring our
            page for information about the best native Hawaiian run restaurants, accomodations, and
            excursions available on each island.
          </p>

          <hr className="dotted" />

          <h2>WHICH ISLAND SHOULD YOU VISIT?</h2>
          <p>Take our quiz to find out and start planning your next Hawai'i trip!</p>
          <div class="map-quiz">
            <img src="https://www.kindpng.com/picc/m/276-2765159_dronegenuity-hawaiian-islands-hd-png-download.png"
              alt="Dronegenuity - Hawaiian Islands, HD Png Download@kindpng.com" />
            <div class="start-qz">
              <a href="#">START QUIZ!</a>
            </div>
          </div>

          <hr className="dotted" />

          <h2>LEARN MORE</h2>
          <p>Discover locally run restaurants, hotels, and activities across the different Hawaiian islands!</p>

          <div className="lm-container">
            <div className="lm-wrap">

              <div className="lm-card">
                <div className="lm-card-img">
                  <img src="img/index-cards/restaurant-card.jpg" alt="Hotel" />
                </div>
                <div className="lm-card-txt">
                  <a href="dinning.html">DINING</a>
                </div>
              </div>

              <div className="lm-card">
                <div className="lm-card-img">
                  <img src="img/index-cards/hotel-card.jpg" alt="Hotel" />
                </div>
                <div className="lm-card-txt">
                  <a href="hotels.html">HOTELS</a>
                </div>
              </div>

              <div className="lm-card">
                <div className="lm-card-img">
                  <img src="img/index-cards/activity-card.jpg" alt="Hotel" />
                </div>
                <div className="lm-card-txt">
                  <a href="activities.html">ACTIVITIES</a>
                </div>
              </div>
            </div>
          </div>

          <hr className="dotted" />

          <h2>REGISTER YOUR BUSINESS</h2>
          <p>Are you a native Hawaiian business owner, and don't see your business on our page? Register your business now
            so
            we can promote it!</p>
          <div className="button-container">
            <a href="forms.html" className="register-button">REGISTER NOW</a>
          </div>
        </div>
      </main>
    </div>
  );
};
