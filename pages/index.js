'use client';
import { ChangeEvent, useState } from 'react';


export default function Home() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files)
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");
  
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch("api/regressor", {
          method: "POST",
          body: formData,
        });
  
        const data = await result.json();
  
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      TESTY
    </div>
  );
}
