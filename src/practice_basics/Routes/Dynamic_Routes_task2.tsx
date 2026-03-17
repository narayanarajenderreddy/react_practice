import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function DynamicRoutes() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', background: '#eee' }}>
        <Link to="/user/1" style={{ marginRight: '20px' }}>User 1</Link>
        <Link to="/user/2" style={{ marginRight: '20px' }}>User 2</Link>
        <Link to="/user/3">User 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Select a user</h1>;
}

function UserProfile() {
  const { userId } = useParams();  // Get userId from URL
  console.log("details",userId);
  
  const users = {
    1: { name: "John Doe", email: "john@email.com" },
    2: { name: "Jane Smith", email: "jane@email.com" },
    3: { name: "Bob Wilson", email: "bob@email.com" }
  };

  const user = users[userId];

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <p><strong>ID:</strong> {userId}</p>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
}

export default DynamicRoutes;