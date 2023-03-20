import React from 'react';
import GraphTable from './GraphTable';
import { collectData } from './binarySearchTree';

function App() {
  const data = collectData();

  const trace1 = {
    x: data.map(d => d.n),
    y: data.map(d => d.height / (2 * Math.log(d.n) / Math.log(2))),
    type: 'scatter',
    name: 'h(n) / 2lg(n)',
    

  };

  const trace2 = {
    x: data.map(d => d.n),
    y: data.map(d => d.height / ((2 * d.n) * Math.sqrt(d.n))),
    type: 'scatter',
    name: 'h(n) / 2n√n',
  };

  const trace3 = {
    x: data.map(d => d.n),
    y: data.map(d => d.height / d.height / ((2 * d.n) * (Math.log(d.n) / Math.log(2)))),
    type: 'scatter',
    name: 'h(n) / 2nlg(n)',
  };

  const tableData1 = data.map(d => [d.n, d.height, (d.height / (2 * Math.log(d.n) / Math.log(2))).toFixed(4)]);
  const tableData2 = data.map(d => [d.n, d.height, (d.height / ((2 * d.n) * Math.sqrt(d.n))).toFixed(4)]);
  const tableData3 = data.map(d => [d.n, d.height, (d.height / ((2 * d.n) * (Math.log(d.n) / Math.log(2)))).toFixed(4)]);

  return (
    <div className="container">
      <h1>Expected Height of a Randomly Built Binary Search Tree</h1>
      <GraphTable
        traceData={trace1}
        tableData={tableData1}
        title="h(n) / 2lg(n) versus n"
        xTitle="n"
        yTitle="h(n) / 2lg(n)"
        zoomOut={true}
      />
      <GraphTable
        traceData={trace2}
        tableData={tableData2}
        title="h(n) / 2n√n versus n"
        xTitle="n"
        yTitle="h(n) / 2n√n"
      />
      <GraphTable
        traceData={trace3}
        tableData={tableData3}
        title="h(n) / 2nlg(n) versus n"
        xTitle="n"
        yTitle="h(n) / 2nlg(n)"
      />
    </div>
  );
}

export default App;
