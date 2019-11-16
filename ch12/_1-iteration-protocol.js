class Log{
    constructor(){
        this.message = [];
    }
    add(message){
        this.message.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator](){
        return this.message.values();
    }
}

const log = new Log();
log.add("first dat at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for(let entry of log){
    console.log(`${entry.message} @ ${entry.timestamp}`);
}