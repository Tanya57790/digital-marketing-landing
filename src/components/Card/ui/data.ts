import { CardsConfig, CardConfigTitle, CardTextProps } from './interfaces';

export const titles: CardConfigTitle = {
  support: {
    title: 'We are here to help when:',
    firstPartSlice: { start: 0, end: 4 },
    lastPartSlice: { start: 5, end: 6 },
    responsiveWidth: { sm: '190px', md: '370px', lg: '470px', xl: '570px', desktop: '831px' },
    accentIndex: 4,
  },
  features: {
    title: 'We take care\n of all your email\n marketing activities',
    firstPartSlice: { start: 0, end: 1 },
    lastPartSlice: { start: 3, end: 9 },
    responsiveWidth: { sm: '230px', md: '550px', lg: '740px', xl: '840px', desktop: '1261px' },
    accentIndex: 1,
  },
  subscribe: {
    title: 'Subscribe\n to L.U.Y.E',
    firstPartSlice: { start: 0, end: 2 },
    responsiveWidth: { sm: '131px', md: '340px', lg: '470px', xl: '570px', desktop: '597px' },
    subtitle: 'Level Up Your Email Newsletter',
    accentIndex: 2,
  },
};

export const supportItems = [
  { id: 1, textItem: 'Your email revenue is 20% \nor less' },
  { id: 2, textItem: 'You need ideas to grow your email channel' },
  { id: 3, textItem: 'You want expert help with implementing strategies' },
  { id: 4, textItem: "Your competitors' emails outperform yours" },
  { id: 5, textItem: 'Email deliverability became \na problem' },
];

export const featureItems = [
  { id: 1, textItem: 'Planning' },
  { id: 2, textItem: 'Design' },
  { id: 3, textItem: 'Copywriting' },
  { id: 4, textItem: 'Analitics' },
  { id: 5, textItem: 'Deliverability' },
  { id: 6, textItem: 'Automation' },
];

export const cardVariantsStyles: CardsConfig = {
  support: {
    display: 'flex',
    justifyContent: { sm: 'space-between' },
    flexDirection: { xs: 'column', sm: 'row' },
    whiteSpace: { xs: 'pre-line', sm: 'normal' },
    listWidth: { xs: '240px', md: '340px', lg: '400px', xl: '520px', desktop: '559px' },
  },
  features: {
    display: 'flex',
    justifyContent: { sm: 'space-between' },
    flexDirection: { xs: 'column' },
    whiteSpace: { xs: 'normal', lg: 'pre-line' },
    listWidth: { xs: '249px', sm: '160px', xl: '250px', desktop: '279px' },
    listDirection: { xs: 'column', md: 'row' },
    textDirection: { xs: 'column', md: 'row', desktop: 'row' },
    textWidth: { md: '350px', lg: '500px', xl: '600px', desktop: '720px' },
    paddingTopText: { xs: '10px', md: '20px', desktop: '40px' },
    gap: { xs: '20px', desktop: '80px' },
  },
  subscribe: {
    display: 'block',
    justifyContent: { sm: 'space-between' },
    flexDirection: { xs: 'column', md: 'row' },
    whiteSpace: { xs: 'normal', xl: 'pre-line' },
    textWidth: { xs: 'auto', desktop: '898px' },
  },
};

export const featuresText: CardTextProps[] = [
  {
    id: 1,
    accent: 'For midsize businesses',
    lastPart: [
      ', we become your budget-friendly email marketing team, ',
      'ensuring revenue from emails at a fraction \nof in-house costs. ',
      'Discover how it works!',
    ],
  },
  {
    id: 2,
    accent: 'For email marketers at larger companies',
    lastPart: [
      ', we enhance your productivity by handling execution, ',
      'allowing you to focus on strategy. ',
      'Learn why we are your support, not your competition!',
    ],
  },
];

export const subscribeText: CardTextProps = {
  firstPart: [
    'Our aim is to level up your email marketing to world-class standards. ',
    'We want \nto bring joy to your readers and deliver excellent ROI for your business. ',
    '\nThat’s why we created our email newsletter.\n',
  ],
  lastPart: [
    "But here is the thing: it's not just about us promoting our agency services \n(we promise!). ",
    'In our emails, we share valuable advice and practical tips based on our own experiences. ',
    'Our goal is to help you enhance your email marketing without breaking the bank.\n',
  ],
  accent: "Let's join forces and make your emails shine!",
};
