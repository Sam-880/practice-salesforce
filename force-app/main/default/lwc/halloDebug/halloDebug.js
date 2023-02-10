import { LightningElement, track } from 'lwc';

export default class HalloDebug extends LightningElement {
@track greeting

connectedCallback(){
    this.greeting='world';
    console.log(":::::::::::::::::",this.greeting);
}

}