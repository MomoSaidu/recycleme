import React from 'react';

/**
 * Component displaying information about RecycleNow, including mission,
 * team details, services, and contact information.
 */
function About() {
  // Style for images to ensure responsiveness and aesthetics
  const imageStyle = {
    maxWidth: '100%', 
    maxHeight: '300px', 
    height: 'auto', 
    borderRadius: '8px', 
  };

  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about-section">
        <h2 className="green-text body-text">About Us</h2>
        <div className="flex-container">
          <div className="image-container">
            <img
              src="/AboutUs.jpg"
              alt="About Us"
              className="about-image"
              style={imageStyle}
            />
          </div>
          <div className="text-container">
            <p className="body-text">
              Welcome to our website! We are RecycleNow. Our mission is dedicated
              to developing and delivering high-quality, cost-effective solid waste
              reduction, recycling, and refuse programs that provide and promote
              sustainability in our communities.
            </p>
            <p className="body-text">
              At RecycleNow, we believe in the betterment of our future on this
              planet. Our team is dedicated to ensuring everyone plays their part
              in a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h3 className="green-text body-text">Our Team</h3>
        <div className="flex-container">
          <div className="image-container">
            <img
              src="/OurTeam.jpg"
              alt="Team Member 1"
              className="team-image"
              style={imageStyle}
            />
          </div>
          <div className="text-container">
            <p className="body-text">
              Meet the talented individuals who make up our team and contribute to
              the success of RecycleNow.
            </p>
            {/* Add more team member details here */}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="services-section">
        <h3 className="green-text body-text">What We Do</h3>
        <div className="flex-container">
          <div className="image-container">
            <img
              src="/WhatWeDo.jpg"
              alt="What We Do"
              className="services-image"
              style={imageStyle}
            />
          </div>
          <div className="text-container">
            <p className="body-text">
              RecycleNow provides solid waste services for Irish residents and
              businesses. RecycleNow has contracted with Republic Services for the
              collection, transfer, and disposal of residential and commercial
              garbage, recycling, and organics for the processing of residential and
              commercial recyclable materials.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h3 className="green-text body-text">Contact Us</h3>
        <div className="flex-container">
          <div className="image-container">
            <img
              src="/ContactUs.jpg"
              alt="Contact Us"
              className="contact-image"
              style={imageStyle}
            />
          </div>
          <div className="text-container">
            <p className="body-text">
              If you have any questions or would like to get in touch with us, feel
              free to contact us at{' '}
              <a href="mailto:RecycleNow@..." className="contact-link">
                RecycleNow@...
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
