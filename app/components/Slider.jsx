import {useState, useEffect, useRef} from 'react';

export function Slider() {
  const slides = [
    {
      title: "High Quality Ingredients",
    },
    {
      title: "Independently Certified",
    },
    {
      title: "Expert Driven",
    },
    {
      title: "Shipped Internationally",
    }
  ];

  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideWidth = containerRef.current?.firstChild?.offsetWidth || 0;
    const totalWidth = slideWidth * slides.length;

    const timer = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when we've scrolled one full width
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Create multiple copies for smooth infinite scroll
  const repeatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden">
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap transition-transform"
        style={{ transform: `translateX(${position}px)` }}
      >
        {repeatedSlides.map((slide, index) => (
          <div 
            key={index}
            className="inline-flex items-center"
          >
            <span className="text-sm font-semibold px-2">{slide.title}</span>
            <span className="text-sm px-2">★</span>
          </div>
        ))}
      </div>
    </div>
  );
} 