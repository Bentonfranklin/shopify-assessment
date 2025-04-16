import {useRef, useState, useEffect} from 'react';
import {
  BsChevronLeft,
  BsChevronRight,
  BsPlayFill,
  BsPauseFill,
  BsPlusLg,
  BsVolumeMute,
  BsVolumeUp,
} from 'react-icons/bs';
import video1 from '../assets/videos/-46be-4abb-a537-bca74f36620b.mp4';
import video2 from '../assets/videos/-5c60-4fd6-bd97-5e11b18fd957.mp4';
import video3 from '../assets/videos/-5975-42db-b6b9-f4ec19c2db5d.mp4';
import video4 from '../assets/videos/-61dd-45dc-96ec-34c9d5e96e27.mp4';
import video5 from '../assets/videos/-b4e0-4ff1-b497-9ddb3e7b4fc0.mp4';
import video6 from '../assets/videos/-bb38-4e5f-8d0e-3748404fcf3e.mp4';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import {Link} from '@remix-run/react';
import magnesiumImage from '../assets/productsuppliment/Image (11).png';
import PlusIcon from './icons/PlusIcon';

const SUPPLEMENTS_DATA = [
  {
    id: 2,
    title: 'Magnesium L-Threonate',
    image: magnesiumImage,
    price: 49.95,
    link: '/products/magnesium',
  },
];

const VideoSlider = () => {
  const scrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const videoRefs = useRef([]);

  const videos = [video4, video2, video1, video3, video5, video6, video4];

  const togglePlay = (index) => {
    setIsPlaying((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
        if (videoRefs.current[key]) videoRefs.current[key].pause();
      });
      newState[index] = !prev[index];
      if (newState[index]) {
        videoRefs.current[index]?.play();
      } else {
        videoRefs.current[index]?.pause();
      }
      return newState;
    });
  };

  const toggleMute = (index) => {
    setIsMuted((prev) => {
      const newState = {...prev};
      newState[index] = !prev[index];
      if (videoRefs.current[index]) {
        videoRefs.current[index].muted = newState[index];
      }
      return newState;
    });
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const {scrollLeft, clientWidth} = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === 'left'
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Center the videos on component mount
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const videoWidth = 300; // width of each video card
      const gap = 16; // gap between videos
      const totalWidth = (videoWidth + gap) * 5; // width of 5 videos
      const scrollPosition =
        (scrollRef.current.scrollWidth - containerWidth) / 2;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'auto',
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <div className="w-full py-12 bg-[#F6F6F5]">
      <div className="px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="!text-[16px] !font-[400] mb-2">
            Trusted & Proven by Science
          </h3>
          <div className="flex items-start gap-2 sm:gap-8">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-[4px] border h-[40px] w-[40px] flex items-center justify-center border-[#1B1F231A]"
            >
              <ArrowLeftIcon />
            </button>
            <h2 className="!text-[40px] !font-[500] mb-2">
              Real People. Real Results.
            </h2>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-[4px] border h-[40px] w-[40px] flex items-center justify-center border-[#1B1F231A]"
            >
              <ArrowRightIcon />
            </button>
          </div>
          <Link
            to="/collections/supplements"
            className="!text-[16px] !font-[400] hover:underline"
          >
            View All
          </Link>
        </div>
        {/* Scrollable Videos */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {videos.map((video, index) => (
              <div key={index} className="relative min-w-[300px] snap-center">
                <div className="h-[420px] rounded-lg shadow-md overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    onClick={() => togglePlay(index)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => togglePlay(index)}
                        className="p-2 rounded-full bg-black bg-opacity-50"
                      >
                        {isPlaying[index] ? (
                          <BsPauseFill className="w-8 h-8 text-white" />
                        ) : (
                          <BsPlayFill className="w-8 h-8 text-white" />
                        )}
                      </button>
                      <button
                        onClick={() => toggleMute(index)}
                        className="p-2 rounded-full bg-black bg-opacity-50"
                      >
                        {isMuted[index] ? (
                          <BsVolumeMute className="w-6 h-6 text-white" />
                        ) : (
                          <BsVolumeUp className="w-6 h-6 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Compact Product Card */}
                <div className="w-[300px] mt-4 bottom-4 left-4 right-4">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3 ">
                    <div className='bg-[#F6F6F5] p-2'>
                    
                      <img
                        src={SUPPLEMENTS_DATA[0].image}
                        alt={SUPPLEMENTS_DATA[0].title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                      <div>
                        <h3 className="!text-[13px] !font-[400] text-gray-900">
                          {SUPPLEMENTS_DATA[0].title}
                        </h3>
                        <p className="!text-[12px] !font-[400] text-gray-900">
                          ${SUPPLEMENTS_DATA[0].price}
                        </p>
                      </div>
                    </div>
                    <button className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <PlusIcon className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
