// components/Statistics.js
import React from 'react';

const Statistics = ({ students }) => {
  const passedStudents = students.filter(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade) >= 4);
  const failedStudents = students.filter(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade) < 4);
  const averageGrade = students.reduce((total, student) => total + (0.6 * student.examGrade + 0.4 * student.ratingGrade), 0) / students.length;
  const maxGrade = Math.max(...students.map(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade)));
  const minGrade = Math.min(...students.map(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade)));

  const headerStyle = {
    textAlign: 'center', // Centering the header text
    backgroundColor: '#FFFF00', // Background color for the header
    padding: '10px', // Padding around the header
    borderRadius: '8px', // Rounded corners for the header
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Shadow effect for the header
  };

  const labelStyle = {
    fontWeight: 'bold', // Bold styling for labels
  };

  return (
    <div className="statistics-container">
      <h2 style={headerStyle}>Statistics</h2>
      <div className="statistics">
        <p><span style={labelStyle}>Number of passed students:</span> {passedStudents.length}</p>
        <p><span style={labelStyle}>Number of failed students:</span> {failedStudents.length}</p>
        <p><span style={labelStyle}>Average grade:</span> {averageGrade.toFixed(2)}</p>
        <p><span style={labelStyle}>Max grade:</span> {maxGrade}</p>
        <p><span style={labelStyle}>Min grade:</span> {minGrade}</p>
        <p><span style={labelStyle}>Total number of students:</span> {students.length}</p>
      </div>
    </div>
  );
};

export default Statistics;
