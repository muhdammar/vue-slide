<template>
  <base-layout>
    <template v-slot:title>
      History
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <h1 class="title is-1 ">History of Vue.js</h1>
      <div class="content is-medium">
        <ul>
          <li>Created by Evan You</li>
          <li>Started in late 2013</li>
          <li>First release Feb. 2014 (v0.6)</li>
          <li>
            v1.0.0 Evangelion Oct. 2015
          </li>
          <li>
            v2.0 Apr. 2016
          </li>
          <li>
            Latest release v3.0.0 (2020)
            <span class="tag is-success is-medium">New</span>
          </li>
        </ul>
      </div>
      <h1 class="title is-1 mb-6">Evan You (Creator @Vue.js)</h1>
      <h1 class="subtitle is-4 mb-6"></h1>
      <div class="content is-medium">
        <ul>
          <li>Core Dev at Meteor.</li>
          <li>Previously worked as a Creative Technologist at Google</li>
          <li>
            From 2016 working full-time on Vue.JS framework.
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:footer>
      <navigation-button previous="/" next="/lesson-1"></navigation-button>
    </template>
  </base-layout>
</template>
