import { useEffect, useState } from "react";
import "./HeartRain.css";

type Heart = {
  id: number;
  left: number;
  delay: number;
  size: number;
  emoji: string;           // new field
};

const EMOJIS = ["❤️", "💖", "💕", "💘", "💝", "💗", "💓", "💞", "❣️"];

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          size: 16 + Math.random() * 32,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}