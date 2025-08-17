import React from 'react';
import PropTypes from 'prop-types';
import "./BottomAbout.css";  // Ensure this import is present if using the styles defined earlier
import { assets } from '../../../assets/assets,';

const BottomAbout = ({
  headerTitle,
  headerParagraph,
  sections,
  clientImage,
  clientName,
  clientPosition,
  clientReview,
  reviewRating
}) => {
  return (
      <div className="about-us-bottom">
          <header className="header-aboutus">
              <h1 className='about-us-heading'>{headerTitle}</h1>
              <p className="about-us-para">{headerParagraph}</p>
          </header>

          <section className="content">
              <div className="main-content">
                  {sections.map((section, index) => (
                      <div key={index}>
                          <h2>{section.title}</h2>
                          <p className="about-us-para">{section.text}</p>
                      </div>
                  ))}
                  <br /> <br />
                  <p className="about-us-para">
                      Contact us today to discuss your maritime legal needs and experience firsthand how Hannaford Turner can guide you on a successful voyage through the legal waters of the maritime industry.
                  </p>
              </div>

              <aside className="sidebar">
                  <div className="client-review">
                      <div className="client-info">
                          <img src={clientImage} alt={clientName} className="client-avatar" />
                          <div className="client-details">
                              <h3>{clientName}</h3>
                              <p>{clientPosition}</p>
                          </div>
                      </div>
                      <p className="review-text">{clientReview}</p>
                      <div className="review-rating">
                          <img src={reviewRating} alt="star" className="star" />
                      </div>
                  </div>
              </aside>
          </section>
      </div>
  );
};

BottomAbout.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerParagraph: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
      PropTypes.shape({
          title: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
      })
  ).isRequired,
  clientImage: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  clientPosition: PropTypes.string.isRequired,
  clientReview: PropTypes.string.isRequired,
  reviewRating: PropTypes.string.isRequired
};

export default BottomAbout;