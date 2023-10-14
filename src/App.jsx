import React from 'react';
import NavBar from './components/navBar';
import FeaturedSection from './components/featuredSection';
import FeaturedItems from './components/featuredItemsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedSection />
      <FeaturedItems />
    </div>
  );
}

export default App;
