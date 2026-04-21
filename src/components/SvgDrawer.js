import { useState } from "react";

export default function SvgDrawer() {
  const [points, setPoints] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints([...points, { x, y }]);
  };

  const undo = () => {
    setPoints(points.slice(0, -1));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>SVG Drawing Tool</h2>

      <button onClick={undo}>Undo</button>

      <svg
        width="400"
        height="300"
        style={{ border: "1px solid black", marginTop: "10px" }}
        onClick={handleClick}
      >
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="blue" />
        ))}
      </svg>

      <p>Circles drawn: {points.length}</p>
    </div>
  );
}