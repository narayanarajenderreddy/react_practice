// App.jsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Login() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const navigate = useNavigate();  // ✅ Works! Inside BrowserRouter

  return (
    <div>
      {/* Navigation */}
      <nav style={{ padding: '20px', background: '#333' }}>
        <button onClick={() => navigate('/')} style={{ marginRight: '10px' }}>
          Home
        </button>
        <button onClick={() => navigate('/about')} style={{ marginRight: '10px' }}>
          About
        </button>
        <button onClick={() => navigate('/contact')}>
          Contact
        </button>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();  // ✅ Works here

  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  const navigate = useNavigate();  // ✅ Works here

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Login;