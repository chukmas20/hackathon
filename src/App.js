import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Register from './components/Register';

function App() {
  return (
    <>
      <Router>
          <Header  />
         <Routes>
              <Route path="/"  element={<HomeBody />}  />
              <Route path="/contact"  element={<ContactPage />}  />
              <Route path="/register"  element={<Register />}  />
         </Routes>
         <Footer/>
      </Router>
    </>
   
  );
}

export default App;
