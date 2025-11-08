import React, { useState } from "react";
import { Link } from "react-router";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
        
      {/* 🌾 Main navbar */}
      <div className="navbar px-6 lg:px-12 bg-base-100/10 backdrop-blur-md">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl gap-2 text-lime-300 hover:text-lime-400"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-lime-400 text-emerald-900">
              🌿
            </span>
            <span className="font-semibold">Satwant Farm</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <a className="text-lime-300 font-semibold">Home</a>
            </li>
            <li>
              <a>Our Farm</a>
            </li>
            <li>
              <a>Our Dairy</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>
                Photos <span className="text-lime-300">+</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 📱 Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm border-t border-base-content/20">
          <ul className="menu p-4 text-base font-medium">
            <li>
              <a className="text-lime-300 font-semibold">Home</a>
            </li>
            <li>
              <a>Our Farm</a>
            </li>
            <li>
              <a>Our Dairy</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>
                Photos <span className="text-lime-300">+</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
