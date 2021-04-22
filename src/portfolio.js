/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Pratik Aher",
  title: "Pratik Aher",
  subTitle: emoji(
    "A Full Stack Software Developer interested in converting ideas to code. I have professional development experience in Django(Python), Vue.js and Java SpringBoot. Interested in all things related to Technology !"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1g2FuGjnRGh-10maB573rl2a8MpDMpVdp/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pratikaher88",
  linkedin: "https://www.linkedin.com/in/pratikaher88/",
  gmail: "pratikaher88@berkeley.edu",
  instagram: "https://www.instagram.com/pratik__aher",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "FOLLOWING MY PASSION OF BUILDING PRODUCTS WITH TECH!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces and robust backend APIs for your web"
    ),
    emoji("⚡ Development experience in working for a fast paced startup like Tingtun in really small sprints."),
    emoji("⚡ Dockerize entire application for easy deplkoyment and efficent development."),
    emoji("⚡ Professisonal experience in writing code for enterprise applications for a bank link JP morgan."),
    emoji(
      "⚡ Integration of third party services such as AWS and Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/berkeleyLogo.png"),
      subHeader: "Master of Information Management and Systems",
      duration: "August 2021 - May 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "DJ Sanghvi College of Engineering",
      logo: require("./assets/images/DJLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2014 - May 2018",
      desc:
        "Took courses about Data Structures, Operating Systems, and Distributed Systems.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python/Django", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker",
      progressPercentage: "80%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "VueJs",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tingtun AS",
      companylogo: require("./assets/images/tingtunAS.png"),
      date: "Jan 2021 – Present",
      desc:
        "Designed, developed and deployed the Titi feedback tool for a norwegian startup from scratch using Vue.js as frontend and Node as backend to allow users to submit and view feedback.",
      descBullets: [
        "Worked on the migration and enhancements in the existing pdf checker used by the organisation.Worked in Django and Python for these tasks."
      ]
    },
    {
      role: "Software Engineer",
      company: "JPMorgan Chase & Co.",
      companylogo: require("./assets/images/jpmchase.png"),
      date: "Aug 2018 – May 2021",
      desc:
        "Worked as part of OneMargin Team to build applications in Java and SpringBoot",
      descBullets: [
        "Built an internal dashboard to manage package workflow using Django and Vue.",
        "Worked with Java Springboot tasks to support decom of existing PB Margin system, set up kibana dashboard and TIBCO infrastructure.",
        "Developed scripts for column level fixes by parsing the inter-system logic,writing efficient queries, and creating complex SSIS packages to populate system data."
      ]
    },
    {
      role: "Inria LRI",
      company: "Research Intern",
      companylogo: require("./assets/images/inria.png"),
      date: "June 2018 – Aug 2018",
      desc:
        "HCI based project for exploratory experiments on Sensel’s trackpad using its API.",
      descBullets: [
        "Built a gesture recognition system using image classification through OpenCV.",
        "Performed exploratory analysis for creating elaborate visualizations on the trackpad."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tingtunLogo.png"),
      projectName: "TITI Feedback",
      projectDesc: "Feeback tool for nav.no with gitlab integration as well as integration in bookmarklet.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://feedback.titi.tingtun.no/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cadabra.png"),
      projectName: "Cadabra",
      projectDesc: "A social media like app for book lovers for exchanging and selling books.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:"Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JP Morgan Code for Good Runner-up 2017",
      subtitle:
        "Among top 10 teams in the final round amongst 120 teams.",
      image: require("./assets/images/cfg.jpeg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Smart India Hackathon",
      subtitle:
        "Finalist for National Disaster Management Authority at Smart India Hacakthon 2018.",
      image: require("./assets/images/sih.jpg"),
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url:
        //     "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Co-publicity head",
      subtitle: "Co publicty head for the college annual fest trinity",
      image: require("./assets/images/trinity.jpg"),
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    "Also involved in research and have helped my professors publish some awesome stuff.",

  blogs: [
    {
      url:
        "https://turcomat.org/index.php/turkbilmat/article/view/2037/1764",
      title: "NdRAdAC: Need based Access Control Framework for an Emergency Response System",
      description:
        "APRIL-2020: Presented the research paper at the conference proceeding of 12th INDIACom-2018 (IEEE Xplore ISBN: 978-93-80544-28-1)."
    },
    {
      url: "https://ieeexplore.ieee.org/document/8697364",
      title: "Automated Aspect Extraction and Aspect Oriented Sentiment Analysis on Hotel Review Datasets",
      description: "AUG-2018: Presented the research paper at conference proceeding of ICCUBEA-2018 (IEEE Xplore ISBN: 978-1-5386-3852-1)."
    },
    {
      url: "https://ieeexplore.ieee.org/document/8318784/",
      title: "Incremental radius approach for classification",
      description:"DEC-2018: Presented the research paper at the conference proceeding of ICAC3-2017 (IEEE Xplore ISBN: 978-1-5386-5257-2)."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Send a general message or details of a project you'd like me to be a part of and I'll get back to you as soon as possible.",
  // number: "+92-3243454077",
  email_address: "pratikaher88@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
