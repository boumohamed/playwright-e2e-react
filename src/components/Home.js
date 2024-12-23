import React, { useState } from "react";
import Form from "./Form";

const Hello = ({ name }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <h1>Hello, {name || "World"}!</h1>
        <button onClick={() => setShow(!show)}>Click Me</button>
      </div>
      {show && (
        <div>
          <h2>Mohamed Bouzri !</h2>
        </div>
      )}
      <Form />
    </>
  );
};

export default Hello;
