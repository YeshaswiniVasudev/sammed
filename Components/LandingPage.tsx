'use client'
import React from "react";
import { useRouter } from "next/navigation";


const LandingPage = () => {
  const router = useRouter();

  const navigateToPage1 = () => {
    router.push('/LiveCollaborationPage'); // Navigates to Page 1
  };

  const navigateToPage2 = () => {
    router.push('/AIGenerationPage'); // Navigates to Page 2
  };

 
  return (
    <div>
      
      <button onClick={navigateToPage1}>Live Collaboration</button>
      <button onClick={navigateToPage2}>AI Generation</button>
    </div>
  );
};

export default LandingPage;
