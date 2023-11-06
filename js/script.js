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
           showChat: false,
           indexMsg : 0
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
        openDropdown(i){
            if(this.indexMsg !== i){
                this.indexMsg = i
            } else {
                this.indexMsg = null
            }
        },
        deleteMsg(i){
            if(this.contacts[this.activeContact].messages.length === 0){
                console.log('ciao')
            } else{ 
                this.contacts[this.activeContact].messages.splice(i,1)
                this.indexMsg = null
                console.log('ciao')
            }
        }
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