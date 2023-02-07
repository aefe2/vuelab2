

let app = new Vue({
    el: '#app',
    data: {
        todo: {
            title: '123',
            tasks: ['123', '123'],
            isDone: true
        }
    },
    mounted() {
        if (localStorage.todo) {
            this.todo = JSON.parse(localStorage.todo)
        }
    },
    computed: {},
    methods: {},
})