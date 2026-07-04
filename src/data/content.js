import minimalArmchairImage from "../assets/images/sections/minimal-armchair-wall-niche.webp";
import sofaPlantImage from "../assets/images/sections/sofa-plant-minimal-living-room.webp";

import lightingDesignServiceIcon from "../assets/icons/services/lighting-design.svg";
import interiorDesignServiceIcon from "../assets/icons/services/interior-design.svg";
import outdoorDesignServiceIcon from "../assets/icons/services/outdoor-design.svg";

import sunlitLivingDiningRoomImage from "../assets/images/gallery/sunlit-living-dining-room.webp";

import modernLivingRoomHeroImage from "../assets/images/hero/hero-modern-living-room.webp";

import siteVisitStepIcon from "../assets/icons/process/site-visit.svg";
import ideaLightbulbStepIcon from "../assets/icons/process/idea-lightbulb.svg";
import approvalCheckStepIcon from "../assets/icons/process/approval-check.svg";

import sophieCarterAvatar from "../assets/images/avatars/testimonial-woman-avatar.webp";
import jamesBennettAvatar from "../assets/images/avatars/testimonial-man-avatar.png";

import emailInputIcon from "../assets/icons/contact/email.svg";

import vivaDecorHeaderLogo from "../assets/brand/vivadecor-logo-dark.svg";
import vivaDecorFooterLogo from "../assets/brand/vivadecor-logo-light.svg";
import facebookSocialIcon from "../assets/icons/social/facebook.svg";
import instagramSocialIcon from "../assets/icons/social/instagram.svg";
import linkedinSocialIcon from "../assets/icons/social/linkedin.svg";
import xTwitterSocialIcon from "../assets/icons/social/x-twitter.svg";

export const navigationLinks = [
  { label: "Home", url: "#home" },
  { label: "Services", url: "#services" },
  { label: "Contact", url: "#contact" },
  { label: "Support", url: "#support" },
];

export const brandAssets = {
  headerLogo: {
    src: vivaDecorHeaderLogo,
    alt: "VivaDecor",
  },
  footerLogo: {
    src: vivaDecorFooterLogo,
    alt: "VivaDecor",
  },
};

export const heroSection = {
  title: "Interior Design",
  description:
    "Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication",
  projectsCompleted: 400,
  satisfiedClients: 600,
  uniqueStyles: 100,
  galleryImages: [
    {
      src: minimalArmchairImage,
      alt: "Minimal armchair beside a sculpted wall niche in a modern interior",
    },
    {
      src: sofaPlantImage,
      alt: "Minimal living room with a soft sofa and indoor plant",
    },
  ],
};

export const serviceItems = [
  {
    id: "lighting-design-service",
    icon: lightingDesignServiceIcon,
    title: "Lighting Design",
    description:
      "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    id: "interior-design-service",
    icon: interiorDesignServiceIcon,
    title: "Interior Design",
    description:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    id: "outdoor-design-service",
    icon: outdoorDesignServiceIcon,
    title: "Outdoor Design",
    description:
      "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

export const designShowcaseSection = {
  title: "Designing Your Dream With Brilliance",
  description:
    "Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience",
  image: {
    src: sunlitLivingDiningRoomImage,
    alt: "Sunlit living and dining room with warm neutral interior styling",
  },
};

export const designTopics = [
  {
    id: "living-room-interior-design",
    title: "Living Room Interior Design",
    description:
      "Create a calm, elegant living area with balanced layouts, layered textures, and furniture selected for both comfort and style.",
  },
  {
    id: "commercial-office-room-interior-design",
    title: "Commercial Office Room Interior Design",
    description:
      "Design productive office spaces that support collaboration, reflect your brand, and make everyday work feel more refined.",
  },
];

export const processSection = {
  title: "Designing Your Dream in Three Simple Steps",
  illustration: {
    src: modernLivingRoomHeroImage,
    alt: "Modern living room with layered seating and natural light",
  },
  steps: [
    {
      id: 1,
      icon: siteVisitStepIcon,
      title: "Start Project",
      description:
        "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
    },
    {
      id: 2,
      icon: ideaLightbulbStepIcon,
      title: "Craft",
      description:
        "Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space",
    },
    {
      id: 3,
      icon: approvalCheckStepIcon,
      title: "Execute",
      description:
        "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
    },
  ],
};

export const testimonialSection = {
  title: "What Our Customers Say About Us",
  items: [
    {
      id: 1,
      quote:
        "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      author: "Sophie Carter",
      location: "New York, USA",
      avatar: sophieCarterAvatar,
    },
    {
      id: 2,
      quote:
        "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
      author: "James Bennett",
      location: "Toronto, Canada",
      avatar: jamesBennettAvatar,
    },
  ],
};

export const newsletterSection = {
  title: "Subscribe to Our Newsletter for Design Insights",
  description:
    "Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox",
  emailPlaceholder: "Enter your email address",
  submitLabel: "Subscribe",
  emailIcon: emailInputIcon,
};

export const footerContent = {
  logo: brandAssets.footerLogo,
  description:
    "VivaDecor is your premier destination for luxury and modern interior design",
  socialLinks: [
    { id: 1, icon: facebookSocialIcon },
    { id: 2, icon: xTwitterSocialIcon },
    { id: 3, icon: instagramSocialIcon },
    { id: 4, icon: linkedinSocialIcon },
  ],
  linkGroups: [
    {
      title: "Our Services",
      links: [
        { id: 1, label: "Interior design", url: "#interior-design-service" },
        { id: 2, label: "Outdoor design", url: "#outdoor-design-service" },
        { id: 3, label: "Lighting design", url: "#lighting-design-service" },
        {
          id: 4,
          label: "Office design",
          url: "#commercial-office-room-interior-design",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { id: 1, label: "Reviews", url: "#reviews" },
        { id: 2, label: "Careers", url: "#support" },
        { id: 3, label: "Pricing", url: "#support" },
        { id: 4, label: "Press inquiries", url: "#contact" },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    email: "info@vivadecor.com",
    address: "Design Avenue Cityville, CA 90210 United States",
  },
  credit: {
    design: {
      label: "design",
      url: "https://www.figma.com/design/ZuDiW5UAXQwDKPYVb1ufzC/Interior-Design-Website-UI-Template--Community-?node-id=0-1&p=f&t=Knn8agO63cf4HZQa-0",
    },
    designer: {
      label: "DSCODE",
      url: "https://www.figma.com/files/team/1048295197426368725/resources/community/@dscodestudio?fuid=1048295191527913563",
    },
    code: {
      label: "code",
      url: "https://github.com/aricansoft2022/portfolio.interiordesigner",
    },
    developer: {
      label: "Halit Turan ARICAN",
      url: "https://turanarican.com",
    },
  },
};
