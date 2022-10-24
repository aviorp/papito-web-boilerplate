<template>
  <q-page class="q-px-lg q-py-xl">
    <header class="row items-center justify-between">
      <!-- <h4 class="row items-center">
        <slot name="title" />
      </h4> -->
      <div class="row items-center q-gutter-sm">
        <slot name="header-buttons" />
      </div>
    </header>
    <slot />
    <footer class="row justify-end space-left">
      <slot name="action-buttons" />
    </footer>
  </q-page>
</template>

<script>
export default {
  name: "PageLayout"
};
</script>

<style lang="scss" scoped>
* {
  color: $text;
}
</style>
