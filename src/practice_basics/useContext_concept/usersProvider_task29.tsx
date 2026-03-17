import { useState, useMemo } from "react";
import { DataContext } from "./data_context.task27";

function UsersProvider({ children }) {
  const [users, setUsers] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
      role: i % 2 === 0 ? "Admin" : "User"
    }))
  );

  const contextValue = useMemo(() => ({
    users,
    setUsers
  }), [users]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export default UsersProvider;