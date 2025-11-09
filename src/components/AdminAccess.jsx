// src/components/AdminAccess.jsx
import { useState } from "react";
import AddPhotos from "./AddPhotos";

const config = {
  adminUserName: import.meta.env.VITE_ADMIN_USERNAME || "satwant",
};

export default function AdminAccess({ page, folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = () => {
    if (username.trim().toLowerCase() === config.adminUserName.toLowerCase()) {
      setIsAdmin(true);
      setIsOpen(false);
      localStorage.setItem("isAdmin", "true");
    } else {
      alert("Invalid admin username.");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  // persist admin state across reload
  useState(() => {
    if (localStorage.getItem("isAdmin") === "true") setIsAdmin(true);
  }, []);

  return (
    <div className="my-6 text-center">
      {!isAdmin && (
        <>
          <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Admin access for uploading photos
          </button>

          {isOpen && (
            <dialog id="admin_modal" className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Enter Admin Username</h3>
                <input
                  type="text"
                  placeholder="Admin username"
                  className="input input-bordered w-full mb-4"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="modal-action">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Continue
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      setIsOpen(false);
                      setUsername("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </>
      )}

      {isAdmin && (
        <div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="badge badge-success">Admin mode</span>
            <button className="btn btn-xs" onClick={handleLogout}>
              Sign out
            </button>
          </div>
          <AddPhotos page={page} folder={folder} />
        </div>
      )}
    </div>
  );
}
