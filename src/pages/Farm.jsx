// src/pages/Farm.jsx
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import FarmHero from "../components/farm/FarmHero";
import PhotoGrid from "../components/PhotoGrid";
import AddPhotos from "../components/AddPhotos";
import { db } from "../lib/firebaseClient";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import AdminAccess from "../components/AdminAccess";

const Farm = () => {
  const [photos, setPhotos] = useState([]);

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
      <AdminAccess page="farm" folder="farm" />
      {/* <AddPhotos page="farm" folder="farm" /> */}
      <h1 className="text-center text-3xl font-bold p-4 m-4">Farm Gallery</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
};
export default Farm;
