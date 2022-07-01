import React from "react";

function Home() {
  const [isFileLoaded, setIsFileLoaded] = React.useState(false);

  const onClickHandler = function () {
    // Looking for the file
    const inputElement = document.querySelector("#inputElement");
    const inputFile = inputElement.files[0];

    // Flag to know if it is a png file type
    const isPNG = !!inputFile.type.match("png");

    const reader = new FileReader();
    reader.readAsDataURL(inputFile);

    // Saving in localstorage when file is load in memory
    reader.addEventListener("load", function (e) {
      const newFile = e.target.result;
      // Setting the key of localstorage up to filetype
      const localStorageKey = isPNG ? "images" : "sheets";
      // Getting the current value. If doesn't exist create a empty array string
      // * localStorage only can save strings
      const currentValue = localStorage.getItem(localStorageKey) || "[]";
      // Parsing string
      const parsedValue = JSON.parse(currentValue);
      const images = [...parsedValue, newFile];
      // Saving in localStorage
      localStorage.setItem(localStorageKey, JSON.stringify(images));
      setIsFileLoaded(true);
    });
  };

  return (
    <div>
      {isFileLoaded ? (
        <>
          <h1>File Loaded. Thanks</h1>
          <button onClick={() => setIsFileLoaded(false)}>
            Upload another file
          </button>
        </>
      ) : (
        <>
          <input id="inputElement" type="file" accept=".png, .csv" />
          <button onClick={onClickHandler}>Upload File</button>
        </>
      )}
    </div>
  );
}

export default Home;
