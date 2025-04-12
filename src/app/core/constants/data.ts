import { uiImages } from "./image-interface";

export const menu = [
  { label: 'HOME', route: '/home', active: true },
  { label: 'ABOUT US', route: '/about' },
  { label: 'SERVICES', route: '/services' },
  { label: 'OUR CLIENTS', route: '/clients' },
  { label: 'PROJECTS', route: '/projects' },
  { label: 'EHS', route: '/ehs' },
  { label: 'CAREERS', route: '/careers' },
  { label: 'CONTACT US', route: '/contact' },
];

export const heroContent = {
  backgroundImage: uiImages.substation, 
  heading:
    'Sysflow Automations Is A Powerhouse In The Industry, Backed By A Team Of Expert Engineers Dedicated To Providing Dependable Automation Services With An Unwavering Commitment To Safety.',
  buttons: [
    { label: 'Our Services', route: '/services', style: 'primary' },
    { label: 'Contact Us', route: '/contact', style: 'secondary' },
  ],
};
