<template>
  <div class="column justify-center items-center relative">
    <q-card
      :style="$q.screen.lt.sm ? { width: '80%' } : { width: '40%' }"
      class="q-ma-auto absolute-center"
    >
      <q-card-section>
        <q-avatar size="103px" class="absolute-center shadow-10">
          <img src="@/assets/male_avatar.svg" alt="avatar" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="q-pt-xl column">
          <div class="col ellipsis flex justify-center">
            <h3
              class="text-h5 text-uppercase q-mt-2xl text-weight-regular text-text"
            >
              Sign in
            </h3>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form
          class="q-gutter-md q-pa-lg q-mb-md"
          @submit.prevent="submitForm"
        >
          <q-input label="Username" v-model="username" />
          <q-input label="Password" type="password" v-model="password" />

          <div class="q-py-lg">
            <q-btn
              class="full-width"
              color="primary"
              label="Login"
              type="submit"
              rounded
              dark
            />
            <div class="text-center q-mt-lg q-gutter-lg">
              <router-link class="text-secondary" to="/login"
                >Forgot Password</router-link
              >
              <router-link class="text-secondary" to="/register"
                >Register</router-link
              >
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserState, useGeneralState } from "@/composables";
import { AuthRepository } from "@/api";
import { getPropFromToken } from "@/utils";
export default defineComponent({
  name: "login",
  setup() {
    const { user } = useUserState();
    const { showLoading, hideLoading, handleError } = useGeneralState();
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const submitForm = async () => {
      showLoading();
      try {
        const token = await AuthRepository.login({
          username: username.value,
          password: password.value
        });
        localStorage.token = token;
        user.value = getPropFromToken();
        router.push("/");
      } catch (error) {
        handleError(error);
      } finally {
        hideLoading();
      }
    };
    return {
      username,
      password,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped></style>
