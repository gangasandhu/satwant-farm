
import Header from "../components/Header"
import AboutUs from "../components/AboutUs"
import QualityControl from "../components/Features/QualityControl"
import Products from "../components/Features/Products"
import Socials from "../components/Socials"
import Footer from "../components/Footer"
import { useEffect } from "react"

export default function Home() {

  return (
    <div>
      <Header />
      <AboutUs />
      <Socials />
      <Products />
      <QualityControl />

    </div>
  )
}
