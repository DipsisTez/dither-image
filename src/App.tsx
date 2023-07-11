import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './componets/Header';
import ImageEditor from './pages/ImageEditor';
import Footer from './componets/Footer';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ImageEditor />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
