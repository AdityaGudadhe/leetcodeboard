"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";
import React, { ReactElement, useEffect, useState } from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"

type totalPayloadtype = {
  elements: readonly ExcalidrawElement[] | null,
} | null;

export default function ExcalidrawWrapper({ id, initialPayload } : {id:string, initialPayload: totalPayloadtype}):ReactElement{
  const [exElements, setexElements] = useState<readonly ExcalidrawElement[] | null>(null);
  useEffect(() => {
    setTimeout(()=>{
      const totalPayload:totalPayloadtype = {
        elements: exElements,
      }
      localStorage.setItem(id, JSON.stringify(totalPayload));
    },2000);
  }, [exElements])
  let elements:readonly ExcalidrawElement[] | null = null;
  if(initialPayload){
    elements = initialPayload.elements;
  }
  return (
    <div className="h-screen w-screen">
      <Excalidraw initialData={{
        elements: elements,
      }
      } onChange={(excalidrawElements, appState, files)=>{
        setexElements(excalidrawElements);
      }} />
    </div>
  );
};