import React, { useState } from "react";
import axios from "axios";

const UploadSection = ({ setRecommendations }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please upload an image!");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("YOUR_BACKEND_URL/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setRecommendations(response.data.recipes);
    } catch (error) {
      alert("Error uploading image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 gap-4 w-full h-full">
      <h2 className="text-lg font-semibold text-gray-700">Upload Your Ingredients</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button
        onClick={handleUpload}
        className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        }`}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Upload and Analyze"}
      </button>
    </div>
  );
};

export default UploadSection;
