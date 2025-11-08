// src/components/AddPhotos.jsx
import { useState } from "react";
import { Upload } from "lucide-react";
import { db } from "../lib/firebaseClient";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;

export default function AddPhotos({ onAdd, folder = "farm", page = "farm" }) {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const handleAdd = async () => {
    if (!url && !file) return;
    setBusy(true);

    // 1) Upload to Cloudinary (unsigned)
    const form = new FormData();
    form.append("upload_preset", PRESET);
    form.append("folder", `${folder}/`);
    form.append("file", file ? file : url);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    const { secure_url, public_id } = data;

    const thumb = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,ar_3:4,w_600,q_auto,f_auto/${public_id}.jpg`;

    // 2) Save index to Firestore (shared for everyone)
    await addDoc(collection(db, "photos"), {
      src: secure_url,
      thumb,
      publicId: public_id,
      alt: file ? file.name : "New Photo",
      page,                       // "farm" | "dairy"
      createdAt: serverTimestamp()
    });

    // (Optional) also update local UI instantly
    onAdd?.({ id: Date.now(), src: secure_url, thumb, alt: file ? file.name : "New Photo", publicId: public_id });

    setUrl(""); setFile(null); setBusy(false);
  };

  return (
    <div className="card bg-base-200 shadow-md p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 mb-8">
      <input className="input input-bordered w-full sm:w-auto flex-1"
             placeholder="Enter image URL (optional)…"
             value={url} onChange={(e) => setUrl(e.target.value)} />
      <div className="divider sm:divider-horizontal">or</div>
      <input type="file" accept="image/*"
             className="file-input file-input-bordered w-full sm:w-auto"
             onChange={(e) => setFile(e.target.files[0])} />
      <button className="btn btn-primary flex items-center gap-2" onClick={handleAdd} disabled={busy}>
        <Upload className="w-4 h-4" /> {busy ? "Uploading…" : "Add Photo"}
      </button>
    </div>
  );
}
