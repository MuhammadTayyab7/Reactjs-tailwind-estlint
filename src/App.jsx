import './App.css';
// import { Routes, Route } from 'react-router-dom';

//Page imports
import Home from './pages/Home';

import Header from './layouts/Header/index';
// import Footer from './layouts/Footer/index'
function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Footer/> */}
    </>
  );
}

export default App;
