import React from "react";

const ActionButton = ({ label, onAction }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem"}}>
      <button onClick={onAction}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;