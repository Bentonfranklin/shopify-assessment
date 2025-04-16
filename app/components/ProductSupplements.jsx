import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import omega3Image from '../assets/productsuppliment/Image (10).png';
import magnesiumImage from '../assets/productsuppliment/Image (11).png';
import wheyProteinImage from '../assets/productsuppliment/Image (12).png';
import complexImage from '../assets/productsuppliment/Image (13).png';

const SUPPLEMENTS_DATA = [
  {
    id: 1,
    title: 'Omega-3',
    subtitle: 'Cognitive Health & Foundational Health',
    image: omega3Image,
    price: 49.95,
    rating: 5,
    subscriptionPrice: 39.96,
    savePercentage: 10,
    link: '/products/omega-3',
    badges: ['GMO Free', 'Gluten Free'],
    isBestseller: true,
  },
  {
    id: 2,
    title: 'Magnesium L-Threonate',
    image: magnesiumImage,
    price: 54.99,
    rating: 5,
    subscriptionPrice: 44.99,
    link: '/products/magnesium',
    badges: ['GMO Free', 'Gluten Free'],

    description: 'Enhances the quality of sleep.',
  },
  {
    id: 3,
    title: 'Grass Fed Whey Protein Isolate Powder',
    description: 'Enhances the quality of sleep.',

    image: wheyProteinImage,
    price: 59.99,
    rating: 5,
    subscriptionPrice: 49.99,
    link: '/products/whey-protein',
    badges: ['GMO Free', 'Vegan', 'Dairy Free'],
  },
  {
    id: 4,
    title: 'Complete Daily Pack',
    image: complexImage,
    price: 79.99,
    description: 'Enhances the quality of sleep.',

    rating: 5,
    subscriptionPrice: 69.99,
    link: '/products/daily-pack',
    isBestseller: true,
    badges: ['Gluten Free', 'Vegan', 'Dairy Free'],
  },
];

export function ProductSupplements() {
  return (
    <section className="w-full px-6 py-8 md:py-12 bg-[#F6F6F5]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="!text-[16px] !font-[400] mb-2">🌟 Trending</h3>
          <div className="flex items-start gap-2 sm:gap-8">
            <button className="p-2 rounded-[4px] border h-[40px] w-[40px] flex items-center justify-center border-[#1B1F231A]">
              <ArrowLeftIcon />
            </button>
            <h2 className="!text-[40px] !font-[500] mb-2">Supplements</h2>
            <button className="p-2 rounded-[4px] border h-[40px] w-[40px] flex items-center justify-center border-[#1B1F231A]">
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {SUPPLEMENTS_DATA.map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm">
              {index === 0 ? (
                // First product with special styling
                <div>
                  <div className="relative mb-4">
                    {product.isBestseller && (
                      <div className="absolute top-0 left-0 bg-[#FFE5A0] text-[12px] font-medium text-black px-3 py-1 rounded-md">
                        Bestseller
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex gap-3 mt-6 flex-col sm:flex-row">
                    <label className="flex-1 flex flex-col bg-[#F6F6F5] rounded-lg h-[52px] cursor-pointer">
                      <div className="flex items-center h-full px-3">
                        <div className="w-[18px] h-[18px] border border-gray-300 rounded-full flex items-center justify-center">
                          <div className="w-[10px] h-[10px] rounded-full"></div>
                        </div>
                        <div className="flex flex-col ml-2">
                          <span className="text-[12px] text-gray-900 leading-none">
                            One-Time Purchase
                          </span>
                          <span className="font-medium text-[13px] mt-0.5">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </label>

                    <label className="flex-1 flex flex-col border-2 rounded-lg h-[52px] cursor-pointer bg-[#F6F6F5]">
                      <div className="flex items-center h-full px-3">
                        <div className="w-[18px] h-[18px] border-2 border-black rounded-full flex items-center justify-center">
                          <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                        </div>
                        <div className="flex flex-col ml-2">
                          <span className="text-[13px] text-gray-900 leading-none">
                            Subscribe & Save
                          </span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="font-medium text-[13px]">
                              ${product.subscriptionPrice}
                            </span>
                            <span className="text-[11px] text-red-600">
                              Save 10%
                            </span>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <button className="w-full bg-[#1B1F23] text-white rounded-lg py-3.5 mt-3 mb-2 text-[14px]">
                    Add to Cart - ${product.price}
                  </button>

                  <div className="text-center">
                    <a
                      href="#"
                      className="text-[14px] text-gray-600 hover:underline"
                    >
                      View Full Details
                    </a>
                  </div>
                </div>
              ) : (
                // Original styling for other products
                <Link to={product.link} className="block !no-underline">
                  <div className="relative mb-4">
                    {product.isBestseller && (
                      <div className="absolute top-0 left-0 bg-[#FFE5A0] text-[12px] font-medium text-black px-3 py-1 rounded-md">
                        Bestseller
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 sm:mb-2 items-center">
                      {product.badges.map((badge, index) => (
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
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2">
                      {product.title}
                    </h3>
                    {product.description && (
                      <p className="text-xs text-gray-600">
                        {product.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          ${product.price}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Subscribe ${product.subscriptionPrice}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center text-xs sm:text-sm">
                          {'★'.repeat(product.rating)}
                          {'☆'.repeat(5 - product.rating)}
                        </div>
                      </div>
                      <button className="bg-[#1B1F23] text-white rounded-[4px] text-[11px] sm:text-[13px] font-[400] h-[22px] sm:h-[25px] w-[80px] sm:w-[99px]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
