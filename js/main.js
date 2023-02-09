Vue.component('todo-list', {
    props: {
        firstCol: {
            type: Array,
            required: true
        }
    },
    template: `
    <div class="todo-card">
        <li v-for="(todo, key) in firstCol" :key="todo.key" class="todo-item">
        <div class="todo-title">
            <span>{{ todo.title }}</span>
        </div>
        <div class="todo-tasks">
            <span>{{ todo.task }}</span>
            <span>{{ todo.task2 }}</span>
            <span>{{ todo.task3 }}</span>
            <span>{{ todo.task4 }}</span>
            <span>{{ todo.task5 }}</span>
        </div>
            <button class="delete-btn" @click="$delete(firstCol, key)">Delete</button>
        </li>
    </div>
    `,
    methods: {},

})

let app = new Vue({
    el: '#app',
    data: {
        radioValue: null,
        todo: {
            title: '',
            task: '',
            task2: '',
            task3: '',
            task4: '',
            task5: '',
        },
        firstCol: [],
        secondCol: [],
        thirdCol: []
    },
    methods: {
        addTodo() {
            if (this.radioValue == null) {
                if (this.firstCol.length < 3) {
                    this.firstCol.push({
                        title: this.todo.title,
                        task: this.todo.task,
                        task2: this.todo.task2,
                        task3: this.todo.task3,
                    })
                    this.todo.title = '';
                    this.todo.task = '';
                }
            } else if (this.radioValue == '4') {
                if (this.firstCol.length < 3) {
                    this.firstCol.push({
                        title: this.todo.title,
                        task: this.todo.task,
                        task2: this.todo.task2,
                        task3: this.todo.task3,
                        task4: this.todo.task4,
                    })
                    this.todo.title = '';
                    this.todo.task = '';
                }
            } else if (this.radioValue == '5') {
                if (this.firstCol.length < 3) {
                    this.firstCol.push({
                        title: this.todo.title,
                        task: this.todo.task,
                        task2: this.todo.task2,
                        task3: this.todo.task3,
                        task4: this.todo.task4,
                        task5: this.todo.task5,
                    })
                    this.todo.title = '';
                    this.todo.task = '';
                }
            }
        }
    }
})