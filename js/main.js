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
            <p>{{ todo.task }}</p><button>Delete</button>
        </li>
    </div>
    `,
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