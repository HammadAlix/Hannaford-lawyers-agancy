import React from 'react';
import "./OurTeam.css";
import { lawyers_team } from '../../assets/assets,';
 import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div className='our-team'>
            <div className="team-header">
                <h1> Meet Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit et accumsan imperdiet.egestas ornare proin ipsum. Suspendisse diam turpis dui aliquam. </p>

            </div><div className="team-grid-container">
                {lawyers_team.map((lawyer) => (
                    <div className="team-grid" key={lawyer._id}>
                        <Link className='link' to={`/profile/${lawyer._id}` }>
                        <div className="flex-grid">
                            <img src={lawyer.image} alt={lawyer.name} />
                            <h2>{lawyer.name}</h2>
                            <p>{lawyer.specialization}</p>
                            <p>{lawyer.experience} of experience</p>
                            <img  className="linkedin-icon"src={lawyer.Icon} alt="LinkedIn icon" />
                            </div>
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam;
