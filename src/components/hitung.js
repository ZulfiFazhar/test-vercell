import React from "react";
import "../App.css";

function Hitung() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default Hitung;
