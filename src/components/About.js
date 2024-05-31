import React from 'react';
import "./about.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        {/* Replace with your company's story and mission statement. */}
        We are a passionate team dedicated to providing our customers with a
        convenient and enjoyable shopping experience. We strive to offer a wide
        variety of high-quality products at competitive prices, while also
        delivering exceptional customer service.
      </p>
      <section className="team">
        <h2>Meet the Team</h2>
        {/* Add team member profiles with images and descriptions. */}
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <h3>Name</h3>
          <p>
            {/* Short bio of the team member. */}
          </p>
        </div>
        <div className="team-member">
          {/* Repeat for each team member. */}
        </div>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        {/* List your company's core values. */}
        <ul>
          <li>Customer satisfaction</li>
          <li>High-quality products</li>
          <li>Competitive prices</li>
          <li>Excellent customer service</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
