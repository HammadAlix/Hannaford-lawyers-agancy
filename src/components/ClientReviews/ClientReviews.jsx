import React from 'react'
import "./ClientReviews.css"
import { assets } from '../../assets/assets,';

const ClientReviews = () => {
    return (
        <div className="client-reviews-section">
            <div className="client-reviews-title">
                <h1>Client Reviews and Success Stories</h1>
            </div>
            <div className="client-reviews">
                <div className="client-review">
                    <div className="client-info">
                        <img src={assets.Fernando} alt="Fernando Luiz" className="client-avatar" />
                        <div className="client-details">
                            <h3>Fernando Luiz</h3>
                            <p>Vice president</p>
                        </div>
                    </div>
                    <p className="review-text">
                        "Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit ac et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue elit nullam."
                    </p>
                    <div className="review-rating">
                        <img src={assets.ratingStars} alt="star" className="star" />
                    </div>
                </div>
                <div className="client-review">
                    <div className="client-info">
                        <img src={assets.annie} alt="Bernandha Annie" className="client-avatar" />
                        <div className="client-details">
                            <h3>Bernandha Annie</h3>
                            <p>Vice president</p>
                        </div>
                    </div>
                    <p className="review-text">
                        "Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit ac et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue elit nullam."
                    </p>
                    <div className="review-rating">
                        <img src={assets.ratingStars} alt="star" className="star" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientReviews