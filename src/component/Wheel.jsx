import React, { useRef, useEffect } from "react";

function Wheel({ entries, onResult }) {
  const canvasRef = useRef(null);
  const anglePerSlice = 360 / entries.length;
  let rotation = 0;

  useEffect(() => {
    drawWheel(0);
  }, [entries]);

  const drawWheel = (angleOffset = 0) => {
    const canvas = canvasRef.current;
    if (!canvas || entries.length === 0) return;
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;

    ctx.clearRect(0, 0, size, size);

    // Draw slices with gradient and thick white borders
    entries.forEach((entry, i) => {
      const startAngle =
        ((i * 360) / entries.length + angleOffset) * (Math.PI / 180);
      const endAngle =
        (((i + 1) * 360) / entries.length + angleOffset) * (Math.PI / 180);

      // Gradient for each slice
      const grad = ctx.createRadialGradient(
        center,
        center,
        radius * 0.2,
        center,
        center,
        radius
      );
      grad.addColorStop(0, "#fff");
      grad.addColorStop(1, `hsl(${(i * 360) / entries.length}, 70%, 60%)`);

      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Thicker white border
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 5;
      ctx.stroke();

      // Text
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#222";
      ctx.font = "bold 15px sans-serif";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 2;
      ctx.fillText(entry, radius - 18, 8);
      ctx.restore();
    });

    // Decorative dots around the wheel
    const dotCount = entries.length * 2;
    for (let i = 0; i < dotCount; i++) {
      const angle = (i * 2 * Math.PI) / dotCount;
      const dotRadius = 6;
      const x = center + Math.cos(angle) * (radius + 8);
      const y = center + Math.sin(angle) * (radius + 8);
      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
      ctx.fillStyle = i % 2 === 0 ? "#FFD700" : "#fff";
      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Centerpiece: shiny gold circle
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.22, 0, 2 * Math.PI);
    const centerGrad = ctx.createRadialGradient(
      center,
      center,
      5,
      center,
      center,
      radius * 0.22
    );
    centerGrad.addColorStop(0, "#fffbe7");
    centerGrad.addColorStop(0.7, "#FFD700");
    centerGrad.addColorStop(1, "#bfa100");
    ctx.fillStyle = centerGrad;
    ctx.shadowColor = "#FFD700";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  };

  const spinWheel = () => {
    if (entries.length < 2) return alert("Add at least two entries");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let angle = 0;
    let speed = Math.random() * 20 + 20;
    let friction = 0.97;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentRotation = angle % 360;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      drawWheel();
      ctx.restore();

      drawIndicator(ctx);

      angle += speed;
      speed *= friction;

      if (speed > 0.5) {
        requestAnimationFrame(animate);
      } else {
        const finalAngle = angle % 360;
        const adjustedAngle = (360 - finalAngle + 270) % 360; // 90 degrees is top (indicator)
        const sliceIndex =
          Math.floor(adjustedAngle / anglePerSlice) % entries.length;
        const winner = entries[sliceIndex];
        onResult(winner);
      }
    };

    animate();
  };

  const drawIndicator = (ctx) => {
    const size = canvasRef.current.width;
    const center = size / 2;

    ctx.beginPath();
    ctx.moveTo(center - 10, 0);
    ctx.lineTo(center + 10, 0);
    ctx.lineTo(center, 20);
    ctx.closePath();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ border: "4px solid #444", borderRadius: "50%" }}
      ></canvas>
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={spinWheel}
          style={{
            padding: "8px 20px",
            borderRadius: "9px",
            textAlign: "center",
            fontSize: "20px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
          }}
        >
          🎯 Spin
        </button>
      </div>
    </div>
  );
}

export default Wheel;
