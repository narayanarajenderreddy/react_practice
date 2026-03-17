import { useContext } from "react";
import { DataContext } from "../useContext_concept/data_context.task27";

function Dashboard() {
  const { users } = useContext(DataContext);

  console.log("Dashboard rendered");

  return (
    <>
      <h2>Dashboard</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dashboard;