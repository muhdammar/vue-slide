<template>
  <base-layout>
    <template v-slot:title>
      9# Component Lifecycle
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example class="mt-4">
        <template v-slot:title>Getting Started </template>
        <template v-slot:subtitle>
          <div class="content">
            <p>
              Below is a diagram for the instance lifecycle. You don't need to
              fully understand everything going on right now, but as you learn
              and build more, it will be a useful reference.
            </p>
            <ul>
              <li>The concept quite straightforward</li>
            </ul>
            <figure>
              <img alt="Lifecycle" src="../../assets/lifecycle-vue.svg" />
            </figure>
          </div>
        </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{lifecycleExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
          <div v-if="isActive">
            Test
          </div>
          <button class="button is-primary" @click="toggle">Toggle</button>
          <p>See at console</p>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-8"
        next="/thank-you"
      ></navigation-button>
    </template>
  </base-layout>
</template>
<script>
import CodeExample from "../../components/UI/CodeExample";
export default {
  components: { CodeExample },
  computed: {
    msgReversed() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  beforeCreate() {
    console.log("lesson-9.vue: beforeCreated");
  },
  created() {
    console.log("lesson-9.vue: created");
  },
  beforeMount() {
    console.log("lesson-9.vue: beforeMount");
  },
  mounted() {
    console.log("lesson-9.vue: mounted");
  },
  beforeUpdate() {
    console.log("lesson-9.vue: beforeUpdate");
  },
  updated() {
    console.log("lesson-9.vue: updated");
  },
  beforeUnmount() {
    console.log("lesson-9.vue: beforeUnmount");
  },
  unmounted() {
    console.log("lesson-9.vue: unmounted");
  },

  data() {
    return {
      msg: "Hello World!",
      isActive: true,
      lifecycleExample: `beforeCreate() {
    console.log("lesson-9.vue: beforeCreated");
  },
  created() {
    console.log("lesson-9.vue: created");
  },
  beforeMount() {
    console.log("lesson-9.vue: beforeMount");
  },
  mounted() {
    console.log("lesson-9.vue: mounted");
  },
  beforeUpdate() {
    console.log("lesson-9.vue: beforeUpdate");
  },
  updated() {
    console.log("lesson-9.vue: updated");
  },
  beforeUnmount() {
    console.log("lesson-9.vue: beforeUnmount");
  },
  unmounted() {
    console.log("lesson-9.vue: unmounted");
  },`,
    };
  },
};
</script>
