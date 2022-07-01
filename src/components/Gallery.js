import React from "react";

function Gallery() {
  const images = JSON.parse(localStorage.getItem("images") || "[]");
  return (
    <div>
      {!!images.length ? (
        images.map((img, i) => (
          <img alt={"Image number " + i} key={"image_" + i} src={img} />
        ))
      ) : (
        <h1>No images found in gallery.</h1>
      )}
    </div>
  );
}

export default Gallery;
