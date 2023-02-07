Vue.component('todo-list', {
    props: ['todos'],
    template: `
        <div>
            <div>
                <p>{{todos.title}}</p>
                <p>{{todos.tasks}}</p>
                <button>+</button>
                <p>{{todos.isDone}}</p>
            </div>
        </div>
    `,
})

let app = new Vue({
    el: '#app',
    data() {
        return {
            todos: {
                title: '345',
                tasks: '123',
                isDone: false
            },
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
    }
})