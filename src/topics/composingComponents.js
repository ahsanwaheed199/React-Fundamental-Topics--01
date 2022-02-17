// Components can refer to other components in their arguments.
import React from "react";

const ComposingComponents = ({ name }) => {
  return (
    <>
      <h1>Wlocome {name}</h1>
    </>
  );
};

export default ComposingComponents;
