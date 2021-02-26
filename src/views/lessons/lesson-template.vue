<template>
  <base-layout>
    <template v-slot:title>
      1# Interpolations
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
      <code-example class="mt-4">
        <template v-slot:title>Javascript Expressions </template>

        <template v-slot:example-code>
          <pre><code class="handlebars">{{javascriptExpressionExample}}</code></pre>
        </template>
        <template v-slot:example-result>
          Output
          <br />
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
    </template>
    <template v-slot:footer>
      <navigation-button previous="/about" next="/about"></navigation-button>
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
      dynamicId: 1,
      isButtonDisabled: true,
    };
  },
};
</script>
