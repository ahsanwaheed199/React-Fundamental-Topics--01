import React from "react";

const ConditionalJsx = () => {
  const data = {
    user: {
      name: "Saim",
      age: undefined,
    },
  };
  const age = 25;
  const res = age > 30 ?? age;

  return (
    <div>
      {data.user.age ?? data.user.name}
      <br></br>
      {console.log(res)}
      {/* <h1>{age > 18 ? " eligible " : "not eligible"}</h1> */}
    </div>
  );
};
export default ConditionalJsx;
