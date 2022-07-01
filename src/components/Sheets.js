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
  return (
    <div id="Sheets">
      <h2>Sheets Section</h2>
      <div className="container">
        {!!sheets.length ? (
          sheets.map(parseCSV).map((csv, i) => {
            return (
              <table key={"sheet_" + i}>
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
