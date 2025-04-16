import {Link} from '@remix-run/react';

export function Hero() {
  return (
    <div className="hero relative h-[600px] md:h-[700px]">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      ></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/heroimg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Content */}
      <div className="hero-content relative z-10 flex flex-col items-center justify-center h-full !px-2 sm:!px-8">
        <h1 className='!font-[600] !text-[32px] sm:text-[48px] md:!text-[60px] lg:!text-[70px] max-w-[840px] text-white'>
          Great things never came from comfort zones.
        </h1>
        <Link 
          to="/collections"
          className="button !text-[16px] mt-4 !h-[50px] !w-[160px] rounded-[8px] flex items-center justify-center !font-[500]"
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '1rem 2rem',
            borderRadius: '4px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
} 