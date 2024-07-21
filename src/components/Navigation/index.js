import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getUser, isLoggedIn } from "../../services/auth";
import { ROUTES } from "../../constants/routes";
import Home from "../Home";
import Blog from "../Blog";
import Modal from "../Modal";
import Login from "../Login";
import Signup from "../Signup";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn()) {
      const user = getUser();
      setCurrentUser(user);
      // navigate(ROUTES.BLOG)
    }
  }, []);

  return (
    <>
      <Routes location={previousLocation || location}> 
        <Route path={ROUTES.HOME} element={<Home currentUser={currentUser} />} />
        <Route path={ROUTES.BLOG} element={<Blog currentUser={currentUser} />} />
        {!previousLocation && (
          <>
            <Route path={ROUTES.LOGIN} element={<Home currentUser={currentUser} />} />
            <Route path={ROUTES.SIGNUP} element={<Home currentUser={currentUser} />} />
          </>
        )}
      </Routes>
      {
          previousLocation && (
            <Routes>
              <Route path={ROUTES.LOGIN} element={<Modal><Login /></Modal>} />
              <Route path={ROUTES.SIGNUP} element={<Modal><Signup /></Modal>} />
            </Routes>
          )
        }
    </>
  );
};

export default Navigation;