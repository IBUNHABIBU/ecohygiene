import { useEffect, useState } from "react";

const flowers = ["🌸", "🌺", "🌼", "🌷", "💐"];

export default function ChristmasCard() {
    const message =
  "Merry Christmas 🎄\nAnd a Happy New Year 🎆\nMay joy, peace and love be with you.";

  const [text, setText] = useState("");
  const [bursts, setBursts] = useState([]);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Flower blast generator
  useEffect(() => {
    const interval = setInterval(() => {
      const burst = Array.from({ length: 10 }).map(() => ({
        flower: flowers[Math.floor(Math.random() * flowers.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        id: Math.random(),
      }));
      setBursts((prev) => [...prev, ...burst]);

      setTimeout(() => {
        setBursts((prev) => prev.slice(10));
      }, 2000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {bursts.map((b) => (
        <span
          key={b.id}
          className="flower"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
        >
          {b.flower}
        </span>
      ))}

      <div className="bubble">
        <pre>{text}</pre>
        <div className="from">– Ecohygiene</div>
      </div>
    </div>
  );
}
