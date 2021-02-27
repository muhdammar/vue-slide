<template>
  <div class="home" style="text-align: center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="title is-1 mb-6">Vue.js</h1>
  </div>
  <base-layout>
    <template v-slot:title>
      Vue 3 Presentation
    </template>
    <template v-slot:subtitle>
      By Muhammad Ammar
    </template>
    <template v-slot:content>
      <h1 class="title is-1 mb-6">What is Vue.js?</h1>
      <h1 class="subtitle is-4 mb-6">
        Vue (pronounced /vjuː/, like view) is a progressive framework for
        building user interfaces. Unlike other monolithic frameworks, Vue is
        designed from the ground up to be incrementally adoptable. The core
        library is focused on the view layer only, and is easy to pick up and
        integrate with other libraries or existing projects. On the other hand,
        Vue is also perfectly capable of powering sophisticated Single-Page
        Applications when used in combination with modern tooling and supporting
        libraries (opens new window).
      </h1>
      <h1 class="title is-1 ">Why?</h1>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/VeVQYsJ6QrA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 class="title is-1 mt-6">New features in Vue 3</h1>
      <div class="content">
        <div class="subtitle is-4">
          Vue 3 is faster, smaller in file size, and equipped with better
          TypeScript support. Some of the new features that we can discuss and
          learn to implement in this article include:
        </div>
        <ul class="subtitle is-4">
          <li>Composition API (Now built-in)</li>
          <li>Multiple root elements (Template syntax )</li>
          <li>
            Suspense
          </li>
          <li>Multiple V-models</li>
          <li>Better reactivity</li>
          <li>Portals</li>
          <a
            href="https://blog.logrocket.com/new-features-in-vue-3-and-how-to-use-them/#:~:text=Vue%203%20is%20faster,%20smaller,Multiple%20root%20elements%20(Template%20syntax%20)"
          >
            Source link</a
          >
        </ul>
      </div>
    </template>
    <template v-slot:footer>
      <navigation-button
        :isHome="true"
        previous="/"
        next="/about"
      ></navigation-button>
    </template>
  </base-layout>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
