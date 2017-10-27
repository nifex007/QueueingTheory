class QueueingSys{    
    constructor(arrival_rate, service_rate ){
        this.arrival_rate = arrival_rate;
        this.service_rate = service_rate;
    }

    findTrafficIntensity(){
        return this.arrival_rate / this.service_rate;
    }

    testIfPoissonDistribution(){}

    avgNumOfItemInSys(){
        return (this.findTrafficIntensity()/(1 - this.findTrafficIntensity()));
    }
    /**
     * Average number of elements in the queue when there is queue 
     * @return number
     */
    avgNumOfElementsQueueExists(){
        return (1/(1 - this.findTrafficIntensity()));
    }

    /**
     * Average number of elements in the queue including when there's queue or no queue
     * @return number
     */
    avgNumOfElementsQueueNotExist(){
        var p = this.findTrafficIntensity();
        return (Math.pow(p, 2)/(1 - p));
    }

    avgTimeInQueue(){
        var avg_num_in_sys = this.avgNumOfItemInSys();
        return (avg_num_in_sys / this.service_rate );
    }

    avgTimeInSys(){
        var avg_num_in_queue = this.avgNumOfElementsQueueExists();
        return (avg_num_in_queue / this.service_rate);
    }

    /**
     * Note: probability of queueing on arrival equals traffic intensity
     */

    probOfQueueingOnArrival() {
        return this.findTrafficIntensity();
    }

    probOfNotQueueingOnArrival(){
        return (1 - this.findTrafficIntensity());
    }

    
    findProbOfNEelementsInSysAnyTime(n){
        var p = this.findTrafficIntensity();
        return (1 - p)* Math.pow(p, n);
    }

    findProbOfNOrMoreElementsInSys(n){
        var p = this.findTrafficIntensity();
        return Math.pow(p, n);
    }

    /**
     * For Simple queues, service rate must be greater than arrival rate
     */
    checkQueueData(){
        return this.service_rate > this.arrival_rate;
    }

    sysHandler(){
        const MSG = [
            'The Queue is not a simple queue',
            'One of Parameters are missing. Try again',
            'Everything looks fine',
            'Blah blah'
        ] 

    }


}

module.exports = QueueingSys;

/*
var test = new QueueingSys(15, 20);
console.log("Traffic Intensity: " + test.findTrafficIntensity());
console.log("Average Queue Length: " + test.avgNumOfElementsQueueExists());
console.log("Average Time Spent in Queue: " + test.avgTimeInQueue());
console.log("Average Time Spent in System: " + test.avgTimeInSys());
console.log("Probabilty that new arrival will not be on Queue: " + test.probOfNotQueueingOnArrival());
*/