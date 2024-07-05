"use client"

import { useParams } from "next/navigation"
import IdLoading from "@/app/problems/[id]/loading"
import { useAuthListener } from "@/hooks/auth/authStatus"
import UnAuthorized from "@/components/redirect"
import IdWrapper from "@/components/authorized-enrty"

type paramType = {
  id: string
}



export default function Id() {
  const params = useParams<paramType>()
  const { loggedIn , checkingStatus, userId } = useAuthListener();
  document.title = String(params.id);

  return <div>
    {
      checkingStatus ? <IdLoading/>
        : loggedIn ? <IdWrapper userId={userId} problemId={params.id} />
        : <UnAuthorized/>
    }
  </div>
}