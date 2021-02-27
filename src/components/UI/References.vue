<template>
  <div class="box">
    <h1 class="title is-1 mb-6">
      <slot name="title"></slot>
    </h1>
    <p class="subtitle is-4 mb-6">
      <slot name="subtitle"></slot>
    </p>

    <h1 class="content">
      <slot name="content"></slot>
    </h1>
  </div>
</template>
<script>
export default {
  name: "References",
};
</script>
