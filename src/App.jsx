import { useState } from "react"
import { Link, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Farm from "./pages/Farm"
import Dairy from "./pages/Dairy"
import Footer from "./components/Footer"

export default function App() {

  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/dairy" element={<Dairy />} />

      </Routes>
      <Footer />

    </div>
  )
}
