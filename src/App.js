import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      
      <Sidebar />
      <main>
        <div className="main-inner">
          <Feed/>
        </div>
      </main>
    </div>
  );
}

export default App;
