import { useState, useEffect } from "react";

function AbortSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!search) return;

    const controller = new AbortController();
    const signal = controller.signal;
    console.log("signal data",signal)

    console.log("Starting request for:", search);

    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${search}`,
      { signal }
    )
      .then(res => res.json())
      .then(result => {
        console.log("Response received for:", search);
        setData(result);
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Request aborted for:", search);
        } else {
          console.error(error);
        }
      });

    return () => {
      console.log("Cleaning request for:", search);
      controller.abort(); // 🔥 cancel previous request
    };

  }, [search]);

  return (
    <>
      <h2>AbortController Demo</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AbortSearch;