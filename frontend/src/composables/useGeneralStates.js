import { useQuasar, QSpinnerBall } from "quasar";

const loaderSetting = {
  spinner: QSpinnerBall,
  message: "Hang on...",
  spinnerColor: "primary",
  spinnerSize: 140
};
export default () => {
  const $q = useQuasar();
  const showLoading = () => $q.loading.show(loaderSetting);
  const hideLoading = () => $q.loading.hide();
  const setNotification = (message, type = "success") => {
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
    hideLoading
  };
};
