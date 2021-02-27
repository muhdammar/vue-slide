<template>
  <base-layout>
    <template v-slot:title>
      5# Component and Slots
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example>
        <template v-slot:title>Component </template>
        <template v-slot:subtitle>
          <h1 class="subtitle is-4">Advantages of using components</h1>
          <div class="content">
            <ol>
              <li>Reusable Component</li>
              <li>Code more organize</li>
              <li>Readable</li>
            </ol>
          </div>
          <a
            href="https://v3.vuejs.org/guide/introduction.html#composing-with-components"
            >Open Documentation</a
          >
        </template>
        <template v-slot:example-code>
          <pre><code >{{componentExample}}</code></pre>
          <br />
          <pre><code >{{componentExample2}}</code></pre>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Slots </template>
        <template v-slot:subtitle>
          <h1 class="subtitle is-4">1# Slot Content</h1>

          <div class="content mt-1">
            <li>Very useful if we know how to use it.</li>
            <li>
              Can use at base component such Base Card, Base Layout, Base Button
              and etc.
            </li>
            <a
              href="https://v3.vuejs.org/guide/component-slots.html#slot-content"
            >
              <p class="mt-3">Open Documentation</p></a
            >
          </div>
          <br />
        </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{slotContent}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="title is-3">Output</h1>
          <TodoButton class="button is-primary">Todo Button</TodoButton><br />

          <div>
            <TodoButtonNoSlot class="button is-primary mt-1"
              >Todo Button No Slot 2</TodoButtonNoSlot
            >
            <p class="mt-1">
              This button will not override because got no {{`<slot></slot>`}}
              inside the button component as example above
            </p>
          </div>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Slots </template>
        <template v-slot:subtitle>2# Render Scope </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{renderScope}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="title is-3">Output</h1>
          <todo-button> Delete this {{ item.name }} </todo-button>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Slots </template>
        <template v-slot:subtitle>3# Fallback Content </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{fallbackContent}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="title is-3">Output</h1>
          <TodoButtonFallbackContent
            class="button is-primary"
          ></TodoButtonFallbackContent>
          <TodoButtonFallbackContent class="button is-primary ml-1">
            Hi, i override Fallback content
          </TodoButtonFallbackContent>
        </template>
      </code-example>
      <references>
        <template v-slot:title>References </template>
        <template v-slot:subtitle
          >Some important notes are not covered here.
        </template>
        <template v-slot:content>
          <ol>
            <li>Named Slot</li>
            <li>Dynamic Slot</li>
            <li>Provide/Inject</li>
            <li>Others</li>
          </ol>
          p/s: Must read all this if got free time really recommended
          <a href="https://v3.vuejs.org/guide/component-slots.html"
            ><p>References link</p></a
          >
        </template>
      </references>
    </template>
    <template v-slot:footer>
      <navigation-button
        previous="/lesson-4"
        next="/lesson-6"
      ></navigation-button>
    </template>
  </base-layout>
</template>
<script>
import CodeExample from "../../components/UI/CodeExample";
import TodoButton from "../../components/UI/TodoButton";
import TodoButtonNoSlot from "../../components/UI/TodoButtonNoSlot";
import TodoButtonFallbackContent from "../../components/UI/TodoButtonFallbackContent";
export default {
  components: {
    CodeExample,
    TodoButton,
    TodoButtonNoSlot,
    TodoButtonFallbackContent,
  },
  data() {
    return {
      componentExample: `//File: main.js
//Import vue component
import BaseLayout from "./components/UI/BaseLayout.vue";
import NavigationButton from "./components/UI/NavigationButton.vue";

const app = createApp(App);

//Register components globally in main.js
app.component("BaseLayout", BaseLayout);
app.component("NavigationButton", NavigationButton);
// Define a new component called todo-item
app.component('todo-item', {
  template: \`<li>This is a todo</li>\`
}) //another way to create component without .vue extension file
app.mount("#app");`,
      componentExample2: `//File: Example.vue
<template>
//Global component 
  <base-layout>
    <code-example/> //Use kebab case Or
    <CodeExample/> //Use Pascal Case
  </base-layout>
</template>
<script>
import CodeExample from '../CodeExample'; //Local component (Can use inside component only)
export default {
  components:{ CodeExample }
}
</scritp>`,
      slotContent: `
# Example 1 
//TodoButton.vue
<template>
  <!-- todo-button component template -->
  <button class="btn-primary">
    <slot></slot>
  </button>
</template>

...
<todo-button>
  Add todo
</todo-button>
...

# Example 2
//TodoButtonNoSlot.vue
<template>
  <!-- todo-button component template -->
  <button class="btn-primary">
    Button No Slot
  </button>
</template>

<TodoButtonNoSlot class="button is-primary mt-1">
  Todo Button No Slot 2
</TodoButtonNoSlot>
`,
      renderScope: `//We can pass a data properties inside the slot
<todo-button>
  Delete this {{ item.name }}
</todo-button>

...
data(){
  return {
    item:{ name: "Todo Button"}
  }
}
...
`,
      fallbackContent: `
//TodoButtonFallbackContent.vue
<template>
  <button class="btn-primary">
    <slot>Hi im fallback content</slot> //If got nothing provide to slot, it will show by default
  </button>
</template>

<TodoButtonFallbackContent></TodoButtonFallbackContent>
<TodoButtonFallbackContent>
  Hi, i override Fallback content
</TodoButtonFallbackContent>
`,
      item: { name: "Todo Button" },
    };
  },
};
</script>
