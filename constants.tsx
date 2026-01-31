import { Project, Service } from "./types";

import Tour1 from "./src/assets/Tour1.png";
import Tour2 from "./src/assets/Tour2.png";
import Tour3 from "./src/assets/Tour3.png";
import Mtaa1 from "./src/assets/Mtaa1.png";
import Mtaa2 from "./src/assets/Mtaa2.png";
import Mtaa3 from "./src/assets/Mtaa3.png";
import Cyber1 from "./src/assets/Cyber1.png";
import Cyber2 from "./src/assets/Cyber2.png";
import Cyber3 from "./src/assets/Cyber3.png";
import Numerology1 from "./src/assets/Numerology1.png";
import Numerology2 from "./src/assets/Numerology2.png";
import Glow1 from "./src/assets/Glow1.png";
import Glow2 from "./src/assets/Glow2.png";
import Glow3 from "./src/assets/Glow3.png";
import Fork1 from "./src/assets/fork1.png";
import Fork2 from "./src/assets/fork2.png";
import Fork3 from "./src/assets/fork3.png";
import Gaza1 from "./src/assets/gaza1.png";
import Gaza2 from "./src/assets/gaza2.png";
import Gaza3 from "./src/assets/gaza3.png";
import Uzunguni1 from "./src/assets/uzunguni1.png";
import Uzunguni2 from "./src/assets/uzunguni2.png";
import Uzunguni3 from "./src/assets/uzunguni3.png";

export const SERVICES: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "Custom iOS and Android applications designed to engage users and solve real-world problems.",
    icon: "📱",
  },
  {
    title: "Web Applications",
    description:
      "Responsive and scalable web solutions that deliver exceptional user experiences across all devices.",
    icon: "💻",
  },
  {
    title: "Digital Transformation",
    description:
      "Comprehensive strategies to modernize your business processes and embrace digital innovation.",
    icon: "🌍",
  },
  {
    title: "Tech Consulting",
    description:
      "Expert guidance and support to help you make informed technology decisions for your business.",
    icon: "🤝",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Tours Connect",
    description:
      "This is a tour booking web app where the admin of a specific tour company can add tours, and customers of that company can view and book those tours online. Customers can select tours, enter their personal details, and submit bookings directly through the system. Admins can manage all bookings, view customer information, and track payments easily. The system simplifies tour management for both users and admins, automating processes that were previously manual. It also improves the customer experience by making tour selection, booking, and payment smooth and efficient.",
    imageUrl: Tour1,
    category: "Web System",
    liveUrl: "https://tourconnect-sepia.vercel.app/",
    screenshots: [Tour1, Tour2, Tour3],
  },
  {
    id: "2",
    title: "MtaaMarket Ecommerce App",
    description:
      "MtaaMarket is a simple local marketplace that helps small sellers and nearby buyers connect using WhatsApp. Sellers can sign up, add products, and manage their shop from an easy dashboard, while buyers browse products, visit seller shops, and contact sellers easily. An admin manages sellers, products, and categories, making MtaaMarket easy to use and friendly for small businesses.",
    imageUrl: Mtaa1,
    category: "Mobile App",
    screenshots: [Mtaa1, Mtaa2, Mtaa3],
  },
  {
    id: "3",
    title: "Fashion designer Website",
    description:
      "A stylish and elegant portfolio website designed to showcase fashion collections. It features a high-quality image gallery, latest designs, and an easy way for clients to get in touch.",
    imageUrl: Gaza1,
    category: "Portfolio Website",
    liveUrl: "https://gaza-boe.vercel.app/",
    screenshots: [Gaza1, Gaza2, Gaza3],
  },
  {
    id: "4",
    title: "Golden Fork Restaurant Website",
    description:
      "A modern restaurant website featuring a dynamic menu display, online reservations, and a showcase of the restaurant's best dishes and ambiance.",
    imageUrl: Fork1,
    category: "Web Application",
    screenshots: [Fork1, Fork2, Fork3],
  },
  {
    id: "5",
    title: "Uzunguni City Park Restaurant Website",
    description:
      "A dynamic and user-friendly website for Uzunguni City Park Restaurant. It highlights the menu, location, and special events, offering customers a seamless browsing experience.",
    imageUrl: Uzunguni1,
    category: "Web Application",
    screenshots: [Uzunguni1, Uzunguni2, Uzunguni3],
  },
  {
    id: "6",
    title: "EcoGlow- Ecommerce Website",
    description:
      "This is a simple frontend website designed for selling solar-powered products. Users can browse products, view details, and navigate the store with ease. The project focuses on creating a clean and modern interface for online shopping. It emphasizes usability and user experience, making it easy for customers to find and purchase products. Although it’s frontend-only, it demonstrates a professional and responsive e-commerce layout.",
    imageUrl: Glow1,
    category: "Enterprise Software",
    screenshots: [Glow1, Glow2, Glow3],
  },
  {
    id: "7",
    title: "Numerology Website",
    description:
      "This is a personalized numerology and life insights platform. Users can enter their birth date or name to get numerology reports. The site calculates life paths, predictions, and other numerology data. It presents the results in a clean and interactive way. Users can explore different numerology tools and charts.",
    imageUrl: Numerology1,
    category: "Web Application",
    liveUrl: "https://example.com/uni-dash",
    screenshots: [Numerology1, Numerology2],
  },
  {
    id: "8",
    title: "Cyber Security- Website Automation",
    description:
      "This project automates repetitive tasks on websites using Python and Selenium. It can log in, fill forms, navigate pages, and perform actions automatically, saving time and reducing errors. The automation makes processes faster and easier compared to doing everything by hand. It is useful for testing websites or performing regular tasks efficiently. The system is simple to use and improves productivity by letting the computer do the repetitive work.",
    imageUrl: Cyber1,
    category: "Enterprise Software",
    screenshots: [Cyber1, Cyber2, Cyber3],
  },
  
];
