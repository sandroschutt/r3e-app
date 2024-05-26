import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import UserLayout from "../layout/UserLayout";

export default function AppRoutes() {
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
        <Route
          path={"/user/*"}
          element={
            // <UserLayout>
              <UserRoutes />
            // </UserLayout>
          }
        />
        <Route
          path={"/admin/*"}
          element={
            <UserLayout>
              <AdminRoutes />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
