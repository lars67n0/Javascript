const app = Vue.createApp({
    // data or functions

    data() {
        return {
            lastSeen: 0
        }
    },

    methods:{
        changeNumber(){
            this.lastSeen = 5
            
        }
    }
})



app.mount('#app')