import React from "react";

const ChildComponent = ({ isOpen, handleClick }) => {
  return (
    <>
      <h1 onClick={() => handleClick()}>{isOpen}</h1>
    </>
  );
};

export default ChildComponent;
