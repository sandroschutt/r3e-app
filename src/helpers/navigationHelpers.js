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
