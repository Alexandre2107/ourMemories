import SpotifyEmbed from "./components/SpotifyEmbed";
import LoveTimer from "./components/LoveTimer";
import DailyMessage from "./components/DailyMessages";
import PhotoCarousel from "./components/PhotoCarousel";
import HeartRain from "./components/HeartRain";
import "./index.css";

function App() {
  const base = import.meta.env.BASE_URL;
  const images = [
    base + "photos/photo1.jpg",
    base + "photos/photo2.jpg",
    base + "photos/photo3.jpg",
    base + "photos/photo4.jpg",
    base + "photos/photo5.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 p-4">
      <HeartRain />
      <SpotifyEmbed url="https://open.spotify.com/intl-pt/track/25osmdhvjltPlN7gI2Javd?si=598ee4328c7a4391" />
      <PhotoCarousel images={images} />
      <hr className="w-full max-w-md border-t border-white opacity-50" />
      <h1 className="text-2xl font-bold">Alex y Majito | 17.04.2025🍁❤️</h1>
      <p className="text-center text-lg">Being in love with you since:</p>
      <LoveTimer startDate="2025-04-18T00:00:00" />
      <DailyMessage />
    </div>
  );
}

export default App;