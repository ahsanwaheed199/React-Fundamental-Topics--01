import React from "react";

const Users = ({ names }) => {
  return (
    <>
      {names.map((name, i) => {
        return <li key={i}>{name}</li>;
      })}
    </>
  );
};

export default Users;
