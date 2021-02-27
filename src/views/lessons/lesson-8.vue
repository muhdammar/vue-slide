<template>
  <base-layout>
    <template v-slot:title>
      8# Vuex (State Management)
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example class="mt-4">
        <template v-slot:title>Attributes </template>
        <template v-slot:subtitle>
          Bind attribute to the element using v-bind</template
        >
        <template v-slot:example-code>
          <pre><code class="handlebars">{{vBindExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
          <div v-bind:id="dynamicId"></div>
          <button
            class="button is-primary mr-1"
            v-bind:disabled="isButtonDisabled"
          >
            Button
          </button>
          <button
            class="button is-success"
            @click="isButtonDisabled = !isButtonDisabled"
          >
            Toggle button
          </button>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-7"
        next="/lesson-9"
      ></navigation-button>
    </template>
  </base-layout>
</template>
<script>
import CodeExample from "../../components/UI/CodeExample";
export default {
  components: { CodeExample },
  data() {
    return {
      msg: "Hello World",
    };
  },
};
</script>
