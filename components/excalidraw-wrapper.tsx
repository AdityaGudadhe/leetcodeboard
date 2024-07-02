"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";

// import "@excalidraw/excalidraw/index.css";
import React from "react"

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{height:"500px", width:"1000px"}}>
      <Excalidraw />
    </div>
  );
};
export default ExcalidrawWrapper;