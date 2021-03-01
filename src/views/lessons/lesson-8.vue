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
          <br />
          <pre><code class="handlebars">{{stateExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output (Bad practices)
          <br />
          Count with Vuex: {{ getCount }}
          <br />
          <button class="button is-primary mr-2 mb-3" @click="addCounter">
            Add 1 to count (Vuex)
          </button>
          <br />
          Count with no Vuex: {{ count }}
          <br />
          <button class="button is-primary" @click="addCounterWithoutVuex">
            Add 1 to count (No Vuex)
          </button>

          <p class="mt-5">Output (Good practices)</p>
          <br />
          Count with Vuex: {{ getCount }}
          <br />
          <button
            class="button is-primary mr-2 mb-3"
            @click="addCounterWithActions"
          >
            Add 1 to count (Vuex)
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
  methods: {
    addCounterWithoutVuex() {
      this.count++;
    },
    addCounter() {
      this.$store.state.count++;
    },
    addCounterWithActions() {
      this.$store.dispatch("increment");
    },
  },
  data() {
    return {
      vuexExample: `methods: {
    addCounterWithoutVuex() {
      this.count++;
    },
    addCounter() {
      this.$store.state.count++;
    },
    addCounterWithActions() {
      this.$store.dispatch("increment"); //dispatch for actions
    },

 data(){ return count: 0, //No vuex },

 computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
    getCountNoVuex() {
      return this.count;
    },
  },`,
      stateExample: `File: store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      console.log("Increment Mutations called");
      state.count++;
    },
  },
  actions: {
    increment(context) {
      console.log("Increment Action called");
      context.commit("increment");
    },
  },
  modules: {},
});`,
      count: 0, //No vuex
    };
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
    getCountNoVuex() {
      return this.count;
    },
  },
};
</script>
