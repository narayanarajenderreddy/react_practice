// App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function BasicRoutes() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{ padding: '20px', background: '#333', color: 'white' }}>
        <Link to="/" style={{ marginRight: '20px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '20px', color: 'white' }}>About</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default BasicRoutes;