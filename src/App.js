import React, { useState } from "react";
import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import RecommendationList from "./components/RecommendationList";
import Footer from "./components/Footer";

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col flex-grow items-center justify-center px-4">
        <div className="flex flex-col w-full max-w-4xl h-full">
          <UploadSection setRecommendations={setRecommendations} />
          <RecommendationList recommendations={recommendations} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
