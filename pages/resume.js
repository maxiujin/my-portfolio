import React from "react";
import Header from "../components/Header";

const Resume = () => {
  return (
    <div className="container mx-auto">
      <Header isBlog />
      <div className="flex flex-col items-center justify-center">
        {/* Add a link to the PDF file */}
        <a style={{color:"#006284"}} href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
    </div>
  );
};

export default Resume;
