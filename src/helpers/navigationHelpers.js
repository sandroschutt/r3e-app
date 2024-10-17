export function currentUserRoleProfilesRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/users/${id}` : `/user/profile/${id}`;
}

export function currentUserRoleStudentsRoute(userRole) {
  return userRole === "Admin" ? `/admin/students` : `/user/students`;
}

export function currentUserRoleDevicesRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/devices/${id}` : `/user/devices/${id}`;
}

export function currentUserRoleSingleStudentsRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/students/${id}` : `/user/students/${id}`;
}

export function currentUserRoleSingleSchoolDeviceRequestRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/school-device-requests/${id}` : `/user/school-device-requests/${id}`;
}

export function currentUserRolePickupsRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/pickups/${id}` : `/user/pickups/${id}`;
}

export function currentUserRolePaymentsRoute(userRole, id) {
  return userRole === "Admin" ? `/admin/payments/${id}` : `/user/payments/${id}`;
}
