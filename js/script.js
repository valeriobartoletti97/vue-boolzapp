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
            const index = this.contacts.findIndex((contact)=> contact.id === id)
            if(index !== -1){
                this.activeContact = index
            }
        }
    },
    mounted(){
        console.log(this.contacts[0].avatar)
    }
}).mount('#app')