import { useState } from "react"

function Scroll () {
  const [pos, setPos] = useState(0);
  return {
    pos,
    setPos
  };
}

export default Scroll