import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cpp,
    html,
    css,
    reactjs,
    redux,
    express,
    nodejs,
    mongodb,
    git,
    boot,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    newsapp,
    textutil,
    todolist,
    keeperapp,
    newsletter,
    mysql,
    weatherapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Cloud Computing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Express Js",
      icon: express,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Bootstrap",
      icon: boot,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "My SQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating web dev compition and won prizes."
      ],
    },
    {
      title: "Data Science Enthusiast",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Trying different libraries  and other related technologies to data Science.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing Tablue in data science projects and made it compatible compatibility.",
        "Participating Project Exhibition and ranked 4th place.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Have Deep interest in Data Structures And Alogorithms.",
        "Deep Knowledge about OOP's concept.",
        "Knowledge in databases such as mysql and mongodb",
        "Participating in code reviews and build varoius projects on C++ and python",
      ],
    },
    {
      title: "Cloud Computing",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "I have a deep interest in learing about cloud computing",
        "Although this I am a beginner and have so many thing to learn",
        "I want to build website on cloud servers.",
        "Will be participating in many cloud events.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NewsApp",
      description:
        "Web-based platform that allows users to search for the required and the lastest news they want to fetch.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NewsApi",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: newsapp,
      source_code_link: "https://github.com/AadilGani-22/News_App_ReactJs",
      live_demo_link:"https://github.com/AadilGani-22/News_App_ReactJs",
    },
    {
      name: "TextUtils",
      description:
        "Web-based platform that allows users to search for the required and the lastest news they want to fetch.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: textutil,
      source_code_link: "https://github.com/AadilGani-22/Textutils-ManageYourTexts",
      live_demo_link:"https://mytextsutilities.netlify.app/",
    },
    {
      name: "Weather App",
      description:
        "Web application that enables user to get to know the weather about any location along with the wind speed and humidity of that location",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "weatherapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/AadilGani-22/WeatherApp_ReactJs",
      live_demo_link:"https://forecast-today.netlify.app/",
    },
    {
      name: "To do List",
      description:
        "This app allows you to manage your tasks and make them eaiser to do just add them to your to do list and scrape it when its done.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "embeddedjs",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/AadilGani-22/To-do-List",
      live_demo_link:"https://to-do-list-869l.onrender.com/",
    },
    {
      name: "Keeper App",
      description:
        "This app allows you to keep your notes and following with a title and you can delete whenever you want.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: keeperapp,
      source_code_link: "https://github.com/AadilGani-22/To-do-List",
      live_demo_link:"https://to-do-list-869l.onrender.com/",
    },
    {
      name: "News-Letter SignUp",
      description:
        "This app allows you to sign up for my news-letter and subscibe to my content and when ever I push anything in the letter all the users ",
      tags: [
        {
          name: "mailchimp",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: newsletter,
      source_code_link: "https://github.com/AadilGani-22/NewsLetterSignUp",
      live_demo_link:"https://news-letter-signup-eq85.onrender.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};