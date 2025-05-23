import { useEffect, useState } from "react";

interface LoveTimerProps {
  startDate: string;
}

const LoveTimer: React.FC<LoveTimerProps> = ({ startDate }) => {
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    const start = new Date(startDate);

    const update = () => {
      const now = new Date();
      const diff = now.getTime() - start.getTime();

      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365);
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;

      const hours = now.getHours() - start.getHours();
      const minutes = now.getMinutes() - start.getMinutes();
      const seconds = now.getSeconds() - start.getSeconds();

      setDuration(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return <p className="text-center">{duration}</p>;
};

export default LoveTimer;
