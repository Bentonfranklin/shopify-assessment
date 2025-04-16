import {Image} from '@shopify/hydrogen';
import {useState, useEffect, useRef} from 'react';

const TRUST_LOGOS = [
  {
    src: '/Rolling_Stone_logo 1.png',
    alt: 'Rolling Stone',
  },
  {
    src: '/BBC_News_2022_(Alt) 1.png',
    alt: 'BBC News',
  },
  {
    src: '/LA_Weekly_logo 1.png',
    alt: 'LA Weekly',
  },
  {
    src: '/Herb_Updated_Logo_Dark_Version 1.png',
    alt: 'Herb',
  },
  {
    src: '/NewYorkTimes 1.png',
    alt: 'New York Times',
  },
  {
    src: '/image 45.png',
    alt: 'Vice',
  },
  {
    src: '/Rolling_Stone_logo 1 (1).png',
    alt: 'Rolling Stone',
  },
  {
    src: '/image 45 (1).png',
    alt: 'BBC News',
  },
];

export function TrustBadges() {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const slideWidth = containerRef.current?.firstChild?.offsetWidth || 0;
    const totalWidth = slideWidth * TRUST_LOGOS.length;

    const timer = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when we've scrolled one full width
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [TRUST_LOGOS.length]);

  // Create multiple copies for smooth infinite scroll
  const repeatedLogos = [...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div className="w-full bg-[#F6F6F5] overflow-hidden border-y border-gray-200 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 py-2 px-4">
        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="inline-flex items-center border border-black rounded-[8px] bg-[#0000001A]">
            <span className="text-gray-800 text-xs font-medium px-3 py-1">
              #1 Doctor Recommended
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#F5BD41] text-lg">★★★★★</span>
            <span className="text-[16px] font-[400] text-[#1B1F23]">
              12,000+ 5-star Reviews
            </span>
          </div>
        </div>
        <div className="hidden md:block h-12 w-px bg-gray-200" />
        <div className="max-w-[1000px] overflow-hidden">
          <div 
            ref={containerRef}
            className="flex items-center gap-4 min-w-max whitespace-nowrap transition-transform"
            style={{ transform: `translateX(${position}px)` }}
          >
            {repeatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-[100px] md:w-[120px] h-[40px] flex items-center justify-center bg-white"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
