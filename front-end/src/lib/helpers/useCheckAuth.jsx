import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCheckAuth = (userType) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("current_user"));
    const token = sessionStorage.getItem("auth_token");
    if (
      !token ||
      !currentUser ||
      (currentUser && currentUser.userType !== userType)
    ) {
      navigate(`/${userType}/login`);
    }
    setUser(currentUser?.user);
  }, [navigate]);

  return user;
};

export default useCheckAuth;
