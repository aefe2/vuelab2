Vue.component('todo-list', {
    props: {
        firstCol: {
            type: Array,
            required: true
        }
    },
    template: `
    <div class="todo-card">
        <li class="todo-item" v-for="(todo, id) in firstCol" :key="todo.id">
            <p>{{ todo.title }}</p>
            <p>{{ todo.task }}</p><button @click="deleteTask(firstCol)">Delete</button>
        </li>
    </div>
    `,
    methods: {
        deleteTask(firstCol) {
            this.$emit('delete-todo', firstCol)
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        todo: {
            title: '',
            task: ''
        },
        firstCol: [],
        secondCol: [],
        thirdCol: []
    },
    methods: {
        deleteTask(firstCol) {
            const todoIndex = this.todo.indexOf(firstCol);
            this.todo.splice(todoIndex, 1);
        },
        addTask() {
            if (this.todo.title && this.todo.task) {
                if (this.firstCol.length < 3) {
                    this.firstCol.push({
                        title: this.todo.title,
                        task: this.todo.task
                    })
                } else alert('Чел...')
            }
            this.todo.title = '';
            this.todo.task = '';
        },
    }
})