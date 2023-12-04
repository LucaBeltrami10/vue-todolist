const {createApp} = Vue;

createApp({
    data() {
        return {
            todoList : [
                {
                    text : 'Fare la spesa',
                    done : false
                },
                {
                    text : 'Comprare regali di natale',
                    done : false
                },
                {
                    text : 'Prenotare viaggio',
                    done : true
                },
                {
                    text : 'Imparare a cucinare',
                    done : false
                },
                {
                    text : 'Leggere 50 pagine',
                    done : true
                },
            ],
            newTask : '',

        }
    },

    methods: {
        getLineThrough(index){
            if(this.todoList[index].done === true){
                return "text-decoration-line-through";
            }else{
                return "text-decoration-none"
            }
        },

        removeTask(index){
            this.todoList.splice(index,1)
        },
        
        addTask(){
            this.todoList.push({text : this.newTask, done: false})
        },

        getDone(index){
            this.todoList[index].done = 'true'
        },
    }
}) .mount('#app');