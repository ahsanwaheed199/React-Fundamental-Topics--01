// Split component into a smaller components
import React from "react";
import Users from "./users";

const ExtractingComponents = () => {
  return (
    <div>
      <h1>Users</h1>
      <Users names={["Ahsan", "Adeel", "Hamza"]} />
    </div>
  );
};

export default ExtractingComponents;
