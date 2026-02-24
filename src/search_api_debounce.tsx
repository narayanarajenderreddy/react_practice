import { useState, useEffect, useMemo } from "react";

function LiveSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  // 🔵 Fake API call
  const fetchUsers = (query) => {
    console.log("searched value:",query);
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = Array.from({ length: 50 }, (_, i) => ({
          id: i,
          name: `User ${i}`
        }));
        console.log("users list created:",users);
        resolve(
          users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, 1000);
    });
  };

  // 🔴 useEffect for API call with debounce
  useEffect(() => {
    if (!search) {
      setData([]);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      fetchUsers(search).then((result) => {
        console.log("calling main function fetchuser")
        setData(result);
        setLoading(false);
      });
    },5000);

    // 🔥 Cleanup (very important)
    return () => {
        console.log("calling clear time out")
      clearTimeout(timer);
    };

  }, [search]);

  // 🟢 useMemo for derived value
  const totalUsers = useMemo(() => {
    return data.length;
  }, [data]);

  return (
    <>
      <h2>Live Search</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      {loading && <p>Loading...</p>}

      <p>Total Users: {totalUsers}</p>

      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default LiveSearch;