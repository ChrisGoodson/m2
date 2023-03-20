import React from 'react';
import Plot from 'react-plotly.js';

function GraphTable({ traceData, tableData, title, xTitle, yTitle }) {
  return (
    <div className="row">
      <div className="col-md-8">
        <Plot data={[traceData]} layout={{ title, xaxis: { title: xTitle }, yaxis: { title: yTitle } }} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>n</th>
              <th>h(n)</th>
              <th>results</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GraphTable;
