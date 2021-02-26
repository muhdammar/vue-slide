<template>
  <div class="tabs is-toggle is-fullwidth mb-6">
    <ul>
      <li>
        <router-link :to="previous">
          <span class="icon is-small"
            ><i class="fas fa-film" aria-hidden="true"></i
          ></span>
          <span>Previous</span>
        </router-link>
      </li>
      <li>
        <router-link :to="next">
          <span class="icon is-small"
            ><i class="far fa-file-alt" aria-hidden="true"></i
          ></span>
          <span>Next</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["previous", "next"],
  name: "NavigationButton",
};
</script>
