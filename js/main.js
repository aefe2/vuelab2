Vue.component('todo-list', {
    props: {
        todos: {
            type: Array,
        },
    },
    template: `
    <div class="todo-card">
        <div class="todo-title">
            <span>{{ tasks.title }}</span>
        </div>
        <div v-for="(elem, key) in todos.tasks" :key="key" class="todo-tasks">
            <div class="task">
                <span class="task-data">{{ elem.task }}<input type="checkbox"></span>
            </div>
<!--            <div class="add-task">-->
<!--                <input type="text">-->
<!--            </div>-->
        </div>
<!--        <button class="delete-btn" @click="$delete(item, key)">Delete</button>-->
    </div>
    `,
    methods: {}
})

let app = new Vue({
    el: '#app',
    data: {
        radioValue: null,
        todos: [{
            title: '',
            tasks: [
                {
                    task: 'Unholy confessions',
                    isDone: false
                },
                {
                    task: 'Stricken',
                    isDone: false
                },
                {
                    task: '123',
                    isDone: false
                },
            ],
            isDoneCount: 0
        }],
        newTitle: '',
        newTask1: '',
        newTask2: '',
        newTask3: '',
        newTask4: '',
        newTask5: '',
        newIsDone: false,
        firstCol: [],
        secondCol: [],
        thirdCol: []
    },
    methods: {
        addTodo() {
            if (this.firstCol.length < 3) {
                if (this.newTitle && this.newTask1 && this.newTask2 && this.newTask3) {
                    this.todos.push({
                        title: this.newTitle,
                        tasks: [
                            {
                                task: this.newTask1,
                                isDone: false
                            },
                            {
                                task: this.newTask2,
                                isDone: false
                            },
                            {
                                task: this.newTask3,
                                isDone: false
                            },
                        ],
                        isDoneCount: 0
                    })
                }
            }
            this.title = '';
            this.newTask1 = '';
            this.newTask2 = '';
            this.newTask3 = '';
        }
    }
})