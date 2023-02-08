Vue.component('todo-list', {
    props: {
        firstCol: {
            type: Array,
            required: true
        }
    },
    template: `
    <div class="todo-card">
        <li v-for="(todo, key) in firstCol" :key="todo.key" class="todo-item" >
            <p>{{ todo.title }}</p>
            <p>{{ todo.task }}</p><input type="checkbox">
            <p>{{ todo.task2 }}</p><input type="checkbox">
            <p>{{ todo.task3 }}</p><input type="checkbox">
            <p>{{ todo.task4 }}</p><input type="checkbox">
            <p>{{ todo.task5 }}</p><input type="checkbox">
<!--            <button @click="addNewTask">Add task</button>-->
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
            if (this.radioValue == '4') {
                if (this.firstCol.length < 3) {
                    this.firstCol.push({
                        title: this.todo.title,
                        task: this.todo.task,
                        task2: this.todo.task2,
                        task3: this.todo.task3,
                    })
                }
            }
            // if (this.todo.title) {
            //     if (this.firstCol.length < 3) {
            //         this.firstCol.push({
            //             title: this.todo.title,
            //             task: this.todo.task
            //         })
            //     }
            // }
            // this.todo.title = '';
            // this.todo.task = '';
        },
    }
})