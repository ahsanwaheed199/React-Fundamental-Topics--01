import React from "react";
import "./App.css";
import Containment from "./Components/containment";
import ChangingState from "./topics/changingState";
import ComponentAsProps from "./topics/componentAsProps";
import ComposingComponents from "./topics/composingComponents";
import ConditionalJsx from "./topics/conditionalJsx";
import DefaultParameter from "./topics/defaultParameter";
import ExtractingComponents from "./topics/extractingComponents";
import NullCoalescing from "./topics/nullCoalescing";
import PassingFunctionAsProps from "./topics/passingFunctionAsProps";
import StatefulStatelessComponents from "./topics/statefulStatelessComponents";
import Users from "./topics/users";

function formatname(user) {
  return user.firstName + " " + user.lastName;
}
const greet = (user) => {
  if (!user) {
    return <h2>hello {formatname(user)} </h2>;
  }
  return <h2> hello , stranger</h2>;
};
const user = {
  firstName: "Ahsan",
  lastName: "A.Waheed",
};
// const element = (
//   <a href="www.youtube.com" target="_blank">
//     youtube
//   </a>
// );
// const element = <img src={user.avatarUrl}></img>;
// const element = <h1 className="App">hELLO WORLD</h1>;
// const element = React.createElement("h1", { className: "App" }, "hello world")

function App() {
  // const name = "Ahsan";
  return (
    <>
      {/* <ConditionalJsx></ConditionalJsx> */}
      {/* <NullCoalescing></NullCoalescing> */}
      {/* <StatefulStatelessComponents></StatefulStatelessComponents> */}
      {/* <ComposingComponents name="Ahad" />
      <ComposingComponents name="Haris" />
      <ComposingComponents name="Samad" /> */}
      {/* <PassingFunctionAsProps></PassingFunctionAsProps> */}
      {/* <ExtractingComponents></ExtractingComponents> */}
      {/* <Containment></Containment> */}
      {/* <StatefulStatelessComponents age={23}></StatefulStatelessComponents> */}
      {/* <ChangingState></ChangingState> */}
      {/* <DefaultParameter></DefaultParameter>
      <DefaultParameter age={13}></DefaultParameter> */}
      {/* <ComponentAsProps Newuser={Users} /> */}
      {/* <ChangingState initial={5}></ChangingState> */}
      {/* <DefaultParameter></DefaultParameter>
      <DefaultParameter age={12}></DefaultParameter> */}
      <ComponentAsProps Newuser={Users}></ComponentAsProps>
    </>
    // <div>
    //   {greet(user)} <br></br>
    //   {element}
    // </div>
  );
}

export default App;
