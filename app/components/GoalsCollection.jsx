import {Link} from '@remix-run/react';
import ArrowIcon from './icons/ArrowIcon';

const GOALS = [
  {
    id: 1,
    title: 'Sleep',
    description: 'Optimize your sleep patterns',
    image: '/goal4.png',
  },
  {
    id: 2,
    title: 'Cognitive Function',
    description: 'Enhance your brain performance and connectivity',
    image: '/goal3.png',
  },
  {
    id: 3,
    title: 'Foundational Health',
    description: 'Promoting healthy natural sleep and day to day',
    image: '/goal2.png',
  },
  {
    id: 4,
    title: 'Athletic Performance',
    description: 'Increase your healthy focus, muscle and energy',
    image: '/goal1.png'
  },
  {
    id: 5,
    title: 'Hormone Support',
    description: 'Boost your mood, focus, and vitality',
    image: '/Image.png',
  },
];

export function GoalsCollection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 max-w-full mx-auto">
      <div className="text-center mb-8 sm:mb-12 max-w-[400px] mx-auto">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] uppercase tracking-wider mb-3 sm:mb-4">
          COMFORTABLY UNCOMFORTABLE
        </p>
        <h2 className="!text-[24px] sm:!text-[32px] md:!text-[40px] font-semibold mb-3 sm:mb-4">
          Start with your Goals
        </h2>
        <p className="text-[#1B1F23B2] text-[14px] sm:text-[16px]">
          We cannot become what we want to be by remaining what we are.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {GOALS.map((goal) => (
          <Link
            key={goal.id}
            to={`/collections/${goal.title.toLowerCase()}`}
            className="block group transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden mb-3 sm:mb-4 w-[288px] h-[392px] flex justify-center items-center mx-auto">
              <img
                src={goal.image}
                alt={goal.title}
                className="w-full h-full object-cover "
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-medium mb-2">{goal.title}</h3>
                <div className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] rounded-full bg-white flex items-center justify-center border-1 border-[#1B1F23]">
                  <ArrowIcon />
                </div>
              </div>
              <p className="text-[14px] sm:text-[16px] text-[#1B1F23CC] font-[400] leading-relaxed">
                {goal.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
