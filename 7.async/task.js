//nr1

class AlarmClock {
    constructor() {
        // console.log('test');
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time,callback, id){
        if(id==undefined)
            throw new Error('id is undefined');
        
        const found = this.alarmCollection.find(function(itm){
            return itm.id ==id;
          });

        console.log("found " + found)
        
        if (found !== undefined) {
            console.error();
            return;
        }
  
        let clock = {
            'id' : id,
            'time' : time,
            'callback' : callback
        }

        this.alarmCollection.push(clock);

        console.log('alarm collection ', this.alarmCollection);
  
    }

    removeClock(id){

        let filtered = this.alarmCollection.filter(function(itm){
            return itm.id !==id;
          });
        
        let isRemoved = this.alarmCollection !== filtered;

        console.log('isRemoved ', isRemoved);

        this.alarmCollection = filtered;        
       
        return isRemoved;

    }

    getCurrentFormattedTime(){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

        return `${hours}:${minutes}`;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()){
            alarm.callback();
        }
    }

    start(){
        if (this.time === null) {
            this.timerId = setInterval(()=> {
                this.alarmCollection.forEach(alarm => this.checkClock(alarm))
            }, 1000);
        }

    }

    stop(){
        //console.log("stop")
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(id => console.log(id), time => console.log(time));
    }

    clearAlarms(){
       this.stop();
       this.alarmCollection = [];
    }

}



//nr2


function testCase() {
    const alarm = new AlarmClock();
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    
    const callback1 = () => {
    console.log('pora wstawat');
    setTimeout(() => { alarm.removeClock(1) }, 5000);
    }
    
    const callback2 = () => {
    console.log('wstawaj a to prospisz');
    alarm.removeClock(2);
    }
    const callback3 = () => {
    console.log('wstawaj prospal');
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms();
    }
    alarm.addClock(hours + ':' + minutes, callback1, 1);
    alarm.addClock(hours + ':' + (+minutes + 1), callback2, 2);
    alarm.addClock(hours + ':' + (+minutes + 2), callback3, 3);
    alarm.printAlarms();
    alarm.start();
}