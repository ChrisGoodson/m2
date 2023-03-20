import React from 'react';

function AnswerExplanation() {
  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <h4>Answer 1:</h4>
        <p>For ℎ(𝑛) ∈Θ(𝑙𝑔(𝑛)) the expected expression for h(n) / 2lg(n) is 1. The shape of the graph can be expected be a horizontal line.</p>
      </div>
      <div className="col-md-4">
        <h4>Answer 2:</h4>
        <p>For ℎ(𝑛) ∈Θ(𝑙𝑔(𝑛)) the expected expression for h(n) / 2n√n is 0. The shape of the graph can be expected to be a horizontal line.</p>
      </div>
      <div className="col-md-4">
        <h4>Answer 3:</h4>
        <p>For ℎ(𝑛) ∈Θ(𝑙𝑔(𝑛)), then the expected expression for h(n) / 2nlg(n) is 1/n. The shape of the graph can be expected to be a downward curve that approaches 0 as n increases.</p>
      </div>
      <div className="col-md-12">
        <h4>Conclusion:</h4>
        <p>The results prove Theorem 12.4.  The graphs show approach a constant value, 0, and 1/n, respectively. These results confirm expected that the height grows logarithmically to n. Therefore, we can conclude that Theorem 12.4 is true.</p>
      </div>
    </div>
  );
}

export default AnswerExplanation;
