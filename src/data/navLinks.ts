export type ActiveProps = 'About' | 'Projects' | 'Contact' | '';
type LinkProps = {
  name: ActiveProps;
};

export const links: LinkProps[] = [
  { name: 'About' },
  { name: 'Projects' },
  { name: 'Contact' },
];
