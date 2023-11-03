import { contactList } from "./data.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
           contacts: contactList,
           activeContact: 0,
           message:''
        }
    },
    methods:{
        selectContact(id){
            this.activeContact = this.contacts.findIndex((contact)=> contact.id === id)
        }
    },
    mounted(){
        console.log(this.contacts[0].avatar)
    }
}).mount('#app')