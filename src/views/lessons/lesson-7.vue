<template>
  <base-layout>
    <template v-slot:title>
      7# Vue Router
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example class="mt-4">
        <template v-slot:title>Getting Started </template>
        <template v-slot:subtitle>
          <div class="content">
            <ol>
              <li>
                Vue router is more straightforward to understand and easy to
                learn.
              </li>
              <li>
                <p>Stored in router folder inside project with name index.js</p>
              </li>
              <li>
                <p>
                  However know about advanced router is really recommended, we
                  can control the router such as check the user is authenticated
                  or not before user enter the page.
                </p>
              </li>
            </ol>
            More Details:
            <a href="https://next.router.vuejs.org/guide/"
              ><p>https://next.router.vuejs.org/guide</p></a
            >
          </div>
        </template>
        <template v-slot:example-code>
          <pre><code class="handlebars">{{routerExample}}</code></pre>
          <br />
          <pre><code class="handlebars">{{routerExample2}}</code></pre>
        </template>
        <template v-slot:example-result> </template>
      </code-example>
      <references>
        <template v-slot:title>References </template>
        <template v-slot:subtitle
          >Some important notes are not covered here.
        </template>
        <template v-slot:content>
          <ol>
            <li>
              Essentials
              <ul>
                <li>
                  Dynamic Route Matching
                </li>
                <li>
                  Routes' Matching Syntax
                </li>
                <li>
                  Nested Routes
                </li>
                <li>
                  Programmatic Navigation
                </li>
                <li>
                  Named Routes
                </li>
                <li>
                  Named Views
                </li>
                <li>
                  Redirect and Alias
                </li>
                <li>
                  Passing Props to Route Components
                </li>
                <li>
                  Different History modes
                </li>
              </ul>
            </li>
            <li class="mt-6">
              Advanced
              <ul>
                <li>
                  Navigation guards
                </li>
                <li>
                  Route Meta Fields
                </li>
                <li>
                  Data Fetching
                </li>
                <li>
                  Composition API
                </li>
                <li>
                  Transitions
                </li>
                <li>
                  Scroll Behavior
                </li>
                <li>
                  Lazy Loading Routes
                </li>
                <li>
                  Extending RouterLink
                </li>
                <li>
                  Navigation Failures
                </li>
                <li>
                  Dynamic Routing
                </li>
              </ul>
            </li>
          </ol>
          p/s: Must read all this if got free time really recommended
          <a href="https://next.router.vuejs.org/guide/"
            ><p>References link</p></a
          >
        </template>
      </references>
    </template>

    <template v-slot:footer>
      <navigation-button
        previous="/lesson-6"
        next="/lesson-8"
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
      routerExample: `
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
`,
      routerExample2: `const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for routes: routes
})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')

// Now the app has started!
`,
    };
  },
};
</script>
