import { act } from "react";

function ColorPreview({ color }) {
  const style = {
    backgroundColor: color,
    width: 180,
    height: 120,
    borderRadius: 8,
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };
  return <div style={style}>{color ? color : "No color selected yet"}</div>;
}

export default ColorPreview;
