import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./view/HomePage";
import ViewOne from "./view/ViewOne";
import ViewTwo from "./view/ViewTwo";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
       
        
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
      <Routes>
        <Route path="/home-page" element={<Navigate to="/home-page" />} />
        <Route path="/view-one" element={<ViewOne />} />
        <Route path="/view-two" element={<ViewTwo />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
