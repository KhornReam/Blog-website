/** Main navigation, shared by the desktop header and the mobile menu. */
export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Adventures', to: '/adventures' },
  { label: 'Food & Drink', to: '/food' },
  { label: 'Travel Stories', to: '/blog' },
  { label: 'About Me', to: '/about' },
]
