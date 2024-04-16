"use client"
import React, { useState } from "react";

export const Header = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file as File);
   
  };

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Header</h1>
      <p className=" mt-4 ">Store logo</p>

      <div className="border border-dotted border-gray-400  mt-3 w-3/4 py-20 flex justify-center items-center">
        <label htmlFor="upload" className="cursor-pointer">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt={selectedFile?.name}
              className="w-12 h-12"
            />
          ) : (
            <img
              src="https://i.ibb.co/17WqVFD/Screenshot-2024-04-16-at-10-11-18-PM-removebg-preview.png"
              alt="Default Upload Image"
              className="w-12 h-12"
            />
          )}
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
    </div>
  );
};
