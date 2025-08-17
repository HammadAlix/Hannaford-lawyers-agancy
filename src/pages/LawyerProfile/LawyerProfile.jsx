import React from 'react';
import { useParams } from 'react-router-dom';
import "./LawyerProfile.css";
import { assets,lawyers_team } from '../../assets/assets,';
import { useState } from 'react';
import ShipMarine from '../../components/Marinetime/ShipMarine/ShipMarine';
import Academic from './Academic/Academic';
import Awards from './Awards/Awards';
import ProBono from './ProBono/ProBono';
import Language from './Language/Language';
import Interests from './Interests/Interests';

const LawyerProfile = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const lawyer = lawyers_team.find(lawyer => lawyer._id === id); // Find the lawyer based on the id

    const [activeTab, setActiveTab] = useState('Academic');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    if (!lawyer) {
        return <div className="profile-container">Lawyer not found</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image">
                    <img
                        src={lawyer.image}
                        alt={lawyer.name}
                    />

                    <div className="profile-actions">
                        <div className="profile-icons">
                            <img src={assets.Lawyer_call} alt="contact icons" />
                            <img src={assets.Lawyer_pdf} alt="contact icons" />
                            <img src={assets.Lawyer_Card} alt="contact icons" />
                            <img src={assets.Lawyer_Email} alt="contact icons" />
                            <img src={assets.Lawyer_Print} alt="contact icons" /></div>
                    </div>
                </div>
                <div className="profile-details">
                    <h1 className="profile-details-contents">{lawyer.name}</h1>
                    <p className="profile-details-contents">{lawyer.specialization}</p>
                    <img className="profile-details-contents" src={assets.ratingStars} alt="" />
                    <p className="profile-details-contents">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex sapien, tincidunt vitae consectetur in, tempus sagittis tortor. Aliquam convallis faucibus ligula, sit amet feugiat ipsum imperdiet in. Pellentesque nec egestas velit. Cras quis tincidunt arcu, sit amet vestibulum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nibh turpis, venenatis quis luctus eu, venenatis eget justo. Duis sed arcu est. Phasellus vitae sem maximus, fermentum tellus vel, ornare urna. Sed sit amet mauris lectus. Nulla vitae quam sed augue bibendum finibus. Nunc euismod convallis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex sapien, tincidunt vitae consectetur in, tempus sagittis tortor. Aliquam convallis faucibus ligula, sit amet feugiat ipsum imperdiet in. Pellentesque nec egestas velit. Cras quis tincidunt arcu, sit amet vestibulum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nibh turpis, venenatis quis luctus eu, venenatis eget justo. Duis sed arcu est. Phasellus vitae sem maximus, fermentum tellus vel, ornare urna. Sed sit amet mauris lectus. Nulla vitae quam sed augue bibendum finibus. Nunc euismod convallis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex sapien, tincidunt vitae consectetur in, tempus sagittis tortor.
                    </p>
                </div>
            </div>
            <div className="profile-tabs">
                <button className={activeTab === 'Academic' ? 'active' : ''} onClick={() => handleTabClick('Academic')}>Academic</button>
                <button className={activeTab === 'Awards' ? 'active' : ''} onClick={() => handleTabClick('Awards')}>Awards</button>
                <button className={activeTab === 'Pro Bono' ? 'active' : ''} onClick={() => handleTabClick('Pro Bono')}>Pro Bono</button>
                <button className={activeTab === 'Languages' ? 'active' : ''} onClick={() => handleTabClick('Languages')}>Languages</button>
                <button className={activeTab === 'Interests' ? 'active' : ''} onClick={() => handleTabClick('Interests')}>Interests</button>
                <button className={activeTab === 'News and Insights' ? 'active' : ''} onClick={() => handleTabClick('News and Insights')}>News and Insights</button>
            </div>
            <div className="profile-content">
                {activeTab === 'Academic' && (
                    <div className="profile-section">
                        <Academic details={lawyer.academicDetails} />
                    </div>
                )}
                {activeTab === 'Awards' && (
                    <div className="profile-section">
                       <Awards awards={lawyer.awards} />
                    </div>
                )}
                {activeTab === 'Pro Bono' && (
                    <div className="profile-section">
                         <ProBono name={lawyer.name} title={lawyer.academicDetails?.title || lawyer.specialization} proBonoWork={lawyer.proBonoWork} />
                    </div>
                )}
                {activeTab === 'Languages' && (
                    <div className="profile-section">
                         <Language name={lawyer.name} title={lawyer.academicDetails?.title || lawyer.specialization} languages={lawyer.languages} />
                    </div>
                )}
                {activeTab === 'Interests' && (
                   <Interests name={lawyer.name} title={lawyer.academicDetails?.title || lawyer.specialization} interests={lawyer.interests} />
                )}
                {activeTab === 'News and Insights' && (
                    <div className="profile-section">
                        <ShipMarine />
                    </div>
                )}
            </div>
        </div>
    );
}

export default LawyerProfile;
