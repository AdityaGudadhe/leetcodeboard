"use client"

import { useParams } from "next/navigation"
import { Excalidraw } from "@excalidraw/excalidraw"
import ExcalidrawWrapper from "@/components/excalidraw-wrapper"

type paramType = {
  id: string
}

export default function Id(){
  const params = useParams<paramType>()
  const id = Number(params.id);
  // document.title = String(id);
  return <div>
    <ExcalidrawWrapper/>
  </div>
}