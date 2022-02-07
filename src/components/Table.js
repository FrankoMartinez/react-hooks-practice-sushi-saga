import React from "react";

function Table({ plates = [], wallet}) {
  // renders an empty plate for every element in the array
  const displayedPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{displayedPlates}</div>
      </div>
    </>
  );
}

export default Table;
