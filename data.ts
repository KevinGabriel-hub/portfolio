import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdComputer, MdDashboard } from 'react-icons/md';
import {
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si';
import About from './components/aboutPage/About';
import Blogs from './components/blogsPage/Blogs';
import DevBlogs from './components/blogsPage/DevBlogs';
import Contact from './components/contactPage/Contact';
import GuestBook from './components/guestbookPage/GuestBook';
import Resume from './components/resumePage/Resume';
import Stats from './components/statistics/Stats';
import Works from './components/worksPage/Works';
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from './types';

export const menus: MenuData[] = [
  {
    id: 1,
    label: 'about',
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: 'resume',
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: 'works',
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: 'stats',
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 5,
    label: 'contact',
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 6,
    label: 'guest book',
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: AiOutlineGithub,
    label: 'Github',
    logoColor: '#171515',
    mediaUrl: 'https://github.com/KevinGabriel-hub',
    info: 'Star my projects on Github',
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: 'Linkedin',
    logoColor: '#0072b1',
    mediaUrl: 'http://www.linkedin.com/in/kevin-gabriel-maranan-b94024334',
    info: "Let's connect on Linkedin",
  },
  {
    id: 3,
    Icon: FaDiscord,
    label: 'Discord',
    logoColor: '#5865f2',
    mediaUrl: 'https://www.discord.com',
    info: "Let's chat on Discord. My username - kevin_65737_25401",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: 'Front-end',
    Icon: SiNextdotjs,
    description:
      `Create responsive, dynamic, and user-friendly interfaces using modern frameworks like React, Vue.js, and Angular.
Ensure seamless cross-device compatibility and pixel-perfect designs that elevate user experiences.
Optimize front-end performance for faster loading times and improved usability.`,
  },
  {
    id: 2,
    title: 'Back-end',
    Icon: SiNodedotjs,
    description:
      `Build robust, scalable, and secure server-side solutions using Node.js, Python, or Java.
Design and implement RESTful APIs, microservices architecture, and database integrations.
Ensure efficient handling of data and high performance for complex applications.`,
  },
  {
    id: 3,
    title: 'UI/UX design',
    Icon: SiFigma,
    description:
      `Deliver intuitive and visually engaging designs that prioritize user-centric experiences.
Conduct in-depth user research, wireframing, and prototyping to align designs with client goals.
Ensure designs are accessible, interactive, and aligned with current design trends.`,
  },
  {
    id: 4,
    title: 'DevOps',
    Icon: SiFirebase,
    description:
      `Streamline deployment processes through CI/CD pipelines and automated workflows.
Implement scalable infrastructure using tools like Docker, Kubernetes, and cloud platforms like AWS or Azure.
Enhance development efficiency by monitoring and optimizing system performance.`,
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: 'https://www.linkedin.com/',
    imgLocation: '/images/lin.png',
  },
  {
    id: 2,
    linkLocation: 'https://www.freelancer.com/',
    imgLocation: '/images/freelancer.png',
  },
  {
    id: 3,
    linkLocation: 'https://www.upwork.com/',
    imgLocation: '/images/upwork.png',
  },
  {
    id: 4,
    linkLocation: 'https://www.envato.com/',
    imgLocation: '/images/envato.png',
  },
];

export const quoteData: TestimonialData = {
  id: 'quote',
  quote:
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  userName: 'Martin Fowler',
  userProfession: 'Software Developer',
  userImage: { url: '/images/martin.jpg' },
};

export const statisticsData: StatisticsData[] = [
  {
    title: 'stack',
    info: 'Full Stack',
  },
  {
    title: 'projects',
    info: '70+',
  },
  {
    title: 'clients',
    info: '40+',
  },
];
