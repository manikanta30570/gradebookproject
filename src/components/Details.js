// components/Details.js
import React from 'react';

const Details = ({ student }) => {
  return (
    <div className="details">
      <div className="heading-wrapper">
        <h2>Student Details</h2>
      </div>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Ticket's Number:</strong> {student.ticketNumber}</p>
      <p><strong>Ticket's Topic:</strong> {student.ticketTopic}</p>
      <p><strong>Rating Grade:</strong> {student.ratingGrade}</p>
      <p><strong>Exam Grade:</strong> {student.examGrade}</p>
      <p><strong>Comments:</strong> {student.comments}</p>
    </div>
  );
};

export default Details;
