// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import RecycleItem from './component/RecycleItem';
import WhereToRecycle from './component/WhereToRecycle';
import About from './component/About';
import Header from './component/Header';
import News from './component/News';
import Home from './component/Home';
import Footer from './component/Footer';
import Shop from './component/Shop';
import './App.css';

/**
 * Main App component that sets up the React Router and renders different
 * components based on the route.
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component for navigation */}
        <Header />

        {/* Main content container */}
        <div className="page-container">
          {/* Define routes and corresponding components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycle-item" element={<RecycleItem />} />
            <Route path="/where-to-recycle" element={<WhereToRecycle />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>

        {/* Footer component for additional information or links */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
