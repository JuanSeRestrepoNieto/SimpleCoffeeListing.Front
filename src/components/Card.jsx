import React from 'react'
import './Card.css'

const Card = ({ product }) => {
  const { name, image, price, rating, votes, popular, available } = product

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />
        {popular && <span className="card-badge">Popular</span>}
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">{price}</span>
        </div>
        <div className="card-footer">
          <div className="card-rating">
            {rating > 0 ? (
              <>
                <span className="star" role="img" aria-label="Rating">⭐</span>
                <span className="rating-value">{rating}</span>
                <span className="rating-votes">({votes} votes)</span>
              </>
            ) : (
              <span className="no-rating">No ratings</span>
            )}
          </div>
          {!available && <span className="sold-out">Sold out</span>}
        </div>
      </div>
    </div>
  )
}

export default Card
