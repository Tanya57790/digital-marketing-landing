import { BaseButtonProps } from './interfaces';

export const buttonsData: BaseButtonProps[] = [
  {
    variantButton: 'primary',
    title: 'Boost your results',
    borderRadius: '5px',
    mobile: { width: '185px', height: '46px', fontSize: '14px' },
    desktop: { width: '258px', height: '63px', fontSize: '20px' },
  },
  {
    variantButton: 'contact',
    title: 'Contact us',
    borderRadius: '5px',
    mobile: { width: '133px', height: '36px', fontSize: '14px' },
    desktop: { width: '170px', height: '43px', fontSize: '20px' },
  },
  {
    variantButton: 'secondary',
    title: 'Learn more',
    borderRadius: '5px',
    mobile: { width: '136px', height: '36px', fontSize: '14px' },
    desktop: { width: '173px', height: '43px', fontSize: '20px' },
  },
  {
    variantButton: 'submit',
    title: 'Subscribe',
    borderRadius: '5px',
    mobile: { width: '97px', height: '46px', fontSize: '14px' },
    desktop: { width: '166px', height: '53px', fontSize: '20px' },
  },
];
