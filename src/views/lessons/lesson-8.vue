<template>
  <base-layout>
    <template v-slot:title>
      8# Vuex (State Management)
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example class="mt-4">
        <template v-slot:title>Getting Started </template>
        <template v-slot:subtitle>
          <div class="content">
            <p>
              Vuex is one of the most important element in Vue. Without it, our
              applications are hard to mantain and scale up. For my opinion,
              understanding basic concepts of state management (Vuex) are
              mandatory when build a large application.
            </p>
            <ul>
              <li>The concept quite complex for beginners</li>
              <li>The best way to learn is to practice by your own</li>
            </ul>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/_2_C9j-8CtM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe></div
        ></template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{vuexExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
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
      vuexExample: "Nothing",
    };
  },
};
</script>
