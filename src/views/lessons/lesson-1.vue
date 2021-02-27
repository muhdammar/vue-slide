<template>
  <base-layout>
    <template v-slot:title>
      1# Interpolations, Conditional and Loops
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example>
        <template v-slot:title>Text </template>
        <template v-slot:subtitle> v-once</template>
        <template v-slot:example-code>
          <pre><code >{{msgExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          <span>Message: {{ msg }}</span
          ><br />
          <span v-once>This will never change: {{ msg }} </span>
          <input
            class="input"
            type="text"
            v-model="msg"
            placeholder="Text input"
          />
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Raw HTML </template>
        <template v-slot:subtitle> v-html</template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{rawHtmlExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          <p>Using mustaches: {{ rawHtml }}</p>
          <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Attributes </template>
        <template v-slot:subtitle>
          Bind attribute to the element using v-bind</template
        >
        <template v-slot:example-code>
          <pre><code class="handlebars">{{vBindExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="is-4 title">Output</h1>

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
      <code-example class="mt-4">
        <template v-slot:title>Javascript Expressions </template>

        <template v-slot:example-code>
          <pre><code class="handlebars">{{javascriptExpressionExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="is-4 title">Output</h1>
          {{ 1 + 1 }}
          <br />
          {{ true ? "YES" : "NO" }}
          <br />
          {{
            msg
              .split("")
              .reverse()
              .join("")
          }}
        </template>
      </code-example>
      <code-example class="mt-4">
        <template v-slot:title>Conditional and Loops</template>
        <template v-slot:subtitle>
          Assuming the question is strictly about performance:
          <li>v-show: expensive initial load, cheap toggling</li>
          <li>
            v-if: cheap initial load, expensive toggling.
          </li>
        </template>

        <template v-slot:example-code>
          <h1 class="is-4 title">v-if</h1>
          <pre
            class="mt-2 mb-2"
          ><code class="handlebars">{{conditionalExample}}</code></pre>
          <h1 class="is-4 title">v-show</h1>
          <pre
            class="mt-2 mb-2"
          ><code class="handlebars">{{vshowExample}}</code></pre>
          <h1 class="is-4 title mt-3">v-for</h1>
          <pre
            class="mt-2 mb-2"
          ><code class="handlebars">{{loopExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          <h1 class="is-4 title">Output</h1>
          1. v-if
          <div class="mb-2"><span v-if="seen">Now you see me</span></div>
          2. v-show
          <div class="mb-2">
            <span v-show="show" class="mr-4">Now you see me</span>
            <button class="button is-primary mt-1" @click="show = !show">
              {{ show ? "Hide" : "Show" }}
            </button>
          </div>
          2. v-for
          <div class="mb-2">
            <ol>
              <li class="ml-4" v-for="todo in todos" :key="todo.text">
                {{ todo.text }}
              </li>
            </ol>
          </div>
        </template>
      </code-example>
    </template>
    <template v-slot:footer>
      <navigation-button previous="/about" next="/lesson-2"></navigation-button>
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
      rawHtml: '<span style="color: red">This should be red.</span>',
      msgExample: `<span>Message: {{ msg }}</span>
<span v-once>This will never change:  {{ msg }} </span>`,
      rawHtmlExample: `<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>`,
      vBindExample: `<div v-bind:id="dynamicId"></div> //Please inspect to see the value
<button v-bind:disabled="isButtonDisabled">Button</button>
<button class="button is-primary mr-1" v-bind:disabled="isButtonDisabled">
  Button
</button>`,
      javascriptExpressionExample: `{{ 1 + 1 }}
{{ true ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>`,
      conditionalExample: `<div>
  <span v-if="seen">Now you see me</span> //seen is true
</div>
`,
      vshowExample: `<div>
  <span v-show="seen">Now you see me</span> //seen is true
</div>
`,
      loopExample: `<div>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>

//Example data
todos: [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
],
`,
      dynamicId: 1,
      isButtonDisabled: true,
      seen: true,
      show: false,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};
</script>
