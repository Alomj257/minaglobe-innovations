import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavMenu from './components/Nav/NavMenu';
import Home from './Pages/Home/Home';
import AboutUs from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <NavMenu/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
