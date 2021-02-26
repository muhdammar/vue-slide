<template>
  <base-layout>
    <template v-slot:title>
      2# Directives
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example>
        <template v-slot:title>v-bind </template>
        <template v-slot:subtitle></template>
        <template v-slot:example-code>
          <pre><code >{{vbind}}</code></pre>
        </template>
        <template v-slot:example-result>
          <a :href="url">Google</a>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>v-on </template>
        <template v-slot:subtitle></template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{von}}</code></pre>
        </template>
        <template v-slot:example-result>
          <button @click="doMethod" class="button is-primary">
            Add 1 to counter
          </button>
          <div class="p-1 mt-5">Count: {{ counter }}</div>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Modifiers </template>
        <template v-slot:subtitle></template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{modifiers}}</code></pre>
        </template>
        <template v-slot:example-result>
          <form>
            <button class="button is-danger">Click Me without prevent</button>
          </form>
          <form v-on:submit.prevent="onSubmit" class="mt-3">
            <button class="button is-danger">
              Click Me with prevent
            </button>
          </form>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-1"
        next="/lesson-3"
      ></navigation-button>
    </template>
  </base-layout>
</template>
<script>
import CodeExample from "../../components/UI/CodeExample";
export default {
  components: { CodeExample },
  methods: {
    doMethod() {
      this.counter++;
    },
    onSubmit() {
      alert("You hit me up! Nice!");
    },
  },
  data() {
    return {
      counter: 0,
      url: "https://www.google.com/",
      vbind: `<!-- full syntax -->
<a v-bind:href="url"></a>
<!-- shorthand -->
<a :href="url"></a>`,
      von: `<!-- full syntax -->
<button v-on:click="doMethod"></button>
<!-- shorthand -->
<button @click="doMethod" class="button is-primary">
  Add 1 to counter
</button>`,
      modifiers: `<form v-on:submit.prevent="onSubmit" class="mt-3">
  <button class="button is-danger">
    Click Me With on prevent
  </button>
</form>
//Got many modifiers, such as keyup etc. Can read the docs for more details`,
    };
  },
};
</script>
