// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecycleItem from './component/RecycleItem';
import WhereToRecycle from './component/WhereToRecycle';
import About from './component/About';
import Header from './component/Header';
import News from './component/News';
import Home from './component/Home';
import Footer from './component/Footer';
import Shop from './component/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycle-item" element={<RecycleItem />} />
            <Route path="/where-to-recycle" element={<WhereToRecycle />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
