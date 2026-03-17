import { useContext } from "react";
import { UserContext } from "./usercontext";

function Dashboard() {
  const { user } = useContext(UserContext);

  console.log("Dashboard rendered");

  return <h2>Current User: {user}</h2>;
}

export default Dashboard;