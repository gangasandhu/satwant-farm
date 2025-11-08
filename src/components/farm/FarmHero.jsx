import { Images } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const FarmHero = () => {
    return (
        <section
            className="relative h-[40vh] min-h-[280px] w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/hero2.jpg)" }}
        >
            <div className="absolute inset-0 bg-black/40" />
            <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow">
                Our Farm
            </h1>
        </section>
    )
}

export default FarmHero