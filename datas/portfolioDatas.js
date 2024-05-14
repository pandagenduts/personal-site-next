const reactProjectDatas = [
  {
    title: 'Next Shop',
    slug: 'next-shop',
    imageCover: '/next-shop.png',
    projectURL: 'https://next-shop-flax-one.vercel.app/',
    description: [
      'A Fullstack React Next JS, Firebase & Midtrans Payment Gateway Eshop',
      'The cart is built using Zustand and the data is processed on the backend. So its safe from client-side manipulation!',
      'Its currently on progress. Stay Tuned! ^^',
    ],
    techUsed: [
      'React',
      'Next JS',
      'Tailwind CSS',
      'Zustand',
      'Next Auth',
      'Firebase',
      'Midtrans',
    ],
  },
  {
    title: 'Pixel Overture',
    slug: 'pixel-overture',
    imageCover: '/pixel-overture.png',
    projectURL: 'https://pixel-overture-site.vercel.app',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiiFFG2TNZXGeSGwHcYEscz%2FPixel-Overture%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DkXoYlrOuZpOEh7Wk-1',
    description: [
      'A pixel-perfect conversion from Figma w/ Next JS & Tailwind',
    ],
    techUsed: [
      'React',
      'Next JS',
      'Tailwind CSS',
      'Framer Motion',
      'CVA',
      'Tailwind Merge',
    ],
    techExplanation: [
      'Site is built using Next JS and Tailwind CSS',
      'The clock on header is built using Moment JS and Custom React Hooks (yep, it really shows the correct time 😃)',
    ],
  },
  {
    title: 'Omahku Landing Page',
    slug: 'omahku-landing-page',
    imageCover: '/omahku.png',
    projectURL: 'https://omahku-landingpage.vercel.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKWpmfGnVQKIntNzZ0RhcMF%2FOmahku%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DQy1F6YpDu3Dvoex3-1',
    description: [
      'A pixel-perfect conversion from Figma w/ Next JS, Tailwind & Shadcn UI',
    ],
    techUsed: ['React', 'Next JS', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    title: 'Windbnb',
    slug: 'windbnb',
    imageCover: '/Windbnb.png',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKGNH8dbclXT1vzXLyPrBeu%2FWindbnb%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1',
    projectURL: 'https://donny-challenge3-windbnb.netlify.app/',
    description: [
      'User can filter the stays based on location and number of guests.',
      'To apply filter, simply fill in the filter and press Search button or close the popup filter by clicking the overlay.',
      'Simple Airbnb clone of Frontend Developer challenge from legacy.devchallenges.io',
    ],
    techUsed: [
      'React',
      'Redux',
      'Redux Toolkit',
      'Tailwind CSS',
      'Framer Motion',
    ],
    techExplanation: ['Built using React and Tailwind CSS'],
  },
  {
    title: 'Food Ordering App',
    slug: 'food-ordering-app',
    imageCover: '/food-order-app.png',
    projectURL: 'https://react-food-v2.netlify.app/',
    description: [
      'User and chose menus, add it to the cart and place an order.',
      'A simple food ordering app with Cart feature.',
    ],
    techUsed: ['React'],
    techExplanation: [
      'Cart feature is built w/ React Context and Reducer.',
      'The form validation is built w/ Custom Hooks.',
      'The order is sent to Firebase realtime database via API.',
    ],
  },
  {
    title: 'Reusable Component: Input',
    slug: 'reusable-component-input',
    imageCover: '/input-component-alt.png',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FslzHnI05qpbBeC33ZMZGa5%2Finput-component%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1',
    projectURL: 'https://donny-button-input-devchallenges.netlify.app/input',
    description: [
      'To use the component, simply type the available props that shown on the title of each input.',
      'A Reusable Input Component of Frontend Developer challenge from legacy.devchallenges.io',
    ],
    techUsed: ['React', 'Next JS', 'Tailwind CSS', 'CVA', 'Tailwind Merge'],
    techExplanation: [
      'Reusable component is built with CVA and Tailwind Merge to ease the maintainability while highly customizable for future updates 😃',
    ],
  },
  {
    title: 'Reusable Component: Button',
    slug: 'reusable-component-button',
    imageCover: '/button-component-alt.png',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvfMDJhGGnqfaskO2aud06o%2Fbutton-component%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DWkEFfoeSPRckTOY7-1',
    projectURL: 'https://donny-button-input-devchallenges.netlify.app/buttons',
    description: [
      'To use the component, simply type the available props that shown on the title of each button.',
      'A Reusable Button Component of Frontend Developer challenge from legacy.devchallenges.io',
    ],
    techUsed: ['React', 'Next JS', 'Tailwind CSS', 'CVA', 'Tailwind Merge'],
    techExplanation: [
      'Reusable component is built with CVA and Tailwind Merge to ease the maintainability while highly customizable for future updates 😃',
    ],
  },
];

const wordpressProjectDatas = [
  {
    title: 'Dongmul Food',
    slug: 'dongmul-food',
    imageCover: '/dongmul-food.png',
    projectURL: 'https://dongmulfood.com/',
    description: [
      'An Online-Shop Website',
      'User can choose and buy the products.',
      'User can get pet food portion suggestion on Calculator Page based on the input.',
      'Project is built together w/ team, I work as the WordPress Developer. Project from Pixel Overture Digital Agency.',
    ],
    techUsed: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Crocoblock',
      'Custom HTML CSS JS',
    ],
    techExplanation: [
      'Site is built with WordPress, Elementor, WooCommerce and Crocoblock.',
      'The Calculator Page and Client Testimony background is built using vanilla JavaScript (yes I develop that feature).',
    ],
  },
  {
    title: 'ZhongXin',
    slug: 'zhongxin',
    imageCover: '/zhong-xin-dark.png',
    projectURL: 'https://zhongxin-sg.com/en/',
    description: [
      'User can choose Chinese or English language.',
      'Project is built together w/ team, I work as the WordPress Developer. Project from my previous company (Harnods).',
    ],
    techUsed: ['WordPress', 'WPML', 'Custom Theme', 'ACF'],
    techExplanation: [
      'Site is built by Custom Theme (PHP) and Multi Language w/ WPML. I handle the WordPress Development part.',
    ],
  },
  {
    title: 'Pivot SG',
    slug: 'pivot-sg',
    imageCover: '/pivot-light.png',
    projectURL: 'https://pivot.sg/',
    description: [
      'User can choose Commercial or Residential site part.',
      'User can navigate to another multisite by selector on header.',
      'Project is built together w/ team, I work as the WordPress Developer. Project from my previous company (Harnods).',
    ],
    techUsed: ['WordPress', 'Multisite', 'Custom Theme', 'ACF'],
    techExplanation: [
      'Site is built by Custom Theme (PHP) and WordPress Multisite. I handle the WordPress Development part.',
    ],
  },
  {
    title: 'Luxe',
    slug: 'luxe',
    imageCover: '/Luxe.png',
    projectURL: 'https://luxe.portogarage.com/',
    description: [
      'User can see all rooms, and room details.',
      'Luxe hotel website w/ dynamic feature for rooms.',
    ],
    techUsed: ['WordPress', 'Elementor', 'Crocoblock', 'Custom HTML CSS'],
    techExplanation: [
      'Involves a lot of custom CSS for the pixel-perfect conversion.',
      'The rooms is built w/ Custom Post Type from Crocoblock.',
    ],
  },
  {
    title: 'Brands io',
    slug: 'brands-io',
    imageCover: '/brands-io.png',
    projectURL: 'https://brands.arundagi.com/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F3Rmg6RUW1aa727TYyXZqKm%2FSaas-Landing-Page%3Fnode-id%3D608%253A22%26t%3DCYAWklhcMg8rLud9-1',
    description: [
      'User can click the pulsing button and watch the video w/ popup (bottom CTA section).',
      'A pixel-perfect conversion from Figma w/ Elementor. Design source: arshakir.com',
    ],
    techUsed: ['WordPress', 'Elementor', 'Custom HTML CSS'],
    techExplanation: [
      'Involves a lot of custom CSS for the pixel-perfect conversion.',
      'Animation is built w/ CSS.',
    ],
  },
  {
    title: 'Furni shop',
    slug: 'furni-shop',
    imageCover: '/furni-shop.png',
    projectURL: 'https://furnishop.arundagi.com/',
    figmaEmbedURL:
      'https://www.figma.com/file/vP8Dyr5cPp0YzilinLjf9T?embed_host=share&kind=file&node-id=598%3A95&t=rydIH40w9rlVrA4E-1&viewer=1',
    description: [
      'User can see slider content by swiping the slider or clicking the arrow buttons (on Hero & Testimonial section).',
      'A pixel-perfect conversion from Figma w/ Elementor. Design source: arshakir.com',
    ],
    techUsed: ['WordPress', 'Elementor', 'Custom HTML CSS JS'],
    techExplanation: [
      'Involves a lot of custom CSS for the pixel-perfect conversion. 😃',
      'The slider and content matching is built by integrating Swiper JS and custom JavaScript.',
    ],
  },
  {
    title: 'Space Tourism',
    slug: 'space-tourism',
    imageCover: '/space-tourism.png',
    projectURL: 'https://pandagenduts-space-tourism-2.netlify.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fp3aRvNn0JQOOUfAGTsyTZf%2Fspace-tourism-website%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DyR0edpx5wOpnRZe5-1',
    description: [
      'User can see content by swiping the slider or clicking the navigation button.',
      'A pixel-perfect conversion from Figma w/ Elementor.',
      'Assets and design from frontendmentor.io',
    ],
    techUsed: ['WordPress', 'Elementor', 'Custom HTML CSS JS'],
    techExplanation: [
      'Involves a lot of custom CSS for the pixel-perfect conversion. 😃',
      'The slider and content matching is built by integrating Swiper JS and custom JavaScript.',
    ],
  },
];

