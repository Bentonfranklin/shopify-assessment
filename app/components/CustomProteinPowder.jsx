import LeavesIcon from './icons/LeavesIcon.jsx';
// import { Image } from '@shopify/hydrogen';
import BlackLeave from './icons/BlackLeave.jsx';
export default function CustomProteinPowder() {
  return (
    <div className="bg-[#F5F5F5] py-10 sm:py-20">
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8 px-4">
        <h3 className="!text-[14px] sm:!text-[16px] !font-[400] mb-2">Simple & Effective Ingredients</h3>
        <h2 className="!text-[28px] sm:!text-[40px] !font-[500] mb-2">Customized Protein Powder</h2>
      </div>
      <div className="px-4 py-8 sm:py-16 bg-white max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Product Image */}
            <div className="flex justify-center items-center">
              <img
                src="/Image (14).png"
                alt="Protein Powder Package"
                className="object-contain w-[200px] sm:w-[300px]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* The Blend Section */}
              <div className="bg-[#1D1D1D] text-white py-6 sm:py-8 flex flex-col gap-4">
                <h3 className="text-center !text-[20px] sm:!text-[24px] !font-[500]">
                  The Blend
                </h3>
                <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-16 pb-4 gap-4 sm:gap-2">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="bg-[#252A2F] rounded-full p-2">
                      <LeavesIcon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="!text-[16px] sm:!text-[18px] !font-[400]">Whey Based</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="bg-[#252A2F] rounded-full p-2">
                      <LeavesIcon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="!text-[16px] sm:!text-[18px] !font-[400]">
                      Build Muscle
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="bg-[#252A2F] rounded-full p-2">
                      <LeavesIcon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="!text-[16px] sm:!text-[18px] !font-[400]">
                      Clean Ingredients
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Ingredients Section */}
              <div>
                <h3 className="text-center !text-[16px] sm:!text-[18px] !font-[500] mb-4 sm:mb-6">
                  Active Ingredients
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <BlackLeave className="text-gray-900 w-6 h-6" />
                    </div>
                    <span className="!text-[16px] !font-[500] mb-2">
                      Whey Protein Isolate
                    </span>
                    <p className="!text-[14px] !font-[400] text-[#1B1F2399]">
                      Fat or Lactose Activity
                      <br />
                      Absorbed To Maximize Results
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <BlackLeave className="text-gray-900 w-6 h-6" />
                    </div>
                    <span className="!text-[16px] !font-[500] mb-2">
                      Whey Protein Isolate
                    </span>
                    <p className="!text-[14px] !font-[400] text-[#1B1F2399]">
                      Fat or Lactose Activity
                      <br />
                      Absorbed To Maximize Results
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <BlackLeave className="text-gray-900 w-6 h-6" />
                    </div>
                    <span className="!text-[16px] !font-[500] mb-2">
                      Whey Protein Isolate
                    </span>
                    <p className="!text-[14px] !font-[400] text-[#1B1F2399]">
                      Fat or Lactose Activity
                      <br />
                      Absorbed To Maximize Results
                    </p>
                  </div>
                </div>
              </div>

              {/* Customize Button */}
              <div className="bg-[#1D1D1D] text-white py-3 text-center rounded-[8px] text-[14px] sm:text-[16px] font-[500] cursor-pointer hover:bg-[#2D2D2D] transition-colors">
                <span>Customize This Blend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
