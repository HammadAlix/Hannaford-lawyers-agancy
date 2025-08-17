import React from 'react';
import "./BottomSide.css";

const BottomSide = (props) => {
    return (
        <div className="container">
            <div className="sections">
                <div className="left-section">
                    <p>{props.leftSectionText}</p>
                </div>
                <div className="right-section">
                    <p>{props.rightSectionIntro}</p>
                    <p>{props.rightSectionIntro2}</p>
                    <ul>
                        {props.rightSectionList1.map((item, index) => (
                            <li key={index} className='border-bottom'>{item}</li>
                        ))}
                    </ul>
                    <p>{props.rightSectionIntro3}</p>
                    <ul>
                        {props.rightSectionList2.map((item, index) => (
                            <li key={index} className='border-bottom'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="contact-button">{props.buttonText}</button>
        </div>
    );
}

export default BottomSide;
