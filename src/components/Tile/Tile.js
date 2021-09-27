import React, { useContext } from "react";
import Input from "../Input/Input";
import "./Tile.css";
import { arraysContext } from "../Contexts/arraysContext";

function Tile(props) {
  // const { vehicles, planets } = props;
  const { vehicles, planets } = useContext(arraysContext);

  return (
    <div className="tile">
      <h5>Destination 1</h5>
      <Input planets={planets}/>
      <Input vehicles={vehicles}/>
    </div>
  );
}

export default Tile;
