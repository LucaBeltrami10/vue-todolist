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
            console.log('funzione per testo sbarrato')
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
            console.log('fatto?')
            if(this.todoList[index].done === false){
                return this.todoList[index].done = true
            }else{
                return this.todoList[index].done = false
            }   
        },
    }
}) .mount('#app');