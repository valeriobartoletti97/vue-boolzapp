import { contactList } from "./data.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
           contacts: contactList,
           activeContact: 0,
           message:'',
           filterInContact: '',
        }
    },
    methods:{
        selectContact(id){
            const index = this.contacts.findIndex((contact)=> contact.id === id)
            if(index !== -1){
                this.activeContact = index
            }
        },
        sendMessage(){
            if(this.message === ''){
                this.message = ''
            } else {
                const newMessage = {
                date: new Date,
                message: this.message,
                status: 'sent'
            };
            this.contacts[this.activeContact].messages.push(newMessage);
            this.message = ''
            setTimeout(()=>{
                const newAnswer = {
                    date: new Date,
                    message: 'Ok',
                    status: 'received'
                };
                this.contacts[this.activeContact].messages.push(newAnswer);
            }, "1000");
            }
        },
    },
    computed:{
        filteredContacts(){
            return this.contacts.filter((contact)=> contact.name.toLowerCase().includes(this.filterInContact.toLowerCase()))
        }
    },
    mounted(){
        console.log(this.contacts[0].avatar)
    }
}).mount('#app')