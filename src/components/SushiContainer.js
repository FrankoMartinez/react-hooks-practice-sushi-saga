import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const sushiComponents = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => {
    return (
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={handleEatSushi} />
    )
  })

  function handleClickMore() {
    // (sushiIndex + 4) % sushis.lenght
    // is a way to wrap back around to the beginning of the array once we get to the end
    // using the % (remainder) operator
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length)
  }
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
