import { Images } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <section
            className="relative h-[72vh] min-h-[520px] w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/hero.jpg)" }}
        >
            <div className="absolute inset-0 bg-black/50" />
            {/* Subtle top-to-bottom gradient like screenshot */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

            <div className="relative z-10 px-6 lg:px-12 max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    Satwant <span className='text-lime-400'>Dairy &amp; Agriculture </span>
                    Implement Farm
                </h1>
                <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90">
                    Simple Farming. Honest Food.
                </p>
                <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90">
                    We grow what we eat — wheat, paddy, fruits, and fresh vegetables from our family farm and care for our cows to provide pure, fresh milk every day.
                </p>

                <div className="mt-8 flex gap-2 justify-center">
                    <Link to="/farm" className="btn btn-lg rounded-full bg-lime-400 border-none text-emerald-900 hover:bg-lime-300">
                        <Images />
                        Farm Photos
                    </Link>
                    <Link to="/dairy" className="btn btn-lg rounded-full bg-emerald-400 border-none text-emerald-900 hover:bg-emerald-300">
                        <Images />
                        Dairy Photos
                    </Link>
                </div>
                <div className="flex md:hidden gap-6 mt-4 p-4 justify-center">
                    <a href="satwant@webflow.io" className="hover:text-white">info@webflow.io</a>
                    <span>+91 99929 63966</span>
                </div>
            </div>
        </section>
    )
}

export default Hero