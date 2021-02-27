<template>
  <base-layout>
    <template v-slot:title>
      6# Class and Styles Binding
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example class="mt-4">
        <template v-slot:title>Class Binding</template>
        <template v-slot:subtitle>
          <p class="mb-1">
            Got more important notes at the docs, but I listed some of examples
            as below.
          </p>
          <a
            href="https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes"
            ><p>Reference link</p></a
          >
        </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{classBindingExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
          <div v-bind:class="{ active: isActive }">Active Class</div>
          <div v-bind:class="[{ active: isActive }, unActiveClass]">
            Unactive Class
          </div>
          <button class="button is-success mt-1" v-on:click="toggle">
            Toggle class
          </button>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>More Complex Example</template>
        <template v-slot:subtitle>
          <p class="mb-1">
            Make the box border to green color when the box is selected
          </p>
        </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{complexExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
          <simple-list
            v-for="list in lists"
            :key="list.id"
            :id="list.id"
            :selected="list.selected"
            :title="list.title"
            @click="selectItem(list.id)"
          ></simple-list>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-5"
        next="/lesson-7"
      ></navigation-button>
    </template>
  </base-layout>
</template>

<script>
import CodeExample from "../../components/UI/CodeExample";
import SimpleList from "../../components/UI/SimpleList";
export default {
  components: { CodeExample, SimpleList },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    selectItem(id) {
      let item = this.lists.find((x) => x.id === id);
      item.selected = !item.selected;
      console.log(item);
    },
  },
  mounted() {},
  data() {
    return {
      msg: "Hello World",
      classBindingExample: `<div v-bind:class="{ active: isActive }">Active Class</div> //Object Syntax

<div v-bind:class="[{ active: isActive }, unActiveClass]"> //Array Syntax
  Unactive Class
</div>
<button class="button is-success" v-on:click="toggle">
  Toggle class
</button>

//scoped means apply css for local component
<style scoped>
.active {
  border: 5px solid red !important;
  margin-bottom: 1rem;
  font-family: "Courier New", Courier, monospace !important;
}
.unactive {
  font-size: 20px;
  border: 5px solid green;
}
.normal-font {
  font-family: "Times New Roman", Times, serif;
}
</style>

//Methods
 methods: {
  toggle() {
    this.isActive = !this.isActive;
  },
  data(){
    return {
      isActive:true
    }
  }
`,
      complexExample: `//SimpleList.vue
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
</scritp>
<style scoped>
.selected {
  border: solid 1px green;
}
.unselected {
  border: solid 1px red;
}
</style>


<simple-list
  v-for="list in lists"
  :key="list.id"
  :id="list.id"
  :selected="list.selected"
  :title="list.title"
  @click="selectItem(list.id)"
></simple-list>

//Methods
selectItem(id) {
  let item = this.lists.find((x) => x.id === id);
  item.selected = !item.selected;
},

//Data
 lists: [
    {
      id: 1,
      title: "Yellow Pail",
      selected: false,
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      selected: false,
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoil hats",
      selected: false,
    },
    {
      id: 4,
      title: "Haught or Naught",
      selected: false,
    },
  ],
`,
      isActive: true,
      unActiveClass: "normal-font unactive",
      lists: [
        {
          id: 1,
          title: "Yellow Pail",
          selected: false,
        },
        {
          id: 2,
          title: "Supermajority: The Fantasy Congress League",
          selected: false,
        },
        {
          id: 3,
          title: "Tinfoild: Tailored tinfoil hats",
          selected: false,
        },
        {
          id: 4,
          title: "Haught or Naught",
          selected: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.active {
  border: 5px solid red !important;
  margin-bottom: 1rem;
  font-family: "Courier New", Courier, monospace !important;
}
.unactive {
  font-size: 20px;
  border: 5px solid green;
}
.normal-font {
  font-family: "Times New Roman", Times, serif;
}
</style>
