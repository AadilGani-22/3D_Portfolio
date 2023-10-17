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
    software,
    fsd,
    cloud,
    datascience,
    newsapp,
    textutil,
    todolist,
    keeperapp,
    newsletter,
    secrets,
    foodwebsite,
    drum,
    varcons,
    webdev,
    cmrit,
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
      company_name: "MERN",
      icon: fsd,
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
      company_name: "Python",
      icon: datascience,
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
      company_name: "C++, Java",
      icon: software,
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
      company_name: "AWS",
      icon: cloud,
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
        "Worked as a full-stack intern for 8-week in the Varcons Technology Pvt Ltd. It was a great experience.",
      name: "Intern",
      designation: "",
      company: "Varcons Tech",
      image: varcons,
    },
    {
      testimonial:
        "Won 2nd Price at Web-development compition at CMRIT By Coding Ninja.",
      name: "2nd Prize",
      designation: "WebItOut",
      company: "Coding Ninja Club",
      image: webdev ,
    },
    {
      testimonial:
        "Awarded 4th place in web dev competition. Project was based on Academic evaluation on fuzzy logic.",
      name: "4th Prize",
      designation: "Project Exhibition",
      company: "CMRIT",
      image: cmrit,
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
        "Web application that enables user to get to know the weather about any location along with wind speed and humidity of that location",
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
          name: "mongodb",
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
        "This app allows you to keep your notes and following with a title and you can delete whenever you want when the task is done and it uses mongodb for backend.",
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
      source_code_link: "https://github.com/AadilGani-22/Keeper_App",
      live_demo_link:"https://take-a-note-apps.netlify.app/",
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
    {
      name: "Secrets Keeper",
      description:
        "This app allows you to share your secrets anonimously. U just have to login and you can share your secrets and know about your friends secrets anonimously. ",
      tags: [
        {
          name: "security #hasing",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: secrets,
      source_code_link: "https://github.com/AadilGani-22/Secrets",
      live_demo_link:"https://secrets-7b73.onrender.com/",
    },
    {
      name: "Food Website",
      description:
        "This is a frontend website for your food delivery app. This allows the customers to choose the food they wish to buy. There are a lot of food variety for the customers.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: foodwebsite,
      source_code_link: "https://github.com/AadilGani-22/Responsive-Food-Website",
      live_demo_link:"https://aadilgani-22.github.io/Responsive-Food-Website/",
    },
    {
      name: "Drum Kits",
      description:
        "This app allows you to listen to the drum notes and make your own. You can listen and enjoy with your friends and share with them to make your day cheerfull.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: drum,
      source_code_link: "https://github.com/AadilGani-22/Drum-Kit",
      live_demo_link:"https://aadilgani-22.github.io/Drum-Kit/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};