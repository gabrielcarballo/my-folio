interface ContactBoxProps {
  title: string;
  link: string;
  linkText: string;
}


export default function ContactBox({title, link, linkText}: ContactBoxProps) {
  return (
    <>
      <span>{title}</span>
      <div>
        <a href={link}>{linkText}</a>
      </div>
    </>
  )
}