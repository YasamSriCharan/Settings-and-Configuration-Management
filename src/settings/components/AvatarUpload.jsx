import { useState } from "react";

export default function AvatarUpload() {
  const [preview, setPreview] = useState(null);

  function handleFile(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className="avatar-upload">
      <label>Profile Picture</label>

      {preview && (
        <img
          src={preview}
          alt="avatar"
          style={{ width: 80, height: 80, borderRadius: "50%" }}
        />
      )}

      <input type="file" onChange={handleFile} />
    </div>
  );
}