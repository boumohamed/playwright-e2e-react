import React, { useState } from "react";

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
    </>
  );
};

export default Hello;
