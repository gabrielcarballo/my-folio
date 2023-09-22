'use client'

export interface ContactBoxProps {
  image: string,
  link: string,
}

const contactBoxes: ContactBoxProps[] = [
  {
    image: "icons8-gmail-logo-48.png",
    link: "mailto:gabrielfpcarballo@gmail.com",
  },
  {
    image: "icons8-linkedin-48.png",
    link: "https://www.linkedin.com/in/gabrielfpcarballo/",
  },
  {
    image: "icons8-github-48.png",
    link: "https://github.com/gabrielcarballo",
 },
  {
    image: "icons8-whatsapp-48.png",
    link: "https://wa.me/34604019862",
  }
];

export default function ContactBox() {
  return (
    <>
      <div className="flex row">
        {contactBoxes.map(({link, image}, index) => {
          return (
            <a key={index} href={link}>
              <img src={image} />
            </a>
          )
        }
      )}
      </div>
    </>

  )
}