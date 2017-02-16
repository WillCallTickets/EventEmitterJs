class EventEmiter {
  constructor() {
    this.events = {};
  }
  
  on(eventName, cb) {
    if(this.events[eventName]){
      this.events[eventName].push(cb);
    } else {
      this.events[eventName] = [cb];// push an array with the cb to init
    }
  }
  
  trigger(eventName, ...rest){
    this.events[eventName].forEach((cb) => {
       cb.apply(this, rest);
    });
  }
}


const ee = new EventEmiter();

ee.on('click', (e) => {
  console.log('clicked', e);
});
  

ee.trigger('click', 'params');

