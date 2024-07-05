"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";
import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"

type totalPayloadtype = {
  elements: readonly ExcalidrawElement[] | null,
} | null;

export default function ExcalidrawWrapper({ id, initialPayload, userId } : {id:string, initialPayload: totalPayloadtype, userId: string}):ReactElement{
  const [exElements, setexElements] = useState<readonly ExcalidrawElement[] | null>(null);
  useEffect(() => {
    setTimeout(()=>{
      if(exElements==null || exElements?.length===0) return;
      axios.post("/api/problems", {
        data: {
            elements: JSON.stringify(exElements),
            problemId: id,
            userId: userId
          }
      }).then((response)=>{
        return;
      })
    },2000);
  }, [exElements])

  let elements:readonly ExcalidrawElement[] | null = null;
  if(initialPayload){
    elements = initialPayload.elements;
  }
  return (
    <div className="h-[calc(100vh-3.5rem)] z-50">
      <Excalidraw initialData={{
        elements: elements,
      }
      } onChange={(excalidrawElements, appState, files)=>{
          setexElements(excalidrawElements);
      }} />
    </div>
  );
};