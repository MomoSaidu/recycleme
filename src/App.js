
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import RecycleItem from './component/RecycleItem';
import WhereToRecycle from './component/WhereToRecycle';
import About from './component/About';
import Header from './component/Header';
import News from './component/News';
import Home from './component/Home';
import HowToRecycle from './component/HowToRecycle';
import Footer from './component/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Changed Switch to Routes */}
          <Route path="/" element={<Home />} /> {/* Changed component={Home} to element={<Home />} */}
          <Route path="/recycle-item" element={<RecycleItem />} /> {/* Changed component={RecycleItem} to element={<RecycleItem />} */}
          <Route path="/where-to-recycle" element={<WhereToRecycle />} /> {/* Changed component={WhereToRecycle} to element={<WhereToRecycle />} */}
          <Route path="/how-to-recycle" element={<HowToRecycle />} /> {/* Changed component={HowToRecycle} to element={<HowToRecycle />} */}
          <Route path="/about" element={<About />} /> {/* Changed component={About} to element={<About />} */}
          <Route path="/news" element={<News />} /> {/* Changed component={News} to element={<News />} */}
        </Routes> {/* Changed Switch to Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
