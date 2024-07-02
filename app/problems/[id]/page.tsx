"use client"

import { useParams } from "next/navigation"
import { Excalidraw } from "@excalidraw/excalidraw"
import ExcalidrawWrapper from "@/components/excalidraw-wrapper"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState } from "@excalidraw/excalidraw/types/types"

type paramType = {
  id: string
}

interface totalPayloadtype{
  elements: readonly ExcalidrawElement[] | null,
}

export default function Id(){
  const params = useParams<paramType>()
  // document.title = String(id);
  let initialPayload: totalPayloadtype|null = null;
  const recievedPayload:string|null = localStorage.getItem(params.id);
  if (recievedPayload) {
    initialPayload = JSON.parse(recievedPayload);
  }
  return <div>
    <ExcalidrawWrapper id={params.id} initialPayload={initialPayload}/>
  </div>
}