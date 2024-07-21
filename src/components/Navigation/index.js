import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getUser, isLoggedIn } from "../../services/auth";
import { ROUTES } from "../../constants/routes";
import Home from "../Home";
import Blog from "../Blog";

const Navigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(ROUTES.BLOG)
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Home />} />
        <Route path={ROUTES.SIGNUP} element={<Home  />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
      </Routes>
    </>
  );
};

export default Navigation;