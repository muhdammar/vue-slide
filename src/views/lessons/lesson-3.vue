<template>
  <base-layout>
    <template v-slot:title>
      3# Data Properties and Methods
    </template>
    <template v-slot:subtitle> </template>
    <template v-slot:content>
      <code-example>
        <template v-slot:title>Data </template>
        <template v-slot:subtitle>
          In this example, we already used Conditionals and Loops which v-if and
          v-for.
          <li>
            v-if: use to show/hide a DOM element when the expression meet.
          </li>
          <li>v-for: use to loop an array.</li>
        </template>
        <template v-slot:example-code>
          <div class="line-number">
            <pre class="language-css"><code>{{template[0].data}}
</code></pre>
            <pre class="language-css"><code>{{template[2].methods}}
</code></pre>
            <pre class="language-css"><code>{{template[1].templateCode}}
</code></pre>
          </div>
        </template>
        <template v-slot:example-result>
          <div>
            <p>Todo</p>
          </div>
          <div class="columns">
            <div class="column is-11">
              <input
                class="input mt-1"
                type="text"
                v-model="task"
                placeholder="Task name"
              />
            </div>
            <div class="column">
              <button class="button is-primary" @click="addTodo">Submit</button>
            </div>
          </div>
          <div v-if="todos.length > 0">
            <div
              class="box mt-5 is-small"
              v-for="todo in todos"
              :key="todo.id"
              style="height:70px"
            >
              <div class="is-pulled-left is-11">
                <p>{{ todo.task }}</p>
              </div>
              <div class="is-pulled-right">
                <button class="button is-danger" @click="removeTodo(todo.id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div v-else class="box has-text-centered">No Pending Task</div>
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
  methods: {
    addTodo() {
      if (this.task.trim() === "") {
        alert("Task is empty");
        return;
      }
      var newTodo = {
        id: Math.random(),
        task: this.task,
      };
      this.todos.push(newTodo);
      this.task = "";
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter((obj) => {
        return obj.id !== todoId;
      });
    },
  },
  data() {
    return {
      todos: [],
      task: "",
      todo: { id: "", task: "" },
      template: [
        {
          data: `data()
{
  return {
    todos:[],
    todo:''
  }
},`,
        },
        {
          templateCode: `
  <div>
    <p>Todo</p>
  </div>
  <div class="columns">
    <div class="column is-11">
      <input
        class="input mt-1"
        type="text"
        v-model="task"
        placeholder="Task name"
      />
    </div>
    <div class="column">
      <button class="button is-primary" @click="addTodo">Submit</button>
    </div>
  </div>
  <div v-if="todos.length > 0">
    <div
      class="box mt-5 is-small"
      v-for="todo in todos"
      :key="todo.id"
      style="height:70px"
    >
      <div class="is-pulled-left is-11">
        <p>{{ todo.task }}</p>
      </div>
      <div class="is-pulled-right">
        <button class="button is-danger" @click="removeTodo(todo.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
  <div v-else class="box has-text-centered">No Pending Task</div>`,
        },
        {
          methods: `methods: {
  addTodo() {
    if (this.task.trim() === "") {
      alert("Task is empty");
      return;
    }
    var newTodo = {
      id: Math.random(),
      task: this.task,
    };
    this.todos.push(newTodo);
    this.task = "";
  },
  removeTodo(todoId) {
    this.todos = this.todos.filter((obj) => {
      return obj.id !== todoId;
    });
  },`,
        },
      ],
    };
  },
};
</script>
