import React, { useState } from "react";

const buttonHandler = (e) => {
  console.log(e);
};
const NullCoalescing = () => {
  const [name, setName] = setName("ahsan");
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={buttonHandler}
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        Click to change
      </button>
    </div>
  );
};

export default NullCoalescing;
