import React from "react";

const DefaultParameter = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};
DefaultParameter.defaultProps = {
  name: "saif",
  age: 23,
};

export default DefaultParameter;
