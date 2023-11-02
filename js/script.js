import { contactList } from "./data.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
           contacts: contactList,
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.contacts)
    }
}).mount('#app')