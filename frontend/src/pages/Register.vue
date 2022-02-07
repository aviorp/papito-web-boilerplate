<template>
  <q-card>
    <q-card-section>
      <q-avatar size="103px" class="absolute-center shadow-10">
        <img src="@/assets/male_avatar.svg" alt="avatar" />
      </q-avatar>
    </q-card-section>
    <q-card-section>
      <div class="q-pt-xl column">
        <div class="col text-h6 ellipsis flex justify-center">
          <h3 class="text-h5 text-uppercase q-mt-2xl text-weight-regular">
            Sign Up
          </h3>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md q-pa-lg q-mb-md" @submit.prevent="submitForm">
        <q-input label="Username" v-model="form.username" />
        <q-input label="Password" type="password" v-model="form.password" />
        <q-input label="First Name" v-model="form.firstName" />
        <q-input label="Last Name" v-model="form.lastName" />
        <q-input label="Phone" v-model="form.phone" type="phone" />
        <q-file label="Add Image" v-model="form.image">
          <template #prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <div class="q-py-lg">
          <q-btn
            class="full-width"
            color="primary"
            label="Sign Up"
            type="submit"
            rounded
            dark
          />
        </div>
        <div class="row items-center justify-center">
          <router-link class="text-secondary text-center mx-auto" to="/login"
            >Sign in</router-link
          >
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { reactive } from "vue";
import { useGeneralState } from "@/composables";
import { AuthRepository } from "@/api";
import { toBase64 } from "@/utils";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { showLoading, hideLoading, setNotification, handleError } =
      useGeneralState();
    const $router = useRouter();
    const form = reactive({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      image: ""
    });
    const submitForm = async () => {
      showLoading();
      try {
        const isValidForm = Object.values(form).some(value => !!value);
        if (!isValidForm)
          return setNotification("Please fill all fields", "negative");
        form.image = await toBase64(form.image);
        await AuthRepository.register(form);
        setNotification("User Created.");
        $router.push({ name: "login" });
      } catch (error) {
        handleError(error);
      } finally {
        hideLoading();
      }
    };
    return {
      form,
      submitForm
    };
  }
};
</script>

<style lang="scss" scoped>
.q-card {
  margin: 200px auto 50px auto;
  max-width: 500px;
}
</style>
