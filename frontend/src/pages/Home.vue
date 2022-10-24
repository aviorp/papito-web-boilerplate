<template>
  <page-layout>
    <template #title>Home Page</template>
    <section-layout>
      <template #title
        >Welcome Aboard ! {{ `${user.firstName} ${user.lastName}` }}</template
      >
      <p class="text-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        eligendi.
      </p>
    </section-layout>
    <div class="row q-my-md justify-between">
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>Title 1</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>title 2</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
      <section-layout class="col-4 col-lg-3 col-md-12 col-xs-12">
        <template #title>title 3</template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eligendi.
        </p>
      </section-layout>
    </div>

    <section-layout>
      <template #title>Dummy Table View</template>
      <q-table class="q-my-lg q-mx-auto full-width shadow-10" square />
    </section-layout>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";
import { useMenuState, useUserState } from "@/composables";
import { onMounted } from "vue";

export default {
  name: "Home",
  components: {
    PageLayout,
    SectionLayout
  },
  setup() {
    const { user } = useUserState();
    const { title } = useMenuState();
    onMounted(() => {
      title.value = "Dashboard";
    });

    return {
      user,
      title
    };
  }
};
</script>
