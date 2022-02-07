import { useQuasar, QSpinnerRings } from "quasar";
import { useRouter } from "vue-router";
const loaderSetting = {
  spinner: QSpinnerRings,
  spinnerColor: "primary",
  spinnerSize: 120
};

export default () => {
  const $q = useQuasar();
  const router = useRouter();
  const showLoading = () => $q.loading.show(loaderSetting);
  const hideLoading = () => $q.loading.hide();
  const handleError = error => {
    console.error(error);
    setNotification(
      error?.response?.data?.message || "Network Error.",
      "negative"
    );
  };
  const setNotification = (message, type = "positive") => {
    $q.notify({
      type,
      message,
      timeout: 3000,
      position: "top"
    });
  };
  return {
    setNotification,
    showLoading,
    hideLoading,
    handleError,
    router
  };
};
