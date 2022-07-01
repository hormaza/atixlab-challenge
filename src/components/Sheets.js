import React from "react";

function Sheets() {
  const sheets = JSON.parse(localStorage.getItem("sheets") || "[]");

  function parseCSV(sheet) {
    // split in rows
    const csvRows = sheet.split("\r\n");
    // get header and body
    const [header, ...body] = csvRows;
    // get header values
    const headerValues = header.split(",");
    // get body values list
    const bodyValues = body.map((values) => values.split(","));
    // construct object
    return { header: headerValues, body: bodyValues };
  }

  function toggleTable(index) {
    const element = document.querySelectorAll(".table-container")[index];
    const isExpanded = element.classList.contains("expanded");
    if (isExpanded) {
      element.classList.remove("expanded");
      element.classList.add("collapsed");
    } else {
      element.classList.add("expanded");
      element.classList.remove("collapsed");
    }
  }
  return (
    <div id="Sheets">
      <h2>Sheets Section</h2>
      <div className="container">
        {!!sheets.length ? (
          sheets.map(parseCSV).map((csv, i) => {
            return (
              <div key={"sheet_" + i}>
                <button onClick={() => toggleTable(i)}>CSV {i + 1}</button>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        {csv.header.map((value, i) => (
                          <th key={value + i}>{value}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {csv.body.map((row, i) => (
                        <tr key={"row_" + i}>
                          {row.map((value, i) => (
                            <td key={value + i}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No sheets found in memory.</h2>
        )}
      </div>
    </div>
  );
}

export default Sheets;
