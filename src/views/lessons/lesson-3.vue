<template>
  <base-layout>
    <template v-slot:title>
      3# Computed Properties and Watchers
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
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-2"
        next="/lesson-4"
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
      firstName: "",
      lastName: "",
    };
  },
};
</script>
