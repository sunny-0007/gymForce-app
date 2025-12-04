import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Plans from "./components/Plans.jsx";
import Footer from "./components/Footer.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";  // NEW

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Plans />
              <Footer />
            </>
          }
        />

        {/* Registration Page */}
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}
