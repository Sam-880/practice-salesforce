import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {

    yourname;
    namehnadler(event) {
        this.yourname = event.target.value;
    }
//complex data type like object arrey
   @track players = {
        name: "Virat",
        age: 32
    }
    playershnadler(event) {
        this.players.name = event.target.value;
    }
}