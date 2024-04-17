import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/DaisyuiNavBar';
import HomePage from './containers/HomePage';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;