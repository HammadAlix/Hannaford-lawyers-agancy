import React from 'react';
import "./Awards.css";

const Awards = ({ awards }) => {
    return (
        <div className="achievements-container">
            <ul className="achievements-list">
                {awards.map((award, index) => (
                    <li key={index}>{award}</li>
                ))}
            </ul>
        </div>
    );
};

export default Awards;
