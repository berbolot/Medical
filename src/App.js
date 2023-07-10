import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
// import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import ServicePage from "./components/ServiceSection/ServiceSection";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
// import AuthProvider from './context/AuthProvider';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Appointment from "./components/Appointment/Appointment";
import Galery from "./components/Galery/Galery";

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/galery" element={<Galery />}></Route>

        <Route path="/services" element={<ServicePage />} />

        <Route path="about" element={<About />} />
        {/* <PrivateRoute path="/service/:serviceId">
            <ServiceDetails />
          </PrivateRoute> */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

// https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-googlermridul
// https://docteryyy.web.app/
