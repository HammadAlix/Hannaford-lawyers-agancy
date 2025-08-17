import React, { useState } from 'react';
import './FAQ.css'; // Make sure to create and link the corresponding CSS file
import { assets } from '../../assets/assets,';// Adjust the import path as necessary

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1 className='faq-heading'>Understanding Your Rights Common Legal Questions Answered</h1>
      <div className="faq-item ">
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
          <span>What is the role of an attorney in legal matters?</span>
          <span className="faq-icon">
            {activeIndex === 0 ? <img src={assets.ArrowUp} alt="Up arrow" /> : <img src={assets.ArrowDown} alt="Down arrow" />}
          </span>
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui egestas ornare proin ipsum.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <span>How can I find the right attorney for my case?</span>
          <span className="faq-icon">
            {activeIndex === 1 ? <img src={assets.ArrowUp} alt="Up arrow" /> : <img src={assets.ArrowDown} alt="Down arrow" />}
          </span>
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui egestas ornare proin ipsum.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <span>How can I protect my assets for the future with estate planning?</span>
          <span className="faq-icon">
            {activeIndex === 2 ? <img src={assets.ArrowUp} alt="Up arrow" /> : <img src={assets.ArrowDown} alt="Down arrow" />}
          </span>
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui egestas ornare proin ipsum.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          <span>What are the different types of legal specialties?</span>
          <span className="faq-icon">
            {activeIndex === 3 ? <img src={assets.ArrowUp} alt="Up arrow" /> : <img src={assets.ArrowDown} alt="Down arrow" />}
          </span>
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui egestas ornare proin ipsum.</p>
          </div>
        )}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(4)}>
          <span>How does the repair process work, and what should I expect?</span>
          <span className="faq-icon">
            {activeIndex === 4 ? <img src={assets.ArrowUp} alt="Up arrow" /> : <img src={assets.ArrowDown} alt="Down arrow" />}
          </span>
        </div>
        {activeIndex === 4 && (
          <div className="faq-answer">
            <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue non in. Sagittis elit nullam aliquet ut dis nulla. Cursus vulputate in nulla posuere dui egestas ornare proin ipsum.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
