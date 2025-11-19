// src/pages/Farm.jsx
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import FarmHero from "../components/farm/FarmHero";
import PhotoGrid from "../components/PhotoGrid";
import AddPhotos from "../components/AddPhotos";
import { db } from "../lib/firebaseClient";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import AdminAccess from "../components/AdminAccess";
import VideoGrid from "../components/VideoGrid";
import { farmVideos } from "../data/farmVideos";
import { farmPhotos } from "../data/farmPhotos";

const Farm = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "photos"),
      where("page", "==", "farm"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setPhotos(list);
      // optional: cache for faster repeat visits
      localStorage.setItem("farmPhotos", JSON.stringify(list));

    });

    return () => unsub();

  }, []);

  return (
    <div data-theme="light">
      <Navbar2 />
      <FarmHero />
      <VideoGrid videos={farmVideos} />
      {/* <AddPhotos page="farm" folder="farm" /> */}
      <h1 className="text-center text-3xl font-bold p-4 m-4">Farm Gallery</h1>
      <PhotoGrid photos={photos} />
      <AdminAccess page="farm" folder="farm" />

    </div>
  );
};
export default Farm;
