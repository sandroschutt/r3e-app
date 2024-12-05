import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes.js";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function AppRoutes() {
  const r3eCookie = Cookies.get("_r3e");

  useEffect(() => {
    if (r3eCookie !== undefined && isPublicPage()) {
      window.location.href = "/app";
    }
  }, []);

  function isPublicPage() {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/auth/login" ||
      window.location.pathname === "/auth/register" ||
      window.location.pathname === "/auth/confirmation" ||
      window.location.pathname === "/auth/address" ||
      window.location.pathname === "/auth/register" ||
      window.location.pathname === "/auth/user-information" ||
      window.location.pathname === "/auth/registration-success" ||
      window.location.pathname === "/auth/recovery"
    ) {
      return true;
    }

    return false;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <AuthRoutes />
            </AuthLayout>
          }
        />
        <Route path="/app/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