const htmlProjectDatas = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    imageCover: '/Portfolio.png',
    projectURL: 'https://pandagenduts-portfolio-devchallenges.netlify.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FO7Omgz2iVR7Vox7shf7O8e%2Fportfolio%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DdjtdnlAIzKNYxXGI-1',
    description: [
      'Site is responsive across all devices.',
      'You can compare the Live Site w/ the Figma design.',
      'A final challenge of Responsive Web Developer from legacy.devchallenges.io',
    ],
    techUsed: ['HTML', 'Vanilla CSS', 'Vanilla JavaScript'],
    // techExplanation: ["Site is built with CSS Grid for the layout and vanilla JavaScript for the portfolio tab filter."],
  },
  {
    title: 'Edie Homepage',
    slug: 'edie-homepage',
    imageCover: '/edie-homepage.png',
    projectURL: 'https://pandagenduts-edie-homepage.netlify.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FahnGupP4JjTdVJDTRfMRF2%2Fedie-homepage%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DdjtdnlAIzKNYxXGI-1',
    description: [
      'Site is responsive across all devices.',
      'You can compare the Live Site w/ the Figma design.',
      'A landing page challenge of Responsive Web Developer from legacy.devchallenges.io',
    ],
    techUsed: ['HTML', 'Vanilla CSS', 'Vanilla JavaScript'],
    // techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: 'Recipe Blog',
    slug: 'recipe-blog',
    imageCover: '/recipe-blog.png',
    projectURL: 'https://pandagenduts-recipe-page.netlify.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2jVBTSKeCYF0dIN6fi0stX%2Frecipe-blog-challenge%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DdjtdnlAIzKNYxXGI-1',
    description: [
      'Site is responsive across all devices.',
      'You can compare the Live Site w/ the Figma design.',
      'A blog page challenge of Responsive Web Developer from legacy.devchallenges.io',
    ],
    techUsed: ['HTML', 'Vanilla CSS', 'Vanilla JavaScript'],
    // techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
  {
    title: 'Checkout Page',
    slug: 'checkout-page',
    imageCover: '/checkout-page.png',
    projectURL: 'https://pandagenduts-checkout-page.netlify.app/',
    figmaEmbedURL:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4B0x88GhiZvgVlcQPSQ73D%2Fcheckout-page-challenge%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DdjtdnlAIzKNYxXGI-1',
    description: [
      'Site is responsive across all devices.',
      'You can compare the Live Site w/ the Figma design.',
      'A checkout page challenge of Responsive Web Developer from legacy.devchallenges.io',
    ],
    techUsed: ['HTML', 'Vanilla CSS', 'Vanilla JavaScript'],
    // techExplanation: ["wordpress elementor custom HTML CSS JS"],
  },
];

const allPortfolioDatas = [
  ...reactProjectDatas,
  ...wordpressProjectDatas,
  ...htmlProjectDatas,
];

export {
  allPortfolioDatas,
  reactProjectDatas,
  wordpressProjectDatas,
  htmlProjectDatas,
};
