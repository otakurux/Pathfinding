import React from "react";
import './Responsabilities.css';
import Card from "./Card";

const Responsabilities = ({ positive, negative }) => {

    const generateCards = (cards) => {
        if (!cards) return null;
        return cards.map((card, index) => (
            <Card
                key={index}
                title={card.title}
                text={card.text}
                icon={card.icon}
            />
        ));
    };

    return (
        <div className="respon-container-primary">
            <div className="respon-container-secundary">
                <div className="respon-container-positive">
                    <img src={positive.src} alt="img" className="respon-img" />
                    <div className="respon-container-title">{positive.title}</div>
                    <div className="respon-container-cards">
                        {generateCards(positive.cards)}
                    </div>
                </div>
                <div className="respon-container-negative">
                    <img src={negative.src} alt="img" className="respon-img" />
                    <div className="respon-container-title">{negative.title}</div>
                    <div className="respon-container-cards">
                        {generateCards(negative.cards)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Responsabilities;
