export function register(user) {
  return !localStorage.getItem(user.email)
    ? localStorage.setItem(user.email, JSON.stringify(user))
    : "failed";
}
export function login(user) {
  let currentUser = localStorage.getItem(user.email);
  currentUser = JSON.parse(currentUser);
  //   console.log(currentUser);
  return currentUser && currentUser.password === user.password
    ? currentUser
    : false;
}

export default {
  register,
};
