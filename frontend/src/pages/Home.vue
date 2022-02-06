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
      <q-table
        class="q-my-lg q-mx-auto full-width shadow-10"
        square
        :columns="columns"
        :rows="rows"
      />
    </section-layout>
  </page-layout>
</template>

<script>
import { ref } from "vue";
import PageLayout from "@/layouts/PageLayout.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";
import useUserState from "@/composables/useUserState";

export default {
  name: "Home",
  components: {
    PageLayout,
    SectionLayout
  },
  setup() {
    const columns = ref([
      {
        name: "origin",
        align: "center",
        label: "title",
        field: "origin",
        sortable: true
      },
      {
        name: "destination",
        align: "center",
        label: "title",
        field: "destination",
        sortable: true
      },
      {
        name: "fromDate",
        align: "center",
        label: "title",
        field: "fromDate",
        format: val => `${formatDate(val, "DD/MM/YYYY")}`,
        sortable: true
      },
      {
        name: "toDate",
        align: "center",
        label: "title",
        field: "toDate",
        sortable: true
      },
      {
        name: "fromTime",
        align: "center",
        label: "title",
        field: "fromTime",
        sortable: true
      },
      {
        name: "toTime",
        align: "center",
        label: "title",
        field: "toTime",
        sortable: true
      },
      {
        name: "numberOfSeats",
        align: "center",
        label: "title",
        field: "numberOfSeats",
        sortable: true
      },
      {
        name: "vehicleType",
        align: "center",
        label: "title",
        field: "vehicleType",
        sortable: true
      },
      {
        name: "contactName",
        align: "center",
        label: "title",
        field: "contactName",
        sortable: true
      },
      {
        name: "contactPhone",
        align: "center",
        label: "title",
        field: "contactPhone",
        sortable: true
      },
      {
        name: "isPermanent",
        align: "center",
        label: "title",
        field: "isPermanent",
        sortable: true
      },
      {
        name: "status",
        align: "center",
        label: "title",
        field: "isActive",
        sortable: true
      }
    ]);
    const rows = ref([]);
    const { user } = useUserState();
    return {
      rows,
      columns,
      user
    };
  }
};
</script>
