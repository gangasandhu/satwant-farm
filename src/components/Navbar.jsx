import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-20">
            {/* Social + contact row */}
            <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-3 text-sm text-white/90">
                <div className="hidden md:flex gap-4">
                    <a href="#" aria-label="Facebook" className="hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.59l-.41 2.9h-2.18V22c4.78-.77 8.44-4.93 8.44-9.94Z" /></svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.633 7.997c.013.176.013.353.013.529 0 5.402-4.112 11.636-11.636 11.636-2.315 0-4.463-.676-6.271-1.84.321.038.63.051.963.051a8.223 8.223 0 0 0 5.096-1.755 4.112 4.112 0 0 1-3.835-2.845c.254.038.508.064.775.064.372 0 .745-.051 1.093-.14A4.103 4.103 0 0 1 2.8 9.27v-.051c.547.306 1.18.49 1.852.516a4.105 4.105 0 0 1-1.832-3.416c0-.76.203-1.46.557-2.07a11.663 11.663 0 0 0 8.463 4.292 4.63 4.63 0 0 1-.102-.941A4.106 4.106 0 0 1 16.844 3a8.08 8.08 0 0 0 2.604-.992 4.135 4.135 0 0 1-1.804 2.266A8.22 8.22 0 0 0 20.9 3.7a8.83 8.83 0 0 1-1.267 1.64Z" /></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" /></svg>
                    </a>
                </div>
                <div className="flex gap-6">
                    <a href="brar_satwant@yahoo.in" className="hover:text-white">brar_satwant@yahoo.in</a>
                    <span>+91 99929 63966</span>
                </div>
            </div>

            {/* Main navbar */}
            <div className="navbar px-6 lg:px-12 text-white/95">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-lime-400 text-emerald-900">🌿</span>
                        <span className="font-semibold">Satwant Farm</span>
                    </Link>
                </div>
                <div className="hidden md:flex ">
                    <ul className="menu menu-horizontal gap-2">
                        <li><a className="font-semibold text-lime-300">Home</a></li>
                        <li><Link to="/farm">Our Farm</Link></li>
                        <li><Link to="/dairy">Our Dairy</Link></li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button className="btn btn-ghost" onClick={() => setOpen(v => !v)}>☰</button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 text-white/95">
                    <ul className="menu bg-black/90 rounded w-full">
                        <li><a className="font-semibold text-lime-300">Home</a></li>
                        <li><Link to="/farm">Our Farm</Link></li>
                        <li><Link to="/dairy">Our Dairy</Link></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar