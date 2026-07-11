import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";

function App() {
  const [color, setColor] = useState("");

  const colors = ["red", "blue", "green", "orange", "purple"];

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1 style={{color:"black"}}>Color Palette picker</h1>
      <p>Pick a color to preview it below</p>
      <h4 style={{ marginTop: 20, display:"flex", flexDirection: "row", marginLeft: 70 }}>Choose a color:</h4>
        <div 
  style={{ 
    display: "flex",flexDirection: "row", gap: 10,
    alignItems: "center",
    justifyContent: "center"
  }}
>
  {colors.map((colorName) => (
    <ColorButton
      key={colorName}
      color={colorName}
      onClick={() => setColor(colorName)}
    >
      {colorName}
    </ColorButton>
  ))}
</div>
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p>Preview:</p>
          <ColorPreview color={color}/>
          <p style={{ marginTop: 10, fontWeight: "bold", color: color !== "No color selected yet" ? color : "#a99d9d" }}>
            {color !== "" ? `You selected: ${color}` : ""}
          </p>
        </div>
        <div>
          <button style={{ marginTop: 20, border: "2px solid #ccc", backgroundColor: "#a99d9d" }} onClick={() => setColor("")}>
            🔄 Reset
          </button>
        </div>
      </div>

  );
}

export default App;
