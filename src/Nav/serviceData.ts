import { ServiceItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    name: "Mobile Development",
    path: "/mobile-development",
    subItems: [
      { name: "React Development", path: "/mobile-development/react" },
      {
        name: "Flutter Development",
        path: "/mobile-development/flutter",
      },
      {
        name: "Android Development",
        path: "/mobile-development/android",
      },
      {
        name: "iOS Development",
        path: "/mobile-development/ios",
      },
    ],
  },
  {
    name: "Digital Marketing",
    path: "/digitalmarketing",
    // subItems: [
    //   { name: "React Development", path: "/mad/react" },
    //   {
    //     name: "Flutter Development",
    //     path: "/mad/flutter",
    //   },
    //   {
    //     name: "Android Development",
    //     path: "/mad/android",
    //   },
    //   {
    //     name: "iOS Development",
    //     path: "/mad/ios",
    //   },
    // ],
  },
  {
    name: "Web Development",
    path: "/full-stack-development",
    subItems: [
      {
        name: "React JS",
        path: "/full-stack-development/react",
      },
      {
        name: "AI/ML",
        path: "/full-stack-development/aiml",
      },
      {
        name: "Node JS",
        path: "/full-stack-development/node",
      },
      {
        name: "Angular JS",
        path: "/full-stack-development/angular",
      },
      {
        name: "Python",
        path: "/full-stack-development/python",
      },
      {
        name: "PHP",
        path: "/full-stack-development/php",
      },
    ],
  },
  {
    name: "CMS Services",
    path: "/cms",
    subItems: [
      { name: "Shopify", path: "/cms/shopify" },
      { name: "Wordpress", path: "/cms/wordpress" },
    ],
  },
  {
    name: "B2B Services",
    path: "/btbs",
    // subItems: [
    //   { name: "Shopify", path: "/services/cloud-services/aws" },
    //   { name: "Wordpress", path: "/services/cloud-services/aws" },
    // ],
  },
  {
    name: "Recruitment Services",
    path: "/recruitment",
  },
  {
    name: "Ecommerce",
    path: "/ecommerce",
  },
  {
    name: "Education",
    path: "/education",
  },
];
