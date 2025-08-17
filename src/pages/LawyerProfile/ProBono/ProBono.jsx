import React from 'react';
import "./ProBono.css";

const ProBono = ({ name, title, proBonoWork }) => {
    return (
        <div className="probono-container">
            <div className="probono-header">
                <div className="probono-details">
                    <h1>{name}</h1>
                    <p className="probono-subheader">{title}</p>
                    <p className="probono-subheader">Pro Bono</p>
                </div>
                <div className="probono-divider"></div>
                <div className="probono-info">
                    <ul>
                        {proBonoWork.map((work, index) => (
                            <li key={index}>{work}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProBono;
