const dt = luxon.DateTime;

import { contactList } from "./data.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
           contacts: contactList,
           activeContact: 0,
           message:'',
           filterInContact: '',
           showChat: false
        }
    },
    methods:{
        selectContact(id){
            const index = this.contacts.findIndex((contact)=> contact.id === id)
            if(index !== -1){
                this.activeContact = index
            }
            this.showChat = true;
        },
        sendMessage(){
            if(this.message === ''){
                this.message = ''
            } else {
                const newMessage = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.message,
                status: 'sent'
            };
            this.contacts[this.activeContact].messages.push(newMessage);
            this.message = ''
            setTimeout(()=>{
                const newAnswer = {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
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