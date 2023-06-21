import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth"

const useAuth = () => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      setLoading(true)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setLoading(false);
          console.log(user)
        } else {
          setUser(null);
          setLoading(false)
          console.log("no user")
        }
      });
    }, [user]);
  
    return {user, loading};
}

export default useAuth;
  