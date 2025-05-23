import SpotifyEmbed from "./components/SpotifyEmbed";
import LoveTimer from "./components/LoveTimer";
import DailyMessage from "./components/DailyMessages";
import PhotoCarousel from "./components/PhotoCarousel";
import HeartRain from "./components/HeartRain";
import "./index.css";

function App() {
  const images = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
    "/photos/photo5.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 p-4">
      <HeartRain />
      <SpotifyEmbed url="https://open.spotify.com/intl-pt/track/25osmdhvjltPlN7gI2Javd?si=598ee4328c7a4391" />
      <PhotoCarousel images={images} />
      <h1 className="text-2xl font-bold">Alex y Majito❤️</h1>
      <LoveTimer startDate="2025-04-17T00:00:00" />
      <DailyMessage />
    </div>
  );
}

export default App;