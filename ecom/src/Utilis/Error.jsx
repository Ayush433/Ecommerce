import React from "react";

const ErrorMessage = ({ msg }) => {
  return (
    <small
      style={{
        color: "red",
      }}
    >
      {msg}
    </small>
  );
};

export default ErrorMessage;
