import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
  FaTelegram,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiHiveBlockchain,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Blogs from "./components/blogsPage/Blogs"
import DevBlogs from "./components/blogsPage/DevBlogs"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "prjects",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/KevinGabriel-hub",
    info: "Star my projects on Github",
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "www.linkedin.com/in/kevin-gabriel-maranan-b94024334",
    info: "Let's connect on Linkedin",
  },
  {
    id: 3,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's chat on Discord. My username - megalord1024",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description:
      `I build responsive and engaging user interfaces using React and Next.js, creating seamless experiences across all devices. My focus is on performance, interactivity, and ensuring each client’s design comes to life effectively.`,
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description:
      "I design secure and scalable backends with Node.js, Django, and Express. My services include building APIs and microservices that ensure smooth data flow and strong server-side performance, tailored to fit each client’s needs.",
  },
  {
    id: 3,
    title: "UI/UX design",
    Icon: SiFigma,
    description:
      "I craft user interfaces that are not only visually appealing but also intuitive and easy to use. My focus is on creating designs that guide users effortlessly through digital products, ensuring each interaction is smooth and enjoyable. Whether it’s an app, website, or platform, I design with the end-user in mind to make every experience seamless and engaging.",
  },
  {
    id: 4,
    title: "Blockchain",
    Icon: SiHiveBlockchain,
    description:
      "I specialize in designing user-friendly interfaces for blockchain-based products. With a deep understanding of blockchain technology, I simplify complex concepts, making decentralized platforms accessible to all users. My goal is to make interacting with blockchain intuitive and straightforward, bridging the gap between technology and everyday use.",
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
]
