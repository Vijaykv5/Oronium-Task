"use client"
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: React.ReactNode) => {
    setSelectedItem(item as string);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="mb-6">
      <div className="relative flex gap-x-3">
        {isOpen && (
          <div className="absolute  z-20 bg-white rounded-sm ">
            <ul className="py-2">
              <li>
                <button
                  onClick={() => handleItemClick(<AiFillInstagram size={32} />)}
                  className="flex items-center justify-between px-4 py-1 hover:bg-gray-100 w-full focus:outline-none"
                >
                  <span>
                    <AiFillInstagram size={32} />
                  </span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 7.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293z" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleItemClick(<FaFacebook size={32} />)}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 w-full focus:outline-none"
                >
                  <span>
                    <FaFacebook size={32} />
                  </span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 7.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293z" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleItemClick(<BsTwitterX size={24} />)}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 w-full focus:outline-none"
                >
                  <span>
                    <BsTwitterX size={24} />
                  </span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 7.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        )}

        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-200 rounded-md px-3 py-1 focus:outline-none"
          type="button"
        >
          <span className="font-medium">{selectedItem || "Select"}</span>
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 7.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293z" />
          </svg>
        </button>
        <input
          className="p-4 rounded-md w-2/3 border border-gray-300"
          placeholder="martin.store"
        ></input>
      </div>
    </div>
  );
};

const MultipleDropdowns = () => {
  return (
    <>
      <p className="my-3 text-gray-600">Social Media</p>
      <div className=" gap-x-6">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </>
  );
};

export default MultipleDropdowns;
