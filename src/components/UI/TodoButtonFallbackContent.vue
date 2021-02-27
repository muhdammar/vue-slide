<template>
  <!-- todo-button component template -->
  <button class="btn-primary">
    <slot>Hi im fallback content</slot>
  </button>
</template>

<script>
export default {
  name: "TodoButtonFallbackContent",
};
</script>
