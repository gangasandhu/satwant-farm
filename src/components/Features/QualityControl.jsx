// src/modules/QualityControl.jsx
export default function QualityControl() {
    return (
        <section className="w-full bg-base-100">
            <div className="container mx-auto px-8 lg:px-12 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left: big photo with badge */}
                    <div className="relative">
                        <img
                            src="/quality-left.jpg"
                            alt="Hands holding fresh grains"
                            className="w-full h-[420px] md:h-[520px] object-cover rounded-lg"
                        />
                        {/* Badge block */}
                        <div className="absolute -bottom-6 left-6 md:left-8 bg-lime-400 text-emerald-900 rounded-md shadow-md">
                            <div className="px-6 py-5 leading-none">
                                <div className="text-[10px] tracking-wide uppercase opacity-80">H2  No Margins</div>
                                <div className="text-4xl md:text-5xl font-extrabold leading-none">100%</div>
                                <div className="mt-1 font-semibold">Proven<br />Quality</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: text + icons */}
                    <div>
                        <p className="text-amber-500 italic mb-2 text-lg">we care</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6">
                            Quality Control
                        </h2>

                        {/* Round icon bullets */}
                        <div className="flex items-start gap-6 mb-6">
                            <div className="text-center">
                                <div className="mask mask-circle w-16 h-16 overflow-hidden border border-base-300">
                                    <img src="/icon-disease.jpg" alt="Disease control" className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-2 text-sm font-semibold">Disease<br />Control</div>
                            </div>
                            <div className="text-center">
                                <div className="mask mask-circle w-16 h-16 overflow-hidden border border-base-300">
                                    <img src="/icon-grain.jpg" alt="Clean grains" className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-2 text-sm font-semibold">Clean<br />Grains</div>
                            </div>
                            <div className="text-center">
                                <div className="mask mask-circle w-16 h-16 overflow-hidden border border-base-300">
                                    <img src="/icon-water.jpg" alt="Water purity" className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-2 text-sm font-semibold">Water<br />Purity</div>
                            </div>
                        </div>

                        <p className="text-base-content/70 leading-7 mb-8">
                            At Satwant Dairy & Agriculture Implement Farm, we believe quality begins in the soil and ends at your table. Every crop—whether wheat, paddy, javi, or vegetables—is grown with care, using clean water and natural methods that protect the land. Our cows are raised in a healthy, open environment, fed fresh fodder, and milked with hygiene and respect. From planting to harvesting, from feeding to milking, every step is done by hand with honesty, patience, and love for farming
                        </p>

                        <a
                            href="#"
                            className="btn btn-lg rounded-full bg-lime-400 border-none text-emerald-900 hover:bg-lime-300"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
