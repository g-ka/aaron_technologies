import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Articles from "./components/Articles";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route , Routes , Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />

      <Routes>

        <Route index element={<Home />} />

        <Route path="/" element={<Home />} />

        <Route path="/courses&career" element={<Courses />} />

        <Route path="/about" element={<About />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
