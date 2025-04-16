import {Link} from '@remix-run/react';
import image1 from '../assets/imagegrid/Image (1).png';
import image2 from '../assets/imagegrid/Image (2).png';
import image3 from '../assets/imagegrid/Image (3).png';
import image4 from '../assets/imagegrid/Image (4).png';
import image5 from '../assets/imagegrid/Image (5).png';
import image6 from '../assets/imagegrid/Image (6).png';
import image7 from '../assets/imagegrid/Image (7).png';
import image8 from '../assets/imagegrid/Image (8).png';
import image9 from '../assets/imagegrid/Image (9).png';
import image10 from '../assets/imagegrid/Image.png';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: image1,
    alt: 'Lifestyle Image 1'
  },
  {
    id: 2,
    image: image2,
    alt: 'Lifestyle Image 2'
  },
  {
    id: 3,
    image: image3,
    alt: 'Lifestyle Image 3'
  },
  {
    id: 4,
    image: image4,
    alt: 'Lifestyle Image 4'
  },
  {
    id: 5,
    image: image5,
    alt: 'Lifestyle Image 5'
  },
  {
    id: 6,
    image: image6,
    alt: 'Lifestyle Image 6'
  },
  {
    id: 7,
    image: image7,
    alt: 'Lifestyle Image 7'
  },
  {
    id: 8,
    image: image8,
    alt: 'Lifestyle Image 8'
  },
  {
    id: 9,
    image: image9,
    alt: 'Lifestyle Image 9'
  },
  {
    id: 10,
    image: image10,
    alt: 'Lifestyle Image 10'
  }
];

export function InstagramGrid() {
  return (
    <div className="w-full bg-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
          {/* Instagram Profile Card - spans 2 columns */}
          <div className="col-span-2 bg-[#F6F6F5] p-6 flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-[60px] h-[60px] rounded-full bg-black overflow-hidden flex items-center justify-center border-2 border-white">
                <span className="text-white text-[10px] font-medium ">Login</span>
              </div>
              <span className="text-[20px] font-[600]">@uncmfrt.com</span>
            </div>
            <Link 
              to="https://instagram.com/uncmfrt"
              className="w-full max-w-[240px] h-[55px] px-4 py-1.5 border rounded-[8px] text-[14px] text-center font-[500] flex items-center justify-center bg-white"
            >
              Follow Us on Instagram
            </Link>
          </div>

          {/* First row remaining images */}
          <div className="aspect-square">
            <img src={image10} alt="Lifestyle Image 10" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image1} alt="Lifestyle Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image2} alt="Lifestyle Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image3} alt="Lifestyle Image 3" className="w-full h-full object-cover" />
          </div>
         

          {/* Second row */}
          <div className="aspect-square">
            <img src={image4} alt="Lifestyle Image 4" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image5} alt="Lifestyle Image 5" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image6} alt="Lifestyle Image 6" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image7} alt="Lifestyle Image 7" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image8} alt="Lifestyle Image 8" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square">
            <img src={image9} alt="Lifestyle Image 9" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
} 