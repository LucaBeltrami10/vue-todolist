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
            ]

        }
    },

    methods: {

    }
}) .mount('#app');