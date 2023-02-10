import { api, LightningElement, track } from 'lwc';
import getContactlst from '@salesforce/apex/dataTableWithRowSelection.getContactList';

const columns=[
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone'}
]
export default class DataTableWithRowSeclection extends LightningElement {
@track showContact='Show Contacts';
@track isVisible=false;
columns=columns;
@track data=[];
@api recordId;//Its Store the current page reocrdId

//get related contacts from apex class
connectedCallback(){
    //calling apex method
    getContactlst({lwcRecordId : this.recordId})
    .then(response =>{
        this.data = response;
    })
    .catch(err => {
        console.log('error occured'+err);
    })
}

//show/Hide Button toggle Functionality
handleClick(event){
    const label=event.target.label;
    if(label === 'Show Contacts'){
        this.showContact = 'Hide Contacts';
        this.isVisible =true;
    }else if(label === 'Hide Contacts'){
        this.showContact = 'Show Contacts';
        this.isVisible =false;
    }

}
 
}