import { useEffect, useState } from 'react';
import { auth } from "@/app/client"

export const useAuthListener = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUser] = useState<string>("");
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user.uid);
      }

      setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus, userId };
};