import { Routes, Route } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthenticationContext";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import ConfirmationForm from "../components/forms/ConfirmationForm";
import ZipcodeForm from "../components/forms/ZipcodeForm";
import UserInfoForm from "../components/forms/UserInfoForm";
import RegisterSuccess from "../components/RegisterSuccess";

export default function AuthRoutes() {
  return (
    <UserAuthContext>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/confirmation" element={<ConfirmationForm />} />
        <Route path="/address" element={<ZipcodeForm />} />
        <Route path="/user-information" element={<UserInfoForm />} />
        <Route path="/registration-success" element={<RegisterSuccess />} />
        <Route path="/recovery" element={<RegisterForm />} />
      </Routes>
    </UserAuthContext>
  );
}
