import { NextRequest, NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/client"

export async function GET(req: NextRequest, context: any) {
  const { params } = context;
  const userId:string = params.userId;
  const problemId:string = params.problemId;


  try {
    const problemRef = collection(db, "problemData");
    const q = query(problemRef, where("problemId", "==", problemId), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    let response: any = [];
    if(querySnapshot) {
      querySnapshot.forEach((doc) => {
        response.push(doc.data())
      })
    }
    if(response.length===0){
      return NextResponse.json({elements: null});
    }
    const elements: object[] = JSON.parse(response[0].elements);
    return NextResponse.json({elements});
  }

  catch (error) {
    console.error('Error adding or updating document:', error);
    return NextResponse.json({hi:"error"});
  }
}