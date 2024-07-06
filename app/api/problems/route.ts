import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/app/client"
import { collection, addDoc, query, where, getDocs, doc, updateDoc } from "firebase/firestore"

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userId: string = body.data.userId;
  const problemId: string = body.data.problemId;
  const elements: string = body.data.elements;


  try{
    const problemRef = collection(db, "problemData");
    const q = query(problemRef, where("problemId", "==", problemId), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    if(!querySnapshot.empty) {
      const ref = querySnapshot.docs[0].ref.id;
      const docRef = doc(db, "problemData", ref);
      await updateDoc(docRef, {
        elements
      })
    }
    else{
      await addDoc(collection(db, "problemData"), {
        elements,
        problemId,
        userId,
      })
    }
    return NextResponse.json({ status: "success" })
  }


  catch(e){
    return NextResponse.json({e})
  }
}