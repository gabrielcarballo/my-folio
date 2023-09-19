import { Metadata } from "next"
import ContactBox from './components/commons/ContactBox';
import Header from '../_components/commons/Header';



export const metadata: Metadata = {
  title: 'Contact Me! | Gabriel',
  description: 'Contact me via email or social media',
}

export default function Contacts() {
  return (
    <>
      <Header />
      <h1>You can contact me at</h1>
      <ContactBox />

    </>
  )
}