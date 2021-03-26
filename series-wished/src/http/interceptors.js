import store from "../store";

export default request => {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch("auth/ActionSignOut");
      window._Vue.$router.push({ name: "login" });
    }
  };
};
