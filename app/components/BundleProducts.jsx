import {Link} from '@remix-run/react';
import tongkatImage from '../assets/bundles/Image (15).png';
import maleHormoneImage from '../assets/bundles/Image (16).png';
import sleepBundleImage from '../assets/bundles/Image (17).png';
import preLotionImage from '../assets/bundles/Image (18).png';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import {useState} from 'react';

const NAVIGATION_ITEMS = [
  'Sleep',
  'Cognitive Function',
  'Foundational Health',
  'Athletic Performance',
  'Hormone Support',
];

const BUNDLES_DATA = [
  {
    id: 1,
    title: 'Tongkat & Fadogia 40 Day Supply',
    subtitle: 'Hormone Support',
    image: tongkatImage,
    price: 49.95,
    rating: 5,
    link: '/products/tongkat-fadogia-bundle',
    badges: ['GMO Free', 'Dairy Free'],
  },
  {
    id: 2,
    title: 'Male Hormone Support Bundle',
    subtitle: 'Hormone Support, Foundational Health',
    image: maleHormoneImage,
    price: 89.99,
    rating: 5,
    link: '/products/male-hormone-bundle',
    badges: ['GMO Free', 'Gluten Free', 'Dairy Free'],
  },
  {
    id: 3,
    title: 'Complete Sleep Bundle',
    subtitle: 'Cognitive Function, Sleep Regulation, Sleep Quality',
    image: sleepBundleImage,
    price: 129.99,
    rating: 5,
    link: '/products/sleep-bundle',
    badges: ['GMO Free', 'Gluten Free', 'Vegan'],
  },
  {
    id: 4,
    title: 'PR Lotion Starter Kit',
    subtitle: 'Athletic Performance, Muscle Recovery',
    image: preLotionImage,
    price: 35.0,
    rating: 5,
    link: '/products/pr-lotion-starter',
    badges: ['Vegan', 'Dairy Free'],
    isNew: true,
  },
];

export function BundleProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 py-6 md:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col items-start px-4 sm:px-6 py-4 md:py-10">
              <span className="text-sm md:text-base">📦 Goals Specific</span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium max-w-xl">
                Bundles
              </span>
            </div>
            
            <nav className="flex flex-wrap gap-2 md:gap-6 w-full md:w-auto">
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item}
                  className={`!text-[12px] md:!text-[14px] !font-[400] hover:text-gray-600 relative pb-2 ${
                    activeIndex === index ? 'text-[#1B1F23]' : 'text-[#1B1F23]'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item}
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Link
                to="/collections/bundles"
                className="!text-[14px] md:!text-[18px] !font-[400] !underline mr-2"
              >
                View All Bundles
              </Link>
              <div className="flex gap-2">
                <button className="p-1 h-[32px] w-[32px] md:h-[40px] md:w-[40px] rounded-[4px] border border-[#1B1F231A] bg-[#F5F5F5] flex items-center justify-center" aria-label="Previous">
                  <ArrowLeftIcon className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                <button className="p-1 h-[32px] w-[32px] md:h-[40px] md:w-[40px] rounded-[4px] border border-[#1B1F231A] bg-[#F5F5F5] flex items-center justify-center" aria-label="Next">
                  <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8">
          {BUNDLES_DATA.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-[#F6F6F5] rounded-lg p-4 shadow-sm"
            >
              <Link to={bundle.link} className="block !no-underline">
                <div className="relative mb-4">
                  {bundle.isNew && (
                    <div className="absolute top-0 left-0 bg-[#FFE5A0] text-[12px] font-medium text-black px-3 py-1 rounded-md">
                      New
                    </div>
                  )}
                  <img
                    src={bundle.image}
                    alt={bundle.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 sm:mb-2 items-center">
                    {bundle.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-[#F6F6F5] text-[8px] sm:text-[10px] font-[400] text-[#000000] border border-[#1B1F231A] rounded-[4px] px-1 sm:px-2 flex items-center gap-1"
                      >
                        <span className="text-base sm:text-lg leading-1">
                          •
                        </span>
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>
                  <h3 className="!font-[500] text-gray-900 !text-sm sm:!text-[16px] line-clamp-2">
                    {bundle.title}
                  </h3>
                  <p className="!text-[13px] !font-[400] text-gray-600">{bundle.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm sm:text-base">
                        ${bundle.price.toFixed(2)}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Subscribe ${(bundle.price * 0.8).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center text-xs sm:text-sm">
                        {'★'.repeat(bundle.rating)}
                        {'☆'.repeat(5 - bundle.rating)}
                      </div>
                    </div>
                    <button className="bg-[#1B1F23] text-white rounded-[4px] text-[11px] sm:text-[13px] font-[400] h-[22px] sm:h-[25px] w-[80px] sm:w-[99px]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
