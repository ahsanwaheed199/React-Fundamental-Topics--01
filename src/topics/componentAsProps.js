import React from "react";

const ComponentAsProps = ({ Newuser }) => {
  return (
    <div>
      <h1>Users</h1>
      {<Newuser names={["ahsan", "sarim"]} />}
    </div>
  );
};

export default ComponentAsProps;
