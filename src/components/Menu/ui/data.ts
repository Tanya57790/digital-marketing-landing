interface ItemProps {
  id: number;
  name: string;
  href: string;
}

export const menuItem: ItemProps[] = [
  { id: 1, name: 'Services', href: '#services' },
  { id: 2, name: 'Portfolio', href: '#portfolio' },
  { id: 3, name: 'Email Marketing Audit', href: '#audit' },
  { id: 4, name: 'Contact us', href: '#' },
];
