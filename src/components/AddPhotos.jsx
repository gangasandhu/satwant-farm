import { useState } from "react";
import { Upload } from "lucide-react";

export default function AddPhotos({ onAdd }) {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleAdd = async () => {
    if (!url && !file) return;

    let src = url;
    if (file) {
      // convert file to base64
      src = await toBase64(file);
    }

    const newPhoto = {
      id: Date.now(),
      src,
      alt: file ? file.name : "New Photo",
    };

    onAdd(newPhoto);
    setUrl("");
    setFile(null);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <div className="card bg-base-200 shadow-md p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 mb-8">
      <input
        type="text"
        placeholder="Enter image URL..."
        className="input input-bordered w-full sm:w-auto flex-1"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div className="divider sm:divider-horizontal">or</div>
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered w-full sm:w-auto"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        className="btn btn-primary flex items-center gap-2"
        onClick={handleAdd}
      >
        <Upload className="w-4 h-4" /> Add Photo
      </button>
    </div>
  );
}
