export type ActiveProps = 'About' | 'Project' | 'Contact' | '';
type LinkProps = {
  name: ActiveProps;
};

export const links: LinkProps[] = [
  { name: 'About' },
  { name: 'Project' },
  { name: 'Contact' },
];
