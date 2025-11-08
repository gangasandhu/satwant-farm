// src/pages/Dairy.jsx
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import DairyHero from "../components/dairy/DairyHero";
import PhotoGrid from "../components/PhotoGrid";
import AddPhotos from "../components/AddPhotos";
import { db } from "../lib/firebaseClient";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

const Dairy = () => {
  const [photos, setPhotos] = useState([]);

  // realtime Firestore listener (shared gallery for everyone)
  useEffect(() => {
    const q = query(
      collection(db, "photos"),
      where("page", "==", "dairy"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setPhotos(list);
      localStorage.setItem("dairyPhotos", JSON.stringify(list)); // optional local cache
    });
    return () => unsub();
  }, []);

  return (
    <div data-theme="light">
      <Navbar2 />
      <DairyHero />
      <AddPhotos page="dairy" folder="dairy" />
      <h1 className="text-center text-3xl font-bold p-4 m-4">Dairy Gallery</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default Dairy;
