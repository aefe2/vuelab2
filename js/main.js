Vue.component('todo-list', {
    data() {
        return {
            taskTitle: 'Example',
            todos: [{
                tasks: [],
                isDone: false
            }],
        };
    },
    methods: {
        todoDelete() {
            this.$emit('task-delete');
        }
    },
    template: `
        <div class="todo-card">
            <li v-for="todo in todos" :key="todo.id" class="todo-list">
                <h2 class="task-title">{{ taskTitle }}</h2>
                <button class="btn-delete" @click="todoDelete">X</button>
                
                <input type="text" placeholder="task" 
                v-show="!todo.tasks.length" 
                @keyup.enter="taskAdd()" 
                v-model="newTask">
                
                <div v-for="task in todo.tasks" :key="task.id" class="tasks-list">
                    <p class="task-content">{{ task }}</p>
                    <input type="checkbox" class="is-done" v-model="task.isDone">
<!--                    <input type="text" placeholder="task" @keyup.enter="taskAdd()" v-model="newTask">-->
                    <button class="btn btn-task-add" @click="taskAdd">+</button>
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