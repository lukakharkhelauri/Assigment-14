import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from '../modules/MainBox.module.scss';

const PledgeBox = ({ title, amount, description, left, onSelect, stock }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isContinueVisible, setIsContinueVisible] = useState(false);

  const handleSelect = (event) => {
    event.stopPropagation();

    if (stock > 0) {
      setIsSelected(!isSelected);
      onSelect(!isSelected, title);
      setIsContinueVisible(!isSelected);
    }
  };

  const handleContinueClick = () => {
    window.location.reload();
  };

  return (
    <div
      className={`${classes.pledgeboxmodal} ${isSelected && classes.selectedPledge}`}
      onClick={handleSelect}
    >
      <h4>{title}</h4>
      <p>{amount}</p>
      <h6 className={classes.modalDescription}>{description}</h6>
      <h4>{left} Left</h4>

      {isContinueVisible && (
        <button onClick={handleContinueClick}>Continue</button>
      )}
    </div>
  );
};

PledgeBox.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  stock: PropTypes.number.isRequired,
};

export default PledgeBox;