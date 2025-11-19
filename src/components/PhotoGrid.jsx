// src/components/PhotoGrid.jsx
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

export default function PhotoGrid({ photos }) {
  const [index, setIndex] = useState(-1);

  if (!photos)
    return <LoadingSpinner />

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {photos && photos.length > 0 ? photos.map((p, i) => (
          <figure
            key={p.id}
            className="relative group mb-4 break-inside-avoid overflow-hidden rounded-xl bg-base-200 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <img
              src={p.src}
              alt={p.alt || ""}
              className="w-full h-auto align-middle transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="absolute top-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn btn-xs md:btn-sm btn-ghost bg-base-100/90 rounded-full backdrop-blur-sm">
                <Image className="w-4 h-4" />
              </button>
            </div>
            {p.alt && (
              <figcaption className="absolute left-3 bottom-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.alt}
              </figcaption>
            )}
          </figure>
        )) :
          <div className="w-full">No photos Added</div>}
      </div>

      {/* Lightbox modal */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={(photos || []).map((p) => ({ src: p.src, description: p.alt }))}
      />
    </section>
  );
}
