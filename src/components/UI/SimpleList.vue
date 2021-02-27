<template>
  <div class="box pb-6 mt-3" :class="[selected ? 'selected' : 'unselected']">
    <div class="is-pulled-left">{{ title }}</div>
    <div v-show="selected" class="is-pulled-right">
      <span class="tag is-success">
        selected
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "title", "selected"],
  name: "SimpleList",
};
</script>
<style scoped>
.selected {
  border: solid 1px green;
}
.unselected {
  border: solid 1px red;
}
</style>
