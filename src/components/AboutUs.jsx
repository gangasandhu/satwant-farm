// src/modules/AboutUs.jsx
export default function AboutUs() {
  return (
    <section className="w-full lg:w-[70%] mx-auto bg-base-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 items-stretch gap-8">
          
          {/* Left side text */}
          <div className="flex flex-col justify-center">
            <p className="text-amber-500 italic mb-2 text-lg">about us</p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-base-content">
              Years Of Heritage
            </h2>

            <p className="mt-5 text-base md:text-lg text-base-content/70 max-w-prose">
              Satwant Dairy & Agriculture Implement Farm has been a proud name in farming.
              From cultivating wheat, paddy, javi, and vegetables to raising healthy cows for
              pure milk, our work stays rooted in honesty, effort, and care for the soil.
              <br /><br />
              Every harvest and every drop of milk reflects the hard work of Indian farmers
              who believe in simplicity and quality.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="btn btn-lg rounded-full bg-lime-400 border-none text-emerald-900 hover:bg-lime-300"
              >
                Our History
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative h-72 md:h-auto md:min-h-[420px]">
            <img
              src="/about.jpg"
              alt="Farmer inspecting wheat"
              className="absolute inset-0 w-full h-full object-cover rounded-lg md:rounded-none md:rounded-r-lg"
            />
            <div className="hidden md:block absolute -left-4 top-10 bottom-10 w-px bg-base-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
