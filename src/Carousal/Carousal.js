import React from 'react';
import PropTypes from 'prop-types';

const Carousal = ({
    styleObject,
    prevClick,
    nextClick,
    children,
    leftArrow,
    rightArrow
}) => {
    return (
        <div className="carousal" style={styleObject}>
          <span className="prevBtn"
                onClick={() => prevClick()}>
            <img alt="prev-arrow" src={leftArrow}/>
          </span>
          {children}
          <span className="nextBtn"
                onClick={() => nextClick()}>
            <img alt="next-arrow" src={rightArrow}/>
          </span>
        </div>
    );
};

Carousal.propTypes = {
    styleObject: PropTypes.object.isRequired,
    prevClick: PropTypes.func.isRequired,
    nextClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Carousal;
