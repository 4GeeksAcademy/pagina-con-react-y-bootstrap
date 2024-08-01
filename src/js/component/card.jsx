import React from 'react';

const Card = ({ image, title, text, url }) => {
    return (
      <div className="col-lg-3 col-md-4 mb-2 pb-4 pt-4">
        <div className="card h-100">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body text-center">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
            <a className="btn btn-primary btn-sm" href={url} role="button">VER MÁS</a>
          </div>
        </div>
      </div>
    );
};

export default Card;
