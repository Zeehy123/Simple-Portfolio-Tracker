import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Testimonials from "./Components/Testimonials/Testimonials";

import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Features />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />

          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
