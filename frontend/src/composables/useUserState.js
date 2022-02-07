import { ref } from "vue";
const user = ref({
  firstName: "Abigzoz",
  lastName: "Flitzerman",
  image: "https://cdn.quasar.dev/img/avatar.png",
  isAdmin: true
});

export default () => {
  const logout = () => {
    user.value = {
      firstName: null,
      lastName: null,
      image: null,
      isAdmin: false
    };
    localStorage.removeItem("token");
  };

  return {
    user,
    logout
  };
};
