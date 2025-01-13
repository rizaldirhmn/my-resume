import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rizaldi Rahman Resume',
  description: "Welcome to My Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  // Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rizaldi Rahman.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Full Stack Software Engineer, currently working at <a href="https://www.hybridbooking.com/" className="font-bold">Hybrid Booking</a> helping update and build a modern Reservation System based on Bali, Indonesia.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an Extraverted Person, i can easily enjoy with people i've just meet. Now i'm enjoyed to explore an AI Technology, based on my job before i'm continue to explore how the AI Chatbot Working build with Python.
  But for professional things as Software Engineer currently i'm working with React JS/TS for Frontend Development and using Express JS/TS for Backend Development, i used to work with MySQL for DBMS. Besides that most of the time i'm working with PHP (Laravel, CI Framework).`,
  aboutItems: [
    {label: 'Location', text: 'Bali, Indonesia', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Cars, Bycyle', Icon: SparklesIcon},
    {label: 'Study', text: 'Budi Luhur University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Hybrid Booking', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Bahasa',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'Rest API',
        level: 8,
      },
      {
        name: 'Angular JS',
        level: 7,
      },
      {
        name: 'VueJS',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Laravel',
        level: 8,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2014 - May 2018',
    location: 'Budi Luhur University',
    title: 'Bachelor of Information Technology',
    content: <p>Thesis on "Electronic Tickets Using One Time Password (OTP) and REST Web Service on the BluCampus Application”.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'PT Reservasi Indonesia Sejahtera',
    title: 'Senior Web Developer',
    content: (
      <p>
        - Understanding Existing Product. <br/>
        - Mostly the product already out of date for Development and upgrade it to new system. <br/>
        - Develop new system which easy to scale, maintain and develop for further needs. <br/>
        - Build a new Team for New System. <br/>
        - Brainstorming with Product Owner for New Product.
      </p>
    ),
  },
  {
    date: 'May 2022 - June 2024',
    location: 'PT Informasi Teknologi Indonesia',
    title: 'AI Web Developer',
    content: (
      <p>
        - Implemented New Technology for Supporting AI Chatbot. <br/>
        - Create Drawable canvas inside the dashboard with Javascript. <br/>
        - Collaborate with Backend Engineer for Drawing a Chatbot Tree. <br/>
        - Create dynamic Template for Chatbot Needs
      </p>
    ),
  },
  {
    date: 'January 2022 - May 2022',
    location: 'PT. Jari Karya Indonesia',
    title: 'Senior Front End Web Developer',
    content: (
      <p>
        - Create New Product and Collaborate with Product Owner. <br/>
        - Analyze Product Requirement. <br/>
        - Manage Milestone for Development Team. <br/>
        - Scalling the system.
      </p>
    ),
  },
  {
    date: 'June 2020 - January 2022',
    location: 'PT. Emas Optimasi Abadi',
    title: 'Senior Front End Web Developer',
    content: (
      <p>
        - Collaborate with UI/UX and Research team to do further improvement <br/>
        - Maintain product compatibility across devices. <br/>
        - Build a beautiful real-time notification for website (Using FCM Firebase Cloud Messsaging) <br/>
        - Develop a flexible, scalable, and well-structured front-end architecture, along with the APIs to support it.
      </p>
    ),
  },
  {
    date: 'April 2018 -June 2020',
    location: 'PT Ngampooz Pintar Sejahtera',
    title: 'Front End Web Developer',
    content: (
      <p>
        - Create product from scratch. <br/>
        - Implemented a new technology such as New Version of PHP using Framework Laravel (Laravel version 5.5 at that time). <br/>
        - Implemented preventive maintenance strategies, Web Security and Reducing Downtime at higher concurrent user visit (50K user at most).
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'rizaldirahman0@gmail.com',
      href: 'mailto:rizaldirahman0@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Denpasar Bali, Indonesia',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@rizaldirhmn',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'rizaldirhmn',
      href: 'https://github.com/rizaldirhmn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rizaldirhmn'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/rizaldi-rahman-98713628b'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rizaldirhmn/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/rizaldirhmn'},
];
