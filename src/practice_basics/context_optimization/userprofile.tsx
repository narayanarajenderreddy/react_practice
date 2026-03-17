import React from "react";
import  { useContext } from "react";
import { UserContext } from "./userContext";

function UserProfile() {

  const { user, setUser } = useContext(UserContext);

  console.log("UserProfile rendered");

  return (
    <>
      <h2>User: {user}</h2>

      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>
    </>
  );
}

export default React.memo(UserProfile);


