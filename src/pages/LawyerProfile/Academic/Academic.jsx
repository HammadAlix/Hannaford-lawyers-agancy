import React from 'react';
import "./Academic.css";

const Academic = ({ details }) => {
    return (
        <div className="academic-container">
            <div className="academic-header">
                <div className="academic-details">
                    <h1>{details.name}</h1>
                    <p className="academic-subheader">{details.title}</p>
                    <p className="academic-subheader">Academic</p>
                </div>
                <div className="academic-divider"></div>
                <div className="academic-info">
                    <ul>
                        {details.degrees.map((degree, index) => (
                            <li key={index}>{degree}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Academic;
