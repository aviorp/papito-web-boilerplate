<template>
  <q-card
    class="q-pa-lg q-my-md shadow-2"
    style="min-width: 250px"
    bordered
    square
  >
    <header class="row items-center justify-between">
      <h5 class="row items-center">
        <slot name="title"></slot>
      </h5>
      <div class="row items-center q-gutter-md">
        <slot name="header-buttons"></slot>
      </div>
    </header>
    <div class="row q-col-gutter-md q-mt-md justify-between">
      <slot></slot>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "SectionLayout"
};
</script>
