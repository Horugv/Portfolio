import getCurrentAge from "./helpers/getCurrentAge";

export const defaultPath = "/Portfolio";

export const aboutInfo = {
  mainInfo: [
    {
      title: "Age",
      desc: getCurrentAge({
        year: 1997,
        month: 6,
        day: 19,
      }),
    },
    {
      title: "Residence",
      desc: "Ukraine",
    },
    {
      title: "Addres",
      desc: "Ivano-Frankivsk, Ukraine",
    },
  ],
  experienceInfo: [
    {
      icon: "icon-e-commerce",
      title: "E-commerce projects",
      desc: "During my work I completed two E‑commerce project using NextJS.",
    },
    {
      icon: "icon-admin-panel",
      title: "Admin panel",
      desc: "I had developed several admin panel using React using CoreUI and Material UI libraries.",
    },
    {
      icon: "icon-embed2",
      title: "Create layout",
      desc: "I had completed 10+ layout from Figma, Avocode, Zeplin, Adobe PS, Adobe XD using HTML, CSS, jQuery for CMR systems (only layout, without integration).",
    },
  ],
};

export const resumeInfo = {
  experience: [
    {
      date: "2020 - Present",
      title: "Front-end developer",
      company: "Web-systems Solutions",
      desc: "Сreation layouts for CRM systems using HTML/SCSS/jQuery and create React/NextJS apps.",
      active: true,
    },
  ],
  eductaions: [
    {
      date: "2016 - 2021",
      title: "Computer Science",
      company: "Kamenetz-Podolsk National University nomine Ivan Ogienko",
      desc: "",
      active: false,
    },
  ],
  coding: [
    {
      title: "HTML5",
      percent: 95,
    },
    {
      title: "CSS3",
      percent: 85,
    },
    {
      title: "JavaScript",
      percent: 80,
    },
    {
      title: "jQuery",
      percent: 75,
    },
    {
      title: "React",
      percent: 80,
    },
  ],
  language: [
    {
      title: "Ukrainian",
      count: 10,
      activeCount: 10,
    },
    {
      title: "Russian",
      count: 10,
      activeCount: 9,
    },
    {
      title: "English",
      count: 10,
      activeCount: 3,
    },
  ],
  knowledge: [
    "HTML, CSS, JS",
    "BEM",
    "Pug",
    "SCSS | Stylus | Less",
    "jQuery",
    "React",
    "React Hooks",
    "React Redux",
    "React Context",
    "NextJS",
    "Rest API",
    "Git",
    "npm, yarn",
    "Gulp",
    "Webpack 4",
  ],
};

export const worksInfo = {
  works: [
    {
      title: "TEST",
      path: `${defaultPath}/media/bg-test.jpg`,
      technology: "React, html, css",
    },
  ],
};

export const contactInfo = {
  mainInfo: [
    {
      title: "Address",
      desc: "Ivano-Frankivsk, Ukraine",
    },
    {
      title: "Email",
      desc: "Horugv16@gmail.com",
    },
    {
      title: "Phone",
      desc: "+380 97 909 3001",
    },
  ],
};
