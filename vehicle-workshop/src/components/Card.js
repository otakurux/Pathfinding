import React from "react";
import './Card.css';
import Icon from "./Icon";

const Card = ( {title, text, icon } ) => {
    return (
        <div className="card-container-primary">
            <div className="card-container-secundary">
                <div className="card-container-icon">
                    <Icon
                        img={icon}
                    />
                </div>
                <div className="card-container-info">
                    <div className="card-container-title">
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <div className="card-container-text">
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;