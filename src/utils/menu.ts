export type MenuType = {
  id: number;
  name: string;
  icon: string;
  href: string;
};

export const menu = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    href: '/',
  },
  {
    id: 2,
    name: 'All tasks',
    icon: 'task',
    href: '/task',
  },
  {
    id: 3,
    name: 'Important',
    icon: 'important',
    href: '/important',
  },
  {
    id: 4,
    name: 'Complete',
    icon: 'complete',
    href: '/complete',
  },
  {
    id: 5,
    name: 'Do it now',
    icon: 'incomplete',
    href: '/incomplete',
  },
];
