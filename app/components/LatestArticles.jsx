import {Link} from '@remix-run/react';
import supplementsImage from '../assets/articles/Rectangle 460.png';
import inflammationImage from '../assets/articles/Rectangle 461.png';
import sleepImage from '../assets/articles/Rectangle 461 (1).png';

export function LatestArticles() {
  const articles = [
    {
      id: 1,
      category: 'Balanced Diet',
      title: 'Foundational Supplements: Build a Better You',
      author: 'Emily Thompson',
      date: 'August 31, 2023',
      image: supplementsImage,
      slug: 'foundational-supplements',
    },
    {
      id: 2,
      category: 'Balanced Diet',
      title:
        'Taming the Fire Within: Everything You Need to Know About Inflammation',
      author: 'Emily Thompson',
      date: 'August 31, 2023',
      image: inflammationImage,
      slug: 'inflammation-guide',
    },
    {
      id: 3,
      category: 'Balanced Diet',
      title: 'Optimize Your Sleep with These 15 Strategies',
      author: 'Emily Thompson',
      date: 'August 31, 2023',
      image: sleepImage,
      slug: 'sleep-optimization',
    },
  ];

  return (
    <section className="px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 xl:px-12 bg-white w-full">
      <div className="flex flex-col items-start px-6 py-10">
        <span>✍️ Blogs</span>
        <span className="text-4xl md:text-5xl font-medium max-w-xl">
          Latest Articles
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
        {/* Left - Featured Article */}
        <div className="lg:col-span-7 h-full">
          <Link
            to={`/blogs/${articles[0].slug}`}
            className="block group h-full w-full"
          >
            <div className="relative w-full aspect-[3/4] xs:aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={articles[0].image}
                  alt={`Article: ${articles[0].title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 md:p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm text-white/90 bg-black/30 rounded-full backdrop-blur-sm">
                      {articles[0].category}
                    </span>
                    <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl">
                      {articles[0].title}
                    </h3>
                    <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/80 flex items-center space-x-2">
                      <span>By {articles[0].author}</span>
                      <span className="w-1 h-1 rounded-full bg-white/80"></span>
                      <span>{articles[0].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right - Two Smaller Articles */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="flex flex-col sm:flex-row gap-4 group bg-white rounded-lg hover:bg-gray-50/50 transition-colors duration-300 p-2"
            >
              <Link
                to={`/blogs/${article.slug}`}
                className="block w-full sm:w-[40%] md:w-[45%] lg:w-[50%] shrink-0"
              >
                <div className="relative w-full aspect-square xs:aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={article.image}
                      alt={`Article: ${article.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex-1 flex flex-col justify-center min-w-0 py-1 sm:py-2 px-1 sm:px-2">
                <div className="space-y-2">
                  <span className="inline-block text-xs sm:text-sm text-gray-600 font-medium">
                    {article.category}
                  </span>
                  <Link to={`/blogs/${article.slug}`} className="block">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold leading-snug group-hover:text-orange-900 transition-colors duration-200 line-clamp-3">
                      {article.title}
                    </h3>
                  </Link>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-2 flex items-center space-x-2">
                  <span className="truncate">By {article.author}</span>
                  <span className="w-1 h-1 flex-shrink-0 rounded-full bg-gray-400"></span>
                  <span className="flex-shrink-0">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
