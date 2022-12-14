import React from 'react';

export function About(props) {
  return (
    <div>
      <header className="about">
        <div className="about-image">
          <img src="img/header-photo.png" alt="hawaiian islands" />
          <h1 className="about-txt">ABOUT US</h1>
        </div>
      </header>
      <div>
      <hr className="dotted" />
        <section className="about-body">
          <h2>Our Why</h2>
          <p>
            The tourism industry fuels the Hawaiian economy, however, with millions of tourists entering the state each
            year it is critical for the native population and environment that tourists spend their money at local,
            Hawaiian owned businesses. Rather than supporting foreign tourism companies that do not help support the
            local population and disregard the urbanizing effects of their efforts, visitors should be well educated on
            the sustainable, locally-run businesses that are accessible to them on the islands. Unfortunately, this
            information is not readily available as large corporations have taken over the tourism industry. Current
            efforts, such as Shop Small Hawaii, provide resources for visitors to find local businesses on the islands.
            However, sites like this one are typically not interactive, and do not include enough information to be able
            to successfully plan an entire trip around. Our group’s goal is to create a one-stop site that provides all
            of the necessary resources and tools to plan an entirely sustainable trip that supports the Native Hawaiian
            population.
          </p>
        </section>
        <hr className="dotted" />
        <section  className="about-body">
          <h2>Purpose & Impact</h2>
          <p>
            This app will help shorten the inequality gap for Native Hawaiians who unproportionally bear the negative
            effects of tourism in their homeland but only receive a tiny fraction of the tourism income. Although Hawaii
            is well known for its beauty that attracted millions of tourists each year, most tourist weren’t aware of
            their impact on Native Hawaiians, who are struggling to keep up with the cost of living. We want to bring
            awareness of the importance of supporting local because it actually help people living in the community.
          </p>
        </section>
        <hr className="dotted" />
        <section  className="about-body">
          <h2>Contact The Team</h2>
          <p> Elisabeth Helleberg: ehelle@uw.edu</p>
          <p> Fatima Laghari: fatimal1@uw.edu</p>
          <p> Eunji Ahn: eunjia@uw.edu</p>
          <p> Rona Guo: rguo@uw.edu</p>
        </section>
      </div>
    </div>
  );
};
