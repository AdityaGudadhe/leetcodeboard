"use client"

import { useEffect, useState } from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import IdLoading from "@/app/problems/[id]/loading"
import ExcalidrawWrapper from "@/components/excalidraw-wrapper"


type totalPayloadtype = {
  elements: readonly ExcalidrawElement[] | null,
} | null;


export default function IdWrapper({ userId, problemId}:{userId: string, problemId: string}){
  const [ loading, setLoading ] = useState(true);
  const [initialPayload, setInitialPayload] = useState<totalPayloadtype>(null);


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(`/api/problems/${userId}/${problemId}`, {
          method: "GET",
        });
        const data = await response.json();
        try{
          setInitialPayload(data);
          setLoading(false);
        }
        catch(err){
          console.log("error parsing payload", err);
        }
      }
      catch(err){
        console.log("error while fetching payload", err);
      }
    }
    fetchData();
  }, [])

  return <div>
    {
        loading ? <IdLoading />
            : <div>
              <ExcalidrawWrapper id={problemId} initialPayload={initialPayload} userId={userId}/>
            </div>
    }
  </div>
}