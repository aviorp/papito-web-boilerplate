import { useQuasar, QSpinnerGears } from "quasar";
import { ref } from "vue";

const quasarLoadingState = ref(false);
const loaderSetting = {
  spinner: QSpinnerGears,
  message: "Some important process  is in progress. Hang on..."
};
export default () => {
  const $q = useQuasar();
  const toggleLoading = () => {
    quasarLoadingState.value = !quasarLoadingState.value;
    quasarLoadingState.value
      ? $q.loading.show(loaderSetting)
      : $q.loading.hide();
  };

  const setNotification = (message, type = "success") => {
    $q.notify({
      type,
      message,
      timeout: 3000,
      position: "top"
    });
  };

  return {
    toggleLoading,
    setNotification
  };
};
