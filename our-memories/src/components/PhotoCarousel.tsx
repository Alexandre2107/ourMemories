import { useEffect, useRef, useState } from "react";

interface PhotoCarouselProps {
  images: string[];
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((index + images.length) % images.length);
    setTimeout(() => setTransitioning(false), 500);
  };

  const nextSlide = () => goTo(current + 1);
  const prevSlide = () => goTo(current - 1);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  });

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <div className="w-full max-w-md mx-auto relative select-none">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-hidden rounded-xl shadow-lg h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Botões */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-2 py-1 rounded-full"
      >
        ⟵
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-2 py-1 rounded-full"
      >
        ⟶
      </button>

      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
