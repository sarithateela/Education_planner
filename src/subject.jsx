import React from 'react';
import './subject.css';

const SubjectDisplay = ({ subject, hours, onIncrement, onDecrement }) => {
  return (
    <div className="subject-row">
      <span>{subject} - {hours}</span>
      <span >
        <button className="remove" onClick={onDecrement} >-</button>
        <button  className="add" onClick={onIncrement} >+</button>
      </span>
    </div>
  );
};

export default SubjectDisplay;