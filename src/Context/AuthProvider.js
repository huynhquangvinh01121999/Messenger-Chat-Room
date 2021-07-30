import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";

// tạo context API để dùng chung 1 user khi đc gọi từ các component con tới cha
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  React.useEffect(() => {
    // Kiểm tra user có hợp lệ hay ko
    const unsubbscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        // lấy ra các trường cần setUser từ user FB
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setLoading(false);
        history.push("/");
        return;
      } 
      setLoading(false);
      history.push("/login");
    });

    // clean function
    return () => {
      unsubbscibed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={user}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
