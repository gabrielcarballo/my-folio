import Link from "next/link"
import React from "react";

const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    relatedProjects: []
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    relatedProjects: []
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    relatedProjects: []
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    relatedProjects: []
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    relatedProjects: []
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    relatedProjects: []
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    relatedProjects: []
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    relatedProjects: []
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    relatedProjects: []
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    relatedProjects: []
  },
  {
    name: "Mocha",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
    relatedProjects: []
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    relatedProjects: []
  },
  {
    name: "Sequelize",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    relatedProjects: []
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    relatedProjects: []
  },
];

export default function SimpleAbout() {
  return (
      <div>
        <h1>Hello, I'm &nbsp;</h1>
        <span>Gabriel</span>
        <div>
          {/* <h2>I am a passionate full-stack developer about disruptive interfaces, tackling complex problems,
             and the impact that technology has on humanity, especially in the healthcare field
          </h2> */}
          <p>Simple About text</p>
          <Link href="/contacts">Contact Me!</Link>
        </div>
          <h2>My Tech Stack</h2>
        <div className='techstack-container' style={{display: "flex", flexWrap: "wrap", flexDirection: "row", backgroundColor: "red", width: "10em", height: "25em", overflow: ''}}>
          <ul style={{ display: "flex", flexFlow: "row wrap", backgroundColor: 'pink'}}>
            { techStack.map((tech, index) => {
              return (
                <li key={index}>
                  <img src={tech.icon} alt={tech.name} width="40" height="40"/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}