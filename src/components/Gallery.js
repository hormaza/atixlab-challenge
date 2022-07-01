import React from "react";

function Gallery() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalImgSource, setModalImgSource] = React.useState("");
  const images = JSON.parse(localStorage.getItem("images") || "[]");

  function displayImage(imgSrc) {
    setShowModal(true);
    setModalImgSource(imgSrc);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div id="Gallery">
      <h2>Gallery Section</h2>
      <div style={{ display: "flex" }}>
        {!!images.length ? (
          <div className="grid">
            {images.map((img, i) => (
              <div
                className="image"
                key={"image_" + i}
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => displayImage(img)}
              ></div>
            ))}
          </div>
        ) : (
          <h3>No images found in gallery.</h3>
        )}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="closeButton" onClick={closeModal}>
              x
            </div>
            <img
              alt="preview"
              id="modalImg"
              width="100%"
              src={modalImgSource}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
