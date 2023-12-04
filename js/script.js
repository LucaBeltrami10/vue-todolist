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
            ]

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
            todoList.splice(index,1)
        }
    }
}) .mount('#app');