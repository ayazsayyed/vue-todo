<template>
  <div class="main-wrapper">
    <section class="section pb-0 main-section bg-gradient-warning">
      <main class="container card shadow shadow-lg--hover mt-5" id="todolist">
        <div class="row">
          <div class="col-md-6">
            <h1>{{title}}</h1>
          </div>
          <div class="col-md-6 text-right">
            <!-- <button class=" get-btn" @click="getTodos()"> Fetch Todos </button> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h6 class="count total">Total : {{todos.length}}</h6>
          </div>
          <div class="col-md-4">
            <h6 class="count completed">Completed : {{completedTodos.length}}</h6>
          </div>
          <div class="col-md-4">
            <h6 class="count pending">Pending : {{pendingTodos.length}}</h6>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input
                type="text"
                name="newTodo"
                class="add-todo-field form-control"
                placeholder="Enter New To-Do"
                v-on:keydown.enter="addnewTodo($event)"
                autocomplete="off"
              >
              <i class="fa fa-arrow-right submit-icon" @click="addnewTodo($event)" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <ul id="todo-list">
          <VuePerfectScrollbar class="scroll-area">
            <li :class="todo.completed ? 'done': 'undone'" v-for="(todo,key) in todos" :key="key">
              <span class="label">{{todo.title}}</span>
              <div class="actions">
                <button
                  type="button"
                  class="btn-picto"
                  @click="completeTodo(key)"
                  :aria-label="todo.completed ? 'Undone' : 'Done'"
                  :title="todo.completed ? 'Undone' : 'Done'"
                >
                  <i
                    aria-hidden="true"
                    class="material-icons"
                  >{{ todo.completed ? 'check_box' : 'check_box_outline_blank' }}</i>
                </button>
                <button
                  @click="deleteTodo(key)"
                  type="button"
                  aria-label="Delete"
                  title="Delete"
                  class="btn-picto"
                >
                  <i aria-hidden="true" class="material-icons">delete</i>
                </button>
              </div>
            </li>
          </VuePerfectScrollbar>
        </ul>
        <div class="todo-footer" v-if="todos.length >0">
          <ul>
            <div class="actions">
              <button
                @click="clearTodos"
                type="button"
                aria-label="Delete"
                title="Delete"
                class="btn-picto"
              >
                Clear All
                <i aria-hidden="true" class="material-icons">delete</i>
              </button>
            </div>
          </ul>
        </div>
      </main>
    </section>
  </div>
</template>


<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar
  },
  name: "Todo",
  data: function() {
    return {
      title: "LOGIN",
      title: "TODO-LIST",
      todos: [],
      completedTodos: 0,
      pendingTodos: 0,
      item: 0,
      checkkAll: false
    };
  },

  methods: {
    clearTodos() {
      this.todos = [];
      this.updateTodos();
    },
    getTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
          this.todos = json;
          this.updateTodos();
        });
    },
    updateTodos() {
      this.completedTodos = this.todos.filter(item => item.completed);
      this.pendingTodos = this.todos.filter(item => !item.completed);
    },
    deleteTodo(key) {
      this.todos.splice(key, 1);
      this.updateTodos();
    },
    completeTodo(key) {
      if (this.todos[key].completed) {
        this.todos[key].completed = false;
      } else {
        this.todos[key].completed = true;
      }
      this.updateTodos();
    },
    addnewTodo(e) {
      if (e.target.value.length > 0) {
        e.preventDefault();
        let newTodo = {
          completed: false,
          id: 201,
          title: e.target.value,
          userId: 1
        };
        this.todos.unshift(newTodo);
        newTodo.id++;
        e.target.value = "";
        this.updateTodos();
      }
    }
  }
};
</script>
<style scoped>
section.main-section {
  display: flex;
  justify-content: center;
  height: 100%;
}
.card-body {
  text-align: left;
}

@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}
.count {
  font-size: 16px;
}
.count.completed {
  text-align: center;
}
.count.pending {
  text-align: right;
}
#todolist {
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 750px;
  background: #fff;
  color: #fb6340;
  box-shadow: 0 0 19px 10px rgba(100, 100, 100, 0.2);
}
#todolist .row {
  text-align: left;
}
#todolist h1 {
  /*text-align:center;*/
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
#todolist h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

#todolist .emptylist {
  margin-top: 2.6rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-style: italic;
  opacity: 0.8;
}
#todolist ul {
  margin-top: 2.6rem;
  list-style: none;
  padding: 0;
}
#todolist .todolist-move {
  transition: transform 1s;
}
#todolist li {
  display: flex;
  margin-top: 5px;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  text-align: left;
}

#todolist .actions {
  flex-shrink: 0;
  padding-left: 0.7em;
}
#todolist .label {
  position: relative;
  transition: opacity 0.2s linear;
}
#todolist .done .label {
  opacity: 0.6;
}
#todolist .done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  height: 1px;
  background: #fff;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
#todolist .btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fb6340;
}

/* FORM */
form {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
}
form label {
  min-width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
.add-todo-field {
  border-radius: 0;
  border: none;
  background: transparent;
  border-bottom: 1px solid #fb6340;
  color: #fb6340;
}
.add-todo-field:focus {
  box-shadow: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fb6340;
}
form input {
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
}
.get-btn {
  padding: 0 1.3rem;
  border: none;
  background: #fb6340;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transition: background 0.2s ease-out;
}
.get-btn:hover {
  background: #ff5e5e;
}
form input,
.get-btn {
  font-family: "Quicksand", sans-serif;
  height: 3rem;
}

/* TOOGLE COMPONENT */
.togglebutton-wrapper {
  margin-top: 1em;
}
.togglebutton-wrapper label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.togglebutton-wrapper input {
  position: absolute;
  left: -9999px;
}
.togglebutton-wrapper .togglebutton-label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.togglebutton-wrapper .tooglebutton-box {
  position: relative;
  display: block;
  margin-left: 0.6em;
  width: 38px;
  height: 22px;
  background: white;
  /*border:1px solid black;*/
  border-radius: 999px;
  cursor: pointer;
}
.togglebutton-wrapper .tooglebutton-box:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 18px;
  height: 18px;
  /*border:1px solid #FF6666;*/
  border-radius: 50%;
  background: #ff6666;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
}
.togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
  left: calc(100% - 4px - 16px);
  opacity: 1;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  max-height: 450px;
  min-height: 350px;
}
.scroll-area .ps__scrollbar-y-rail {
  background: rgb(232, 232, 232);
  opacity: 1;
  width: 10px;
  border-radius: 8px;
}
.todo-footer {
  position: absolute;
  bottom: 0;
}
.todo-footer ul {
  display: flex;
}
.todo-footer .actions {
  display: flex;
}
.todo-footer .actions button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-wrapper {
  height: 100%;
}
@media screen and (min-width: 370px) {
  section.main-section {
    padding: 0;
  }
  #todolist {
    margin: 2rem auto;
    padding: 1.5rem;
    margin: 1rem;
  }
  #todolist h1 {
    font-size: 1.5rem;
  }
  .count.completed {
    text-align: left;
  }
  .count.pending {
    text-align: left;
  }
}
.fa.submit-icon {
  position: absolute;
  right: 30px;
  top: 12px;
  font-size: 25px;
}
</style>
