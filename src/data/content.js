import minimalArmchair from "../assets/images/sections/minimal-armchair-wall-niche.webp";
import sofaPlant from "../assets/images/sections/sofa-plant-minimal-living-room.webp";

import lightingDesignIcon from "../assets/icons/services/lighting-design.svg";
import interiorDesignIcon from "../assets/icons/services/interior-design.svg";
import outdoorDesignIcon from "../assets/icons/services/outdoor-design.svg";

import brillianceImage from "../assets/images/gallery/sunlit-living-dining-room.webp";

import threeStepsImage from "../assets/images/hero/hero-modern-living-room.webp";

import rocketIcon from "../assets/icons/process/site-visit.svg";
import bulbIcon from "../assets/icons/process/idea-lightbulb.svg";
import tickIcon from "../assets/icons/process/approval-check.svg";

import womanAvatar from "../assets/images/avatars/testimonial-woman-avatar.webp";
import manAvatar from "../assets/images/avatars/testimonial-man-avatar.png";

import emailIcon from "../assets/icons/contact/email.svg";

import footerLogo from "../assets/brand/vivadecor-logo-light.svg";
import fbLogo from "../assets/icons/social/facebook.svg";
import instagramLogo from "../assets/icons/social/instagram.svg";
import linkedinLogo from "../assets/icons/social/linkedin.svg";
import xLogo from "../assets/icons/social/x-twitter.svg";

export const topNavLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services", active: false },
  { label: "Contact", href: "#contact", active: false },
  { label: "Support", href: "#support", active: false },
];

export const hero = {
  title: "Interior Design",
  bodyText:
    "Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication",
  projectsCompleted: 400,
  satisfiedClients: 600,
  uniqueStyles: 100,
  images: [
    { image: minimalArmchair, alt: "minimal-armchair-wall-niche" },
    { image: sofaPlant, alt: "sofa-plant-minimal-living-room" },
  ],
};

export const serviceCards = [
  {
    icon: lightingDesignIcon,
    title: "Lighting Design",
    bodyText:
      "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    icon: interiorDesignIcon,
    title: "Interior Design",
    bodyText:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    icon: outdoorDesignIcon,
    title: "Outdoor Design",
    bodyText:
      "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

export const brilliance = {
  title: "Designing Your Dream With Brilliance",
  bodyText:
    "Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience",

  image: brillianceImage,
  imageAlt: "Designing Your Dream With Brilliance",
};

export const accordion = [
  { id: 1, title: "Living Room Interior Design", bodyText: "Some text" },
  {
    id: 2,
    title: "Commercial Office Room Interior Design",
    bodyText: "Some text",
  },
];

export const threeSimpleSteps = {
  title: "Designing Your Dream in Three Simple Steps",
  image: {
    image: threeStepsImage,
    alt: "hero-modern-living-room",
  },
  steps: [
    {
      id: 1,
      icon: rocketIcon,
      title: "Start Project",
      bodyText:
        "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
    },
    {
      id: 2,
      icon: bulbIcon,
      title: "Craft",
      bodyText:
        "Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space",
    },
    {
      id: 3,
      icon: tickIcon,
      title: "Execute",
      bodyText:
        "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
    },
  ],
};

export const testimonials = {
  title: "What Our Customers Say About Us",
  testimonials: [
    {
      id: 1,
      bodyText:
        "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      author: "Sophie Carter",
      location: "New York, USA",
      avatar: womanAvatar,
    },
    {
      id: 2,
      bodyText:
        "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
      author: "James Bennett",
      location: "Toronto, Canada",
      avatar: manAvatar,
    },
  ],
};

export const newsletter = {
  title: "Subscribe to Our Newsletter for Design Insights",
  bodyText:
    "Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox",
  inputPlaceholder: "Enter your email address",
  buttonText: "Subscribe",
  inputIcon: emailIcon,
};

export const footer = {
  logo: footerLogo,
  bodyText:
    "VivaDecor is your premier destination for luxury and modern interior design",
  socialLogos: [
    { id: 1, logo: fbLogo },
    { id: 2, logo: xLogo },
    { id: 3, logo: instagramLogo },
    { id: 4, logo: linkedinLogo },
  ],
  columns: [
    {
      title: "Our Services",
      links: [
        { id: 1, text: "Interior design" },
        { id: 2, text: "Outdoor design" },
        { id: 3, text: "Lighting design" },
        { id: 4, text: "Office design" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: 1, text: "Reviews" },
        { id: 2, text: "Careers" },
        { id: 3, text: "Pricing" },
        { id: 4, text: "Press inquiries" },
      ],
    },
  ],
  contact: {
    title: "Contact",
    email: "info@vivadecor.com",
    address: "Design Avenue Cityville, CA 90210 United States",
  },
};
