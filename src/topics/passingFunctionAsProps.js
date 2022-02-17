import React from "react";
import ChildComponent from "./childComponent";

const PassingFunctionAsProps = () => {
  const [status, setState] = React.useState(false);
  const handleClick = () => {
    this.setState((prev) => ({ status: !prev.status }));
  };
  return (
    <>
      <ChildComponent isOpen={status} handleClick={handleClick} />
    </>
  );
};

export default PassingFunctionAsProps;
