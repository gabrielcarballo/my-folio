import { Metadata } from "next"
import ContactBox from './components/commons/contact';
import Header from '../_components/commons/Header';


const contactBoxes = [
  {
    title: "Mail",
    link: "mailto:gabrielfpcarballo@gmail.com",
    linkText: "gabrielcarballo@gmail.com",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/gabrielfpcarballo/",
    linkText: "https://www.linkedin.com/in/gabrielfpcarballo/",
  },
  {
    title: "GitHub",
    link: "https://github.com/gabrielcarballo",
    linkText: "Gabriel Carballo GitHub",
  },
];


export const metadata: Metadata = {
  title: 'Contact Me! | Gabriel',
  description: 'Contact me via email or social media',
}

export default function Contacts() {
  return (
    <>
    <Header />
    <h1>You can contact me at</h1>
    <ul>
      { contactBoxes.map((contactBox) => {
        return (
          <li>
            <ContactBox title={contactBox.title} link={contactBox.link} linkText={contactBox.linkText} />
          </li>
        )
      })}
    </ul>
    </>
  )
}