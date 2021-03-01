<template>
  <base-layout>
    <template v-slot:title>
      End of Slide
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <h1 class="title is-1 ">Thank you for your time</h1>
      <div class="content is-medium">
        Finally we are covered a very basic about Vue.js
        <br />
        There are some topics not covered here
        <ul>
          <li>Composition API</li>
          <li>Fetch data using Axios/Fetch</li>
          <li>Authentication</li>
          <li>
            Some advanced topics in router, state and etc.
          </li>
          <li>
            Others that might not mentioned here
          </li>
        </ul>
        In a nutshell
        <ul>
          <li>Keep learning and understanding the basic concepts</li>
          <li>Keep practices by code on your own</li>
          <li>
            If got new improvements, let our team know which is the good
            approach or best practices
          </li>
          <li>
            If got some misleading during my presentation, let me know
          </li>
          <li>
            Vue got no/little official best practices like Angularjs, but we can
            search other developers article that might be useful to us on how to
            use Vue. We can develop application with the way we want it.
          </li>
          <li>
            I wish we can improve and share our knowledges about Vue together,
            so it will make our team more stronger to use this framework.
          </li>
          <li>
            Any questions?
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:footer>
      <navigation-button previous="/lesson-9" :isEnd="true"></navigation-button>
    </template>
  </base-layout>
</template>
