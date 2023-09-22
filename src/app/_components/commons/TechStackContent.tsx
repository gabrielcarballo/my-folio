import React from 'react';
import styles from '../css/Glassmorphism.module.css'

interface Tech {
  name: string;
  icon: string;
  relatedProjects: string[];
}

const techStack: Tech[] = [
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

export default function TechStackContent() {
  return (
    <table className="table-auto">
      <tbody>
        {techStack.map((tech, index) => (
          index % 5 === 0 && (
            <tr key={index}>
              {techStack.slice(index, index + 5).map((tech, index) => (
                <td key={index} className={`p-4 text-center w-1/5 ${styles.glassmorphism} ${styles.hoverEffect}`}>
                  <div className='flex justify-center rounded-lg'>
                    <img src={tech.icon} alt={tech.name} width="40" height="40" />
                  </div>
                  <span className="block mt-2 font-bold">{tech.name}</span>
                </td>
              ))}
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}