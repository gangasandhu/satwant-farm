import { Mail, Phone } from "lucide-react";

// src/modules/Socials.jsx
export default function Socials() {
    return (
        <section className="bg-base-200 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
                <p className="text-amber-500 italic mb-2 text-lg">stay connected</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Follow Satwant Dairy & Agriculture Farm
                </h2>

                <p className="text-base-content/70 max-w-2xl mx-auto mb-10">
                    Watch our daily farming updates, crop care routines, and dairy practices on YouTube.
                    Join us on social media to stay connected with life at the farm.
                </p>
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 p-2 bg-base-200">
                    <a
                        href="mailto:brar_satwant@yahoo.in"
                        className="flex items-center gap-2 text-primary hover:text-primary-focus transition-all"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">brar_satwant@yahoo.in</span>
                    </a>

                    <div className="divider divider-horizontal sm:divider-vertical"></div>

                    <span className="flex items-center gap-2 text-secondary">
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">+91 99929 63966</span>
                    </span>
                </div>

                <div className="flex justify-center gap-6 flex-wrap">
                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/@farmersatwant"
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-red-500 hover:bg-red-600 text-white text-lg px-6 rounded-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 mr-2"
                        >
                            <path d="M10 15l5.19-3L10 9v6zm12-3c0 1.66-.17 3.22-.5 4.69a3 3 0 0 1-2.11 2.11C17.92 19.83 12 20 12 20s-5.92-.17-7.39-.5a3 3 0 0 1-2.11-2.11A24.5 24.5 0 0 1 2 12c0-1.66.17-3.22.5-4.69a3 3 0 0 1 2.11-2.11C6.08 4.17 12 4 12 4s5.92.17 7.39.5a3 3 0 0 1 2.11 2.11C21.83 8.78 22 10.34 22 12z" />
                        </svg>
                        Visit YouTube Channel
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/satwant.brar.393"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                            <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.59l-.41 2.9h-2.18V22c4.78-.77 8.44-4.93 8.44-9.94Z" />
                        </svg>
                        Facebook
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/brar_satwant99/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                        </svg>
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
