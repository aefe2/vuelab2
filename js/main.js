Vue.component('todo-list', {
    data() {
        return {
            taskTitle: 'Example',
            todos: [{
                tasks: ['do this', 'do ether'],
                isDone: false
            }]
        };
    },
    methods: {
        taskAdd() {
            this.tasks.push()
        }
    },
    template: `
        <div class="todo-card">
            <li v-for="todo in todos" :key="todo.id" class="todo-list">
                <h2 class="task-title">{{ taskTitle }}</h2>
                <div v-for="task in todo.tasks" :key="task.id" class="tasks-list">
                    <p class="task-content">{{ task }}</p>
                    <input type="checkbox" v-model="todos.isDone" class="is-done">
                    <button @click="taskAdd" class="btn btn-task-add">+</button>
                </div>
            </li>
        </div>
    `,
})

let app = new Vue({
    el: '#app',
    data() {
        return {
            // taskTitle: '345',
            // todos: [{
            //     tasks: ['123'],
            //     isDone: false
            // }],
            column1: {
                id: 1,
                colTodos: []
            },
            column2: {
                id: 2,
                colTodos: []
            },
            column3: {
                id: 3,
                colTodos: []
            },
        }
    },

})