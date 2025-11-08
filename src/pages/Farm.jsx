import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Navbar2 from '../components/Navbar2'
import FarmHero from '../components/farm/FarmHero'
import PhotoGrid from '../components/PhotoGrid'
import { farmPhotos } from '../data/farmPhotos'
import AddPhotos from '../components/AddPhotos'

const Farm = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("photos");
        if (saved) {
            try {
                setPhotos(JSON.parse(saved));
            } catch {
                localStorage.removeItem("photos");
            }
        }
    }, []);

    useEffect(() => {
        // only update if photos actually has content
        if (photos && photos.length > 0) {
            localStorage.setItem("photos", JSON.stringify(photos));
        }
    }, [photos]);


    const handleAdd = (photo) => setPhotos((prev) => [photo, ...prev]);
    return (
        <div data-theme="light">

            <Navbar2 />
            <FarmHero />
            <AddPhotos onAdd={handleAdd} />
            <h1 className='text-center text-3xl font-bold p-4 m-4'>Farm Gallery</h1>
            <PhotoGrid photos={photos} />

        </div>
    )
}

export default Farm