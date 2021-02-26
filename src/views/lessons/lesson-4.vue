<template>
  <base-layout>
    <template v-slot:title>
      4# Computed Properties and Watchers
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example>
        <template v-slot:title>Computed </template>
        <template v-slot:subtitle>
          Use for complex logic that includes reactive data</template
        >
        <template v-slot:example-code>
          <div class="line-number">
            <pre class="language-css"><code>{{computedExample}}
</code></pre>
            <pre class="language-css"><code>{{computedExample2}}
</code></pre>
          </div>
        </template>
        <template v-slot:example-result>
          <div>
            <p>My Fullname:</p>
            <span>{{ fullName }}</span>
          </div>
          <input
            class="input mt-1"
            type="text"
            v-model="firstName"
            placeholder="Firstname"
          />
          <input
            class="input mt-1"
            type="text"
            v-model="lastName"
            placeholder="Lastname"
          />
        </template>
      </code-example>
      <code-example>
        <template v-slot:title>Watch </template>
        <template v-slot:subtitle>
          While computed properties are more appropriate in most cases, there
          are times when a custom watcher is necessary. That's why Vue provides
          a more generic way to react to data changes through the watch option.
          This is most useful when you want to perform asynchronous or expensive
          operations in response to changing data.</template
        >
        <template v-slot:example-code>
          <div class="line-number">
            <pre class="language-css"><code>{{watchExample}}
</code></pre>
            <pre class="language-css"><code>{{watchExample2}}
</code></pre>
          </div>
        </template>
        <template v-slot:example-result>
          <div>
            <p>Kilometers/Meters Conversion:</p>
          </div>
          Kilometers : <input type="text" v-model="kilometers" /> Meters :
          <input type="text" v-model="meters" />
          <a
            class="title is-2 mt-6"
            href="https://v3.vuejs.org/guide/computed.html#computed-vs-watched-property"
          >
            <h1 class="subtitle is-2 mt-6 mb-3">
              # Watch vs Computed which one is better?
            </h1>
          </a>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-3"
        next="/lesson-5"
      ></navigation-button>
    </template>
  </base-layout>
</template>
<script>
import CodeExample from "../../components/UI/CodeExample";
export default {
  components: { CodeExample },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  watch: {
    kilometers(newValue, oldValue) {
      console.log("Kilometers [oldvalue]: " + oldValue);
      console.log("Kilometers [newValue]: " + newValue);
      this.kilometers = newValue;
      this.meters = newValue * 1000;
    },
    meters(newValue, oldValue) {
      console.log("Meters [oldvalue]: " + oldValue);
      console.log("Meters [newValue]: " + newValue);

      this.kilometers = newValue / 1000;
      this.meters = newValue;
    },
  },
  data() {
    return {
      computedExample: `<div>
  <p>My Fullname: </p>
  <span>{{ fullName }}</span>
</div>
<input
  class="input"
  type="text"
  v-model="firstName"
  placeholder="Firstname"
/>
<input
  class="input"
  type="text"
  v-model="lastName"
  placeholder="Lastname"
/>`,
      computedExample2: `...
computed: {
fullName() {
  return this.firstName + " " + this.lastName;
},
data(){
  return {
    firstName:"",
    lastName:""
  }
}
...`,
      watchExample: `<div>
  <p>Kilometers/Meters Conversion:</p>
</div>
Kilometers : <input type="text" v-model="kilometers" /> Meters :
<input type="text" v-model="meters" />`,
      watchExample2: `watch: {
    kilometers(newKilometers) {
      this.kilometers = newKilometers;
      this.meters = newKilometers * 1000;
    },
    meters(newMeter) {
      this.kilometers = newMeter / 1000;
      this.meters = newMeter;
    },`,
      firstName: "",
      lastName: "",
      kilometers: 0,
      meters: 0,
    };
  },
};
</script>
