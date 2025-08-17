import React from 'react';
import "./Language.css";

const Language = ({ name, title, languages }) => {
    return (
        <div className="language-container">
            <div className="language-header">
                <div className="language-details">
                    <h1>{name}</h1>
                    <p className="language-subheader">{title}</p>
                    <p className="language-subheader">Languages</p>
                </div>
                <div className="language-divider"></div>
                <div className="language-info">
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>
                                <b>{language.category}: </b>{language.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Language;
