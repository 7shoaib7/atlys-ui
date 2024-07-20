import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser, isLoggedIn } from "../../services/auth";
import { ROUTES } from "../../constants/routes";
import Home from "../Home";
import Blog from "../Blog";

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn()) {
      const user = getUser();
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home currentUser={currentUser} />} />
        <Route path={ROUTES.LOGIN} element={<Home currentUser={currentUser} />} />
        <Route path={ROUTES.SIGNUP} element={<Home currentUser={currentUser} />} />
        <Route path={ROUTES.BLOG} element={<Blog currentUser={currentUser}/>} />
      </Routes>
    </>
  );
};

export default Navigation;