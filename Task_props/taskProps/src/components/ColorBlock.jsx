import React from "react";

function ColorBlock(props) {

  const style = {
    width: "50px",
    height: "50px",
    backgroundColor: props.color || "gray", // שימוש ב-props.color ואם לא קיים, הצבע יהיה אפור
  };

  return <div style={style}></div>;

}


export default ColorBlock;