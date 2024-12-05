import Cookies from "js-cookie";

export default function Logout() {
    Cookies.remove("_r3e");
    window.location.href = "/auth/login";
    return;
}