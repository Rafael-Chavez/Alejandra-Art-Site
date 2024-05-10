import React from 'react';

const Artwork = ({ image, title, description, price }) => {
    return (
        <div className="artwork">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            {/* Add buy button or link */}
        </div>
    );
};

export default Artwork;
