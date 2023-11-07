import React from "react";

const Button = ({ title, color, onClick }) => {
  return (
    <div>
      <button style={{ background: color }} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
