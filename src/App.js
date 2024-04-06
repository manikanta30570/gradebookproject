// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  const [showStatistics, setShowStatistics] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: "John Paul", ticketNumber: "A123", ticketTopic: "Math", examGrade: 4, ratingGrade: 3, comments: "Need more practice" }, 
    { id: 2, name: "Amrutha", ticketNumber: "B456", ticketTopic: "Science", examGrade: 5, ratingGrade: 4, comments: "Good job...still need to improve" },
   { id: 3, name: "Manikanta", ticketNumber: "C852", ticketTopic: "English", examGrade: 6, ratingGrade: 3, comments: "Good job...still need to improve" },
    { id: 4, name: "Lahari", ticketNumber: "D546", ticketTopic: "Hindi", examGrade: 7, ratingGrade: 4, comments: "Good job...still need to improve" },
    { id: 5, name: "Gowtham", ticketNumber: "C952", ticketTopic: "English", examGrade: 9, ratingGrade: 5, comments: "Good job...still need to improve" },
    { id: 6, name: "Yash", ticketNumber: "D746", ticketTopic: "Hindi", examGrade: 8, ratingGrade: 4, comments: "Good job...still need to improve" },
   { id:7 , name: "Arya", ticketNumber: "A125", ticketTopic: "Math", examGrade: 4, ratingGrade: 2, comments: "Need more practice" },
   { id: 8, name: "Sairam", ticketNumber: "C854", ticketTopic: "English", examGrade: 6, ratingGrade: 3, comments: "Good job...still need to improve" },
    { id: 9, name: "Sharanya", ticketNumber: "D666", ticketTopic: "Hindi", examGrade: 7, ratingGrade: 4, comments: "Good job...still need to improve" },
    { id: 10, name: "Vinay", ticketNumber: "E952", ticketTopic: "English", examGrade: 9, ratingGrade: 5, comments: "Good job...still need to improve" },
    // Add more students as needed
  ]);

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="app">
      <Header />
      <Main students={students} setStudents={setStudents} />
      {showStatistics && <Statistics students={students} />}
      
      <button className="statistics-button" onClick={toggleStatistics}>
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      <Footer />
    </div>
  );
};

export default App;
