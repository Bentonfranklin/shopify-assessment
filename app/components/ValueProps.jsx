import {Link} from '@remix-run/react';
import LikeIcon from './icons/LikeIcon';
import LeavesIcon from './icons/LeavesIcon';
import CalenderIcon from './icons/CalenderIcon';
import PeoplesIcon from './icons/PeoplesIcon';

export function ValueProps() {
  const valueProps = [
    {
      title: 'We Make It Easy',
      description:
        'Personalized Solutions & Exclusive Items You Get Just What You Need Nothing More',
      icon: LikeIcon,
    },
    {
      title: 'Clean & Effective',
      description:
        'Proven Ingredients, Not Artificial. Crafted By Experts For Optimal Effectiveness',
      icon: LeavesIcon,
    },
    {
      title: 'Your Free Dietitian',
      description:
        'Every Order Subscriber Gets Free 1:1 Access Their Own Registered Dietitian',
      icon: PeoplesIcon,
    },
    {
      title: 'Made For You',
      description:
        'Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals',
      icon: CalenderIcon,
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="flex flex-col items-start px-6 py-10">
        <span>🧐 Why Health & Fitness</span>
        <span className="text-4xl md:text-5xl font-medium max-w-xl">
          Clean Supplements - <br /> Made For You
        </span>
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center p-6 rounded-lg transition-all duration-300"
            >
              <div className="mb-4 h-[50px] w-[50px] rounded-full bg-black flex items-center justify-center">
                <prop.icon className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {prop.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed !text-start">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
