import React from 'react'
import Navbar2 from '../components/Navbar2'
import DairyHero from '../components/dairy/DairyHero'
import PhotoGrid from '../components/PhotoGrid'
import { dairyPhotos } from '../data/dairyPhotos'

const Dairy = () => {
  return (
    <div data-theme="light">

            <Navbar2 />
            <DairyHero />
            <h1 className='text-center text-3xl font-bold p-4 m-4'>Dairy Gallery</h1>
            <PhotoGrid photos={dairyPhotos} />

        </div>
  )
}

export default Dairy