import React from "react";

function Home() {
  const [isFileLoaded, setIsFileLoaded] = React.useState(false);
  const [isFileSelected, setIsFileSelected] = React.useState(false);

  const onClickHandler = function () {
    // Looking for the file
    const inputElement = document.querySelector("#inputElement");
    const inputFile = inputElement.files[0];

    // Flag to know if it is a png file type
    const isPNG = !!inputFile.type.match("png");

    if (isPNG) {
      saveImage(inputFile);
    } else {
      saveSheet(inputFile);
    }

    function saveImage(file) {
      const reader = new FileReader();
      // read as URL to save in localStorage
      reader.readAsDataURL(file);

      // Saving in localstorage when file is load in memory
      reader.addEventListener("load", function (e) {
        const newImage = e.target.result;
        // Setting the key of localstorage
        const localStorageKey = "images";
        saveOnLocalStorage(localStorageKey, newImage);
      });
    }

    function saveSheet(file) {
      const reader = new FileReader();
      // read as text to save in localStorage
      reader.readAsText(file);

      reader.addEventListener("load", function (e) {
        const localStorageKey = "sheets";
        const newSheet = e.target.result;
        saveOnLocalStorage(localStorageKey, newSheet);
      });
      setIsFileLoaded(true);
    }

    function saveOnLocalStorage(key, value) {
      // Getting the current value. If doesn't exist create a empty array string
      // * localStorage only can save strings
      const currentValue = localStorage.getItem(key) || "[]";
      // Parsing string
      const parsedValue = JSON.parse(currentValue);
      const newList = [...parsedValue, value];
      // Saving in localStorage
      localStorage.setItem(key, JSON.stringify(newList));
      setIsFileLoaded(true);
    }
  };

  return (
    <div id="Home">
      {isFileLoaded ? (
        <>
          <h2>File Loaded. Thanks</h2>
          <button onClick={() => setIsFileLoaded(false)}>
            Upload another file
          </button>
        </>
      ) : (
        <>
          <h2>Upload a File (only .png or .csv)</h2>
          <div className="uploadFile">
            <label id="selectFileLabel" htmlFor="inputElement">
              Drag your files here or click in this area.
            </label>
            <input
              id="inputElement"
              name="inputElement"
              aria-labelledby="selectFileLabel"
              type="file"
              accept=".png, .csv"
              onChange={() => setIsFileSelected(true)}
            />
          </div>
          {isFileSelected && (
            <button onClick={onClickHandler}>Upload File</button>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
