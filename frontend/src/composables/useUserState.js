import { computed } from "vue";
import { STORAGE_KEYS } from "@/common/constants";
import { getPropFromToken } from "@/common/utils";

export default () => {
  /**
   * @utility  functions
   *  @description Utility functions to get the user data
   */
  const removeToken = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  };
  const setToken = token => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  };
  /**
   * @Computed functions
   */
  const user = computed(() =>
    localStorage[STORAGE_KEYS.TOKEN]
      ? getPropFromToken()
      : {
          firstName: "",
          lastName: "",
          image: "",
          isAdmin: false
        }
  );
  const fullName = computed(
    () => `${user.value.firstName} ${user.value.lastName}`
  );
  const isAdmin = computed(() => user.value.isAdmin);
  const userImage = computed(() => user.value.image);

  return {
    user,
    fullName,
    isAdmin,
    userImage,
    removeToken,
    setToken
  };
};
