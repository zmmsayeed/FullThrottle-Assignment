import React from 'react';

// importing components
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import OutlineCard from './Components/OutlineCard';

// importing stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container pt-5">
        <Card> Hi </Card> 
        <OutlineCard>
          <div className="text-center">View All Activities</div>
        </OutlineCard>
      </div>
    </div>
  );
}

export default App;
