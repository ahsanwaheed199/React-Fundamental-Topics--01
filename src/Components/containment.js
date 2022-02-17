import React from "react";
import Button from "./button";
import Container from "./container";

const Containment = () => {
  return (
    <div>
      <Container>
        <h1>Welcome to my App</h1>
        <p>Hello, hi, this is my paragraph</p>
      </Container>
      <Button>Click me</Button>
    </div>
  );
};

export default Containment;
