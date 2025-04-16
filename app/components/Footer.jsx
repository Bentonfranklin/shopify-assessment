import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  HeartIcon,
  TeaCupIcon,
} from './icons/SocialIcons';

const FOOTER_LINKS = {
  aboutUs: {
    title: 'About Us',
    links: [
      {title: 'Blog', url: '/blog'},
      {title: 'Product Reviews', url: '/reviews'},
      {title: 'Our Story', url: '/our-story'},
      {title: 'Delivery', url: '/delivery'},
    ],
  },
  support: {
    title: 'Support',
    links: [
      {title: 'Order Status', url: '/order-status'},
      {title: 'Help Center', url: '/help'},
      {title: 'Contact Us', url: '/contact'},
      {title: 'Returns', url: '/returns'},
    ],
  },
  importantLink: {
    title: 'Important Link',
    links: [
      {title: 'Maintenance', url: '/maintenance'},
      {title: 'Warranty', url: '/warranty'},
      {title: 'Canadian Customers', url: '/ca-customers'},
      {title: 'Setup', url: '/setup'},
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      {title: 'Privacy Policy', url: '/policies/privacy-policy'},
      {title: 'Accessibility', url: '/accessibility'},
      {title: 'Terms of Service', url: '/policies/terms-of-service'},
      {title: 'Affiliate Program', url: '/affiliate'},
      {title: 'Articles', url: '/articles'},
    ],
  },
};

const SOCIAL_LINKS = [
  {icon: InstagramIcon, url: 'https://instagram.com'},
  {icon: TwitterIcon, url: 'https://twitter.com'},
  {icon: FacebookIcon, url: 'https://facebook.com'},
  {icon: YoutubeIcon, url: 'https://youtube.com'},
];

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer !bg-[#F6F6F5] py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
                {/* Newsletter Section */}
                <div className="w-full lg:w-1/4 mr-14">
                  <div className="newsletter-section flex flex-col gap-3">
                    <h3 className="!text-[20px] lg:!text-[24px] font-bold mb-4">
                      Be a Part of Our Journey
                    </h3>
                    <p className="text-[14px] lg:text-[16px] text-gray-600">
                      Welcome to UNCMFRT. Sign up for exclusive content and
                      we'll send you 10% off.
                    </p>
                    <form className="flex h-10 lg:h-12 justify-start items-center">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-1 px-4 border bg-white h-full !rounded-l-[8px] !rounded-r-none text-[14px] lg:text-[16px]"
                      />
                      <button
                        type="submit"
                        className="bg-black text-white px-4 lg:px-6 mb-1 rounded-r-[8px] hover:bg-gray-800 transition-colors h-full text-[14px] lg:text-[16px]"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Links and Contact Section */}
                <div className="w-full lg:w-3/4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* About Us Links */}
                    <div className="footer-section">
                      <h3 className="text-[16px] lg:text-[18px] font-semibold mb-4">
                        {FOOTER_LINKS.aboutUs.title}
                      </h3>
                      <ul className="space-y-2 text-[14px] lg:text-[16px]">
                        {FOOTER_LINKS.aboutUs.links.map((link) => (
                          <li key={link.title}>
                            <NavLink
                              to={link.url}
                              className="text-gray-600 hover:text-black transition-colors"
                              prefetch="intent"
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support Links */}
                    <div className="footer-section">
                      <h3 className="text-[16px] lg:text-[18px] font-semibold mb-4">
                        {FOOTER_LINKS.support.title}
                      </h3>
                      <ul className="space-y-2 text-[14px] lg:text-[16px]">
                        {FOOTER_LINKS.support.links.map((link) => (
                          <li key={link.title}>
                            <NavLink
                              to={link.url}
                              className="text-gray-600 hover:text-black transition-colors"
                              prefetch="intent"
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Important Links */}
                    <div className="footer-section">
                      <h3 className="text-[16px] lg:text-[18px] font-semibold mb-4">
                        {FOOTER_LINKS.importantLink.title}
                      </h3>
                      <ul className="space-y-2 text-[14px] lg:text-[16px]">
                        {FOOTER_LINKS.importantLink.links.map((link) => (
                          <li key={link.title}>
                            <NavLink
                              to={link.url}
                              className="text-gray-600 hover:text-black transition-colors"
                              prefetch="intent"
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-section">
                      <h3 className="text-[16px] lg:text-[18px] font-semibold mb-4">
                        {FOOTER_LINKS.legal.title}
                      </h3>
                      <ul className="space-y-2 text-[14px] lg:text-[16px]">
                        {FOOTER_LINKS.legal.links.map((link) => (
                          <li key={link.title}>
                            <NavLink
                              to={link.url}
                              className="text-gray-600 hover:text-black transition-colors"
                              prefetch="intent"
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact and Social */}
                    <div className="footer-section flex flex-col gap-4">
                      <div>
                        <h3 className="text-[16px] lg:text-[18px] font-semibold mb-4">
                          Contact Us
                        </h3>
                        <p className="text-[14px] lg:text-[16px]">Let Us Help You</p>
                        <p className="font-bold mb-4 !text-[20px] lg:!text-[24px]">
                          (888) 860-0572
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[16px] lg:text-[18px] font-semibold mb-2">
                          Connect With Us
                        </h4>
                        <div className="flex gap-4">
                          {SOCIAL_LINKS.map((social) => (
                            <a
                              key={social.url}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-black transition-colors"
                            >
                              <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="mt-8 flex flex-col lg:flex-row justify-between text-sm text-gray-500 border-t border-gray-200 pt-8">
                <p className="text-[12px] lg:text-[14px] flex">© uncmfrt.com. All rights reserved.</p>
                <p className="text-[10px] lg:text-[12px] flex items-center gap-1">Made with <HeartIcon className='w-4 h-4' /> and <TeaCupIcon className='w-4 h-4' /> by Arctic Grey</p>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
