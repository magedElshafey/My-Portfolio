import React from "react";
import { jsPDF } from "jspdf";
const Resume = () => {
  function SaveResume() {
    const doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/cFRrMyW/Maged-elshafey-c-1-1.png",
      "PNG",
      0,
      0,
      417,
      653
    );
    doc.save("magedResume.pdf");
  }
  return (
    <button onClick={SaveResume} className="mainBtn mt-5">
      Download my CV
    </button>
  );
};

export default Resume;
