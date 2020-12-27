import React from 'react';
import './Card.css';

const Card = () => {
            return (
                <>
                    <div className="card"> 
                        <div className="card-container outline card-color-yellow">
                            <div className="cards">
                                <span className="card-header">
                                    <span className="heading-title">
                                        <h2></h2>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="card-container outline-2 card-color-blue">
                            <div className="cards">
                                <span className="card-header">
                                    <span className="heading-title">
                                        <h2></h2>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="card-container outline card-color-yellow">
                            <div className="cards">
                                <span className="card-header">
                                    <span className="heading-title">
                                        <h2></h2>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
}

export default Card;