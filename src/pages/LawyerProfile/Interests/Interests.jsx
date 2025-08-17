import React from 'react';
import "./Interests.css";

const Interests = ({ name, title, interests }) => {
    return (
        <div className="Interests-container">
            <div className="Interests-header">
                <div className="Interests-details">
                    <h1>{name}</h1>
                    <p className="Interests-subheader">{title}</p>
                    <p className="Interests-subheader">Interests</p>
                </div>
                <div className="Interests-divider"></div>
                <div className="Interests-info">
                    <ul>
                        {interests.map((interest, index) => (
                            <li key={index}>
                                <b>{interest.category}: </b>{interest.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Interests;
