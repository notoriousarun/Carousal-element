import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ record }) => {
    const { id, fromCity, toCity, date, pnr, mode, purpose } = record;
    return (
        <div id={`card-${id}`} className="card">
            <div className="details">
              <span>From</span>
              <span>{fromCity}</span>
            </div>
            <div className="details">
              <span>To</span>
              <span>{toCity}</span>
            </div>
            <div className="details">
              <span>Date</span>
              <span>{date}</span>
            </div>
            <div className="details">
              <span>PNR</span>
              <span>{pnr}</span>
            </div>
            <div className="details">
              <span>Mode</span>
              <span>{mode}</span>
            </div>
            <div className="details">
              <span>Purpose</span>
              <span>{purpose}</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    fromCity: PropTypes.string,
    toCity: PropTypes.string,
    date: PropTypes.string,
    pnr: PropTypes.number,
    mode: PropTypes.string,
    purpose: PropTypes.string
};

export default Card;
