import React from "react";

const RecommendationList = ({ recommendations }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full h-full max-w-4xl mx-auto">
    <h2 className="text-xl font-bold text-gray-700 mb-4">Recommended Recipes:</h2>
    {recommendations.length > 0 ? (
      <ul className="space-y-3">
        {recommendations.map((recipe, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-50 transition duration-300"
          >
            <span className="text-gray-600">{recipe}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No recommendations yet. Upload an image to get started!</p>
    )}
  </div>
);

export default RecommendationList;
