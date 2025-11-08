// src/modules/WhatWeGrow.jsx
export default function Products() {
    return (
        <section className="w-full mx-auto bg-base-100">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
                <div className="relative text-center mb-12">
                    <img src="/wheat.jpg" alt="" className="hidden md:block absolute -left-2 top-0 h-32 opacity-70" />
                    <img src="/wheat.jpg" alt="" className="hidden md:block absolute [transform:scaleX(-1)] -right-2 top-0 h-32 opacity-70" />

                    <p className="text-amber-500 italic mb-1 text-xl">our produce</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold">What We Grow</h2>
                </div>

                <div className="md:w-[70%] mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {/* Wheat */}
                    <div className="pb-8 border-b border-dashed border-base-300">
                        <div className="flex items-start gap-5">
                            <img src="/crops/wheat.jpg" alt="Wheat" className="w-32 h-24 object-cover rounded" />
                            <div>
                                <h3 className="text-2xl font-extrabold leading-tight">Wheat</h3>
                                <div className="text-lime-500 font-semibold text-sm mb-2">Rabi Crop</div>
                                <p className="text-base-content/70">
                                    Clean, well-stored grains ideal for atta and bread. Sown in winter, harvested with proper drying to keep nutrition intact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Paddy */}
                    <div className="pb-8 border-b border-dashed border-base-300">
                        <div className="flex items-start gap-5">
                            <img src="/crops/paddy.jpg" alt="Paddy (Rice)" className="w-32 h-24 object-cover rounded" />
                            <div>
                                <h3 className="text-2xl font-extrabold leading-tight">Paddy (Rice)</h3>
                                <div className="text-lime-500 font-semibold text-sm mb-2">Kharif Crop</div>
                                <p className="text-base-content/70">
                                    Healthy paddy fields with clean water management and timely transplanting for fuller panicles and better milling quality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Milk */}
                    <div className="pb-8 border-b border-dashed border-base-300">
                        <div className="flex items-start gap-5">
                            <img src="/crops/milk.jpg" alt="Fresh Milk" className="w-32 h-24 object-cover rounded" />
                            <div>
                                <h3 className="text-2xl font-extrabold leading-tight">Fresh Milk</h3>
                                <div className="text-lime-500 font-semibold text-sm mb-2">From Our Dairy</div>
                                <p className="text-base-content/70">
                                    Cows are fed green fodder and kept in clean sheds. Hygienic milking and chilled storage for pure, fresh milk.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vegetables */}
                    <div className="pb-8 border-b border-dashed border-base-300">
                        <div className="flex items-start gap-5">
                            <img src="/crops/vegetables.jpg" alt="Seasonal Vegetables" className="w-32 h-24 object-cover rounded" />
                            <div>
                                <h3 className="text-2xl font-extrabold leading-tight">Seasonal Vegetables</h3>
                                <div className="text-lime-500 font-semibold text-sm mb-2">Kitchen-Fresh</div>
                                <p className="text-base-content/70">
                                    Daily-picked bhindi, gobhi, mirch and more—grown with simple methods, clean water, and timely harvests for taste and freshness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
