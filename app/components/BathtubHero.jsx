import {Image} from '@shopify/hydrogen';

export function BathtubHero() {
  return (
    <div className="relative w-full min-h-[800px] overflow-hidden flex items-center mb-5 ">
      <div className="absolute inset-0 py-7">
        <Image
          src="/app/assets/Rectangle 478.png"
          className="w-full h-full object-cover"
          alt="Desert landscape with modern bathtub"
          sizes="100vw"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-[683px] flex flex-col gap-10">
          <div className='flex flex-col '>
            <h1 className="!text-[50px] !font-[600] text-white p-0 !mt-0 !mb-0">
              The Next Generation is Here
            </h1>
            <p className="text-xl text-white !mt-0">
              Innovative Engineering. Intelligent Design. Meet The Plunge M1S.
            </p>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="text-[16px] font-[500] bg-white text-black px-8 py-3 rounded-[8px] hover:bg-opacity-90 transition w-[190px] h-[50px]">
              Take The Plunge
            </button>
            <button className="text-[16px] font-[500] border-2 border-white text-white px-8 py-3 rounded-[8px] hover:bg-white hover:text-black transition w-[190px] h-[50px]">
              Dive Deeper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
