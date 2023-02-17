let eventBus = new Vue();

Vue.component('container', {
    data() {
        return {
            firstCol: [],
            secondCol: [],
            thirdCol: []
        }
    },
    methods: {},
    template: `
<div>
    <create-form></create-form>
    <div class="container">
        <column1 class="column column1" :firstCol="firstCol"></column1>
        <column2 class="column column2" :secondCol="secondCol"></column2>
        <column3 class="column column3" :thirdCol="thirdCol"></column3>
    </div>
</div>
    `,
})

Vue.component('column1', {
    props: {
        firstCol: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    mounted() {
        eventBus.$on('on-submit', createNote => {
            if (this.firstCol.length < 3) {
                this.firstCol.push(createNote)
            }
        })
    },
    template: `
     <div>
        <note v-for="(note, key) in firstCol" :key="note.key" :note="note">
            
        </note>
    </div>
    `,
})

Vue.component('column2', {
    props: {
        secondCol: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    template: `
     <div>
        <note v-for="(note, key) in secondCol" :key="key" :note="note">
            
        </note>
    </div>
    `,
})

Vue.component('column3', {
    props: {
        thirdCol: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    template: `
     <div>
        <note v-for="(note, key) in thirdCol" :key="key" :note="note">
            
        </note>
    </div>
    `,
})

Vue.component('note', {
    props: {
        note: {
            type: Object,
        },
    },
    data() {
        return {
            taskTitle: null,
            isDone: false,
            doneNum: 0
        }
    },
    methods: {
        addTask() {
            if (this.taskTitle && this.note.tasks.length < 5) {
                let createTask = {
                    taskTitle: this.taskTitle,
                    isDone: false
                }
                this.note.tasks.push(createTask);
                this.taskTitle = '';
            }
        },
    },
    mounted() {
        // eventBus.$on('checkbox', updateCounter => {
        //     this.note.tasks.isDone = !this.note.tasks.isDone;
        // })
        eventBus.$on('update-checkbox', updCheckbox => {
            let doneCount = 0;
            let notDoneCount = 0;
            for (let task in this.note.tasks) {
                if (task.isDone) {
                    doneCount++;
                } else {
                    notDoneCount++;
                }
            }
            this.note.doneNum = (doneCount / (doneCount + notDoneCount)) * 100;
            console.log(doneCount)
            console.log(notDoneCount)
            console.log(this.note.doneNum)
        })
    },
    template: `
    <div class="todo-card todo-item">
        <div class="todo-title">
            <span>{{ note.title }}</span>
        </div>
        <task v-for="(task, key) in note.tasks" :key="key" :task="task"></task>
        <form v-show="this.note.tasks.length < 5" @submit.prevent="addTask">
            <input class="task-title-input" placeholder="new task" v-model="taskTitle" type="text">
            <input class="" type="submit" value="+"> 
        </form>
        <button class="delete-btn" @click="deleteTask()">Delete</button>
    </div>`,
})

Vue.component('task', {
    props: {
        task: {
            type: Object
        },
    },
    data() {
        return {}
    },
    methods: {
        handleCounter() {
            eventBus.$emit('checkbox', this.isDone)
        },
        updateCounter() {
            eventBus.$emit('update-checkbox', this.isDone)
        }
        // counter() {
        //     let doneCount = 0;
        //     let notDoneCount = 0;
        //     for (let elem in this.task) {
        //         if (elem.isDone) {
        //             doneCount += 1;
        //         } else notDoneCount += 1;
        //     }
        //     this.note.doneNum = (doneCount / (doneCount + notDoneCount)) * 100;
        //     console.log(this.doneNum)
        //     console.log(notDoneCount)
        // }
    },
    template: `
    <div>
        {{ task.taskTitle }}
        <input v-model="task.isDone" @click="updateCounter()" id="checkbox" type="checkbox">
<!--        {{ task.isDone }}-->
    </div>
    `,
})

Vue.component('create-form', {
    data() {
        return {
            title: null,
            taskTitle1: null,
            taskTitle2: null,
            taskTitle3: null,
            isDone: null
        };
    },
    methods: {
        onSubmit() {
            if (this.title && this.taskTitle1 && this.taskTitle2 && this.taskTitle3) {
                let createNote = {
                    title: this.title,
                    tasks: [
                        {
                            taskTitle: this.taskTitle1,
                            isDone: false
                        },
                        {
                            taskTitle: this.taskTitle2,
                            isDone: false
                        },
                        {
                            taskTitle: this.taskTitle3,
                            isDone: false
                        },
                    ]
                }
                eventBus.$emit('on-submit', createNote);
                this.title = '';
                this.taskTitle1 = '';
                this.taskTitle2 = '';
                this.taskTitle3 = '';
            }
        }
    },
    template: `
    <form class="create-form" @submit.prevent="onSubmit">
        <label>Create New Todo</label>
        <input v-model="title" type="text" placeholder="title">
        
        <!--        <label class="task-count-label">Tasks count</label>-->
        <!--        <div class="radios">-->
        <!--            <label v-show="radioValue >= 4">3</label>-->
        <!--            <input v-show="radioValue >= 4" v-model="radioValue" type="radio" value="3" name="radio-btn">-->
        <!--            <label>4</label>-->
        <!--            <input v-model="radioValue" type="radio" value="4" name="radio-btn">-->
        <!--            <label>5</label>-->
        <!--            <input v-model="radioValue" type="radio" value="5" name="radio-btn">-->
        <!--        </div>-->

        <input v-model="taskTitle1" type="text" placeholder="task - 1">
        <input v-model="taskTitle2" type="text" placeholder="task - 2">
        <input v-model="taskTitle3" type="text" placeholder="task - 3">
        
<!--        <input v-show="radioValue >= 4" v-model="todo.tasks" type="text" placeholder="task - 4">-->
<!--        <input v-show="radioValue == 5" v-model="todo.tasks" type="text" placeholder="task - 5">-->

        <input type="submit" value="Create">
    </form>
    `,
})


let app = new Vue({
    el: '#app',
    data: {
        // radioValue: null,
        // todos: {
        //     title: '55',
        //     tasks: [
        //         {
        //             task: 'Unholy confessions',
        //             isDone: false
        //         },
        //         {
        //             task: 'Stricken',
        //             isDone: false
        //         },
        //         {
        //             task: '123',
        //             isDone: false
        //         },
        //     ],
        //     isDoneCount: 0
        // },
        // newTitle: '',
        // newTask1: '',
        // newTask2: '',
        // newTask3: '',
        // newTask4: '',
        // newTask5: '',
        // newIsDone: false,
        // // firstCol: [],
        // // secondCol: [],
        // // thirdCol: []
    },
    methods: {
        // addTodo() {
        //     if (this.firstCol.length < 3) {
        //         if (this.newTitle && this.newTask1 && this.newTask2 && this.newTask3) {
        //             this.todos.push({
        //                 title: this.newTitle,
        //                 tasks: [
        //                     {
        //                         task: this.newTask1,
        //                         isDone: false
        //                     },
        //                     {
        //                         task: this.newTask2,
        //                         isDone: false
        //                     },
        //                     {
        //                         task: this.newTask3,
        //                         isDone: false
        //                     },
        //                 ],
        //                 isDoneCount: 0
        //             })
        //         }
        //     }
        //     this.title = '';
        //     this.newTask1 = '';
        //     this.newTask2 = '';
        //     this.newTask3 = '';
        // }
    }
})