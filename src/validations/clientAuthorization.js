export function checkAuthorizedEmail(userData, setAuthorized, navigate) {
  if (userData.email !== "" && userData.email !== undefined) {
    setAuthorized(true);
  } else {
    navigate("/auth/register");
  }
}

export function checkAuthorizedCode(userData, setAuthorized, navigate) {
  if (userData.code !== "" && userData.code !== undefined) {
    setAuthorized(true);
  } else {
    navigate("/auth/confirmation");
  }
}
