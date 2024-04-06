import React, { useState } from 'react';
import Student from './Student';
import Details from './Details';
import './Main.css';

const Main = ({ students }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [sortedStudents, setSortedStudents] = useState([...students]);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState('asc');
  const [finalGradeOrder, setFinalGradeOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedRow(null);
  };

  const sortAlphabetically = () => {
    const sorted = [...sortedStudents].sort((a, b) => {
      const order = alphabeticalOrder === 'asc' ? 1 : -1;
      return order * a.name.localeCompare(b.name);
    });
    setSortedStudents(sorted);
    setAlphabeticalOrder(alphabeticalOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortFinalGrade = () => {
    const sorted = [...sortedStudents].sort((a, b) => {
      const finalGradeA = 0.6 * a.examGrade + 0.4 * a.ratingGrade;
      const finalGradeB = 0.6 * b.examGrade + 0.4 * b.ratingGrade;
      const order = finalGradeOrder === 'asc' ? 1 : -1;
      return order * (finalGradeA - finalGradeB);
    });
    setSortedStudents(sorted);
    setFinalGradeOrder(finalGradeOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    // Filter students based on search query
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(value.toLowerCase())
    );
    // Sort filtered students alphabetically
    const sorted = [...filteredStudents].sort((a, b) => {
      const order = alphabeticalOrder === 'asc' ? 1 : -1;
      return order * a.name.localeCompare(b.name);
    });
    setSortedStudents(sorted);
  };

  return (
    <div className="main">
      <div className="sort-buttons">
        <div className="sort-button">
          <button onClick={sortAlphabetically}>
            {`Sort by Alphabetically ${alphabeticalOrder === 'asc' ? 'Ascending' : 'Descending'}`}
          </button>
        </div>
        <div className="sort-button">
          <button onClick={sortFinalGrade}>
            {`Sort by Final Grade ${finalGradeOrder === 'asc' ? 'Ascending' : 'Descending'}`}
          </button>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ticket's Number</th>
              <th>Ticket's Topic</th>
              <th>Rating Grade</th>
              <th>Exam Grade</th>
              <th>Final Grade</th>
              <th>Status</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, index) => (
              <Student
                key={student.id}
                index={index}
                student={student}
                selected={selectedRow === index}
                handleRowClick={handleRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      {showDetails && (
        <div className="details-container" onClick={handleCloseDetails}>
          <Details student={sortedStudents[selectedRow]} />
        </div>
      )}
    </div>
  );
};

export default Main;
