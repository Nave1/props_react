import React from "react";

const ImageWithCaption = ({ src, caption }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {src ? (
        <img src={src} alt={caption} style={{ maxWidth: "20%" }} />
      ) : (
        <div>Image not available</div>
      )}
      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;