import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import './App.css';

// Provide router context to the navigation and page components below.
const App = () => {
  return (
    <Router>
      
        <MainRouter />
     
    </Router>
  );
};
export default App;