"use client";
import React, { useState } from "react";
import { FiCalendar, FiEdit, FiLink } from "react-icons/fi";

const AddProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/icons/icon1.png", "/icons/icon2.png", "/icons/icon3.png",
    "/icons/icon4.png", "/icons/icon5.png", "/icons/icon6.png",
    "/icons/icon7.png", "/icons/icon8.png", "/icons/icon9.png",
  ];

  const handleImageSelect = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Project</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side Form */}
        <div className="flex flex-col w-full md:w-2/3 gap-5">

          {/* Project Name */}
          <div>
            <label className="text-gray-700 block mb-1">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-gray-700 block mb-1">Starts</label>
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="input input-bordered w-full pr-10"
                />
                <FiCalendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="w-full">
              <label className="text-gray-700 block mb-1">Dead Line</label>
              <div className="relative">
                <input
                  type="date"
                  value={deadLine}
                  onChange={(e) => setDeadLine(e.target.value)}
                  className="input input-bordered w-full pr-10"
                />
                <FiCalendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="text-gray-700 block mb-1">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="select select-bordered w-full"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-700 block mb-1">Description</label>
            <textarea
              placeholder="Add some description of the project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full h-28"
            />
          </div>
        </div>

        {/* Right Side - Select Image */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-gray-700 font-semibold mb-3">Select image</h3>
            <p className="text-sm text-gray-400 mb-4">
              Select or upload an avatar for the project (available formats: jpg, png)
            </p>
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(img)}
                  className={`w-16 h-16 rounded-lg border ${selectedImage === img ? "border-blue-500" : "border-gray-300"} flex items-center justify-center`}
                >
                  <img src={img} alt={`Avatar ${index}`} className="w-10 h-10 object-cover" />
                </button>
              ))}
              {/* Upload Icon */}
              <button className="w-16 h-16 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">+</span>
              </button>
            </div>
          </div>

          {/* Edit and Link Buttons */}
          <div className="flex gap-4">
            <button className="btn btn-outline flex-1">
              <FiEdit className="mr-2" /> Edit
            </button>
            <button className="btn btn-outline flex-1">
              <FiLink className="mr-2" /> Link
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6">
          Save Project
        </button>
      </div>
    </div>
  );
};

export default AddProjectForm;

