import React from "react";

const Button = props => {
  return (
    <div>
      <button type="button" className="btn btn-secondary">
          {props.title}
      </button>
    </div>
  );
};
export default Button;
