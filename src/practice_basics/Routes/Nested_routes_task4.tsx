import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function NestedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
        <h2>Dashboard</h2>
        <nav>
          <Link to="/dashboard/profile" style={{ display: 'block', marginBottom: '10px' }}>Profile</Link>
          <Link to="/dashboard/settings" style={{ display: 'block', marginBottom: '10px' }}>Settings</Link>
          <Link to="/dashboard/stats" style={{ display: 'block' }}>Stats</Link>
        </nav>
      </div>

      {/* Content Area - Nested routes render here */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />  {/* Child routes appear here */}
      </div>
    </div>
  );
}

function Profile() {
  return <h1>Profile Page</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

function Stats() {
  return <h1>Statistics Page</h1>;
}

export default NestedRoutes;