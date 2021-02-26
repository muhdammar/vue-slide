<template>
  <div class="box">
    <h1 class="title is-1 mb-6">
      <slot name="title"></slot>
    </h1>
    <p class="subtitle is-4 mb-6">
      <slot name="subtitle"></slot>
    </p>

    <h1 class="title is-1">
      <slot name="example-title">Example</slot>
    </h1>
    <div class="p-1">
      <slot name="example-code"></slot>
    </div>
    <div class="p-1 mt-2">
      <slot name="example-result"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CodeExample",
};
</script>
