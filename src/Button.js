import React from "react";

function Button({ children, handleSubmit }) {
  return (
    <button className="bg-purple-300" onClick={handleSubmit}>
      {children}
    </button>
  );
}

export default Button;
