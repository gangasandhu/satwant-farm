import { useState } from "react"
import { Link } from "react-router"
import Hero from "./Hero"
import Navbar from "./Navbar"

export default function Header() {

    return (
        <div>
            {/* Top bar over hero */}
            <Navbar />

            {/* Hero */}
            <Hero />
        </div>
    )
}
