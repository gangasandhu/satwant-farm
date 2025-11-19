import React, { useState } from 'react'
import Iframe from 'react-iframe'
// ⚠️ If you're using react-router, this should be:
// import { Link } from 'react-router-dom'

const VideoGrid = ({ videos }) => {
    const [showAll, setShowAll] = useState(false)

    const visibleVideos = showAll ? videos : videos.slice(0, 3)

    return (
        <section className="py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            Farm Stories on Video
                        </h2>
                        <p className="text-sm md:text-base text-neutral-600 mt-1">
                            Walk through our fields, dairy, and daily life on the farm.
                        </p>
                    </div>

                    <a
                        href="https://www.youtube.com/@farmersatwant"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm md:text-base font-semibold underline-offset-4 hover:underline"
                    >
                        Visit our YouTube →
                    </a>
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                    {visibleVideos.map((video) => (
                        <div
                            key={video.id}
                            className="aspect-video rounded-xl overflow-hidden shadow-md bg-black"
                        >
                            <Iframe
                                url={video.url}
                                className="w-full aspect-video rounded-xl shadow-md"
                                display="block"
                                allow="fullscreen"
                            />
                        </div>
                    ))}
                </div>

                {videos.length > 3 && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className="px-5 py-2.5 text-sm md:text-base font-semibold border border-black rounded-full hover:bg-black hover:text-white transition"
                        >
                            {showAll ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default VideoGrid
