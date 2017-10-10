class QueueingSys{    
    constructor(arrival_rate, service_rate ){
        this.arrival_rate = arrival_rate;
        this.service_rate = service_rate;
    }

    findTrafficIntensity(){
        return this.arrival_rate / this.service_rate;
    }

    testIfPoissonDistribution(){}

    findAvgNumOfItemInSys(){
        return (this.findTrafficIntensity()/(1 - this.findTrafficIntensity));
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
        return (Math.power(p, 2)/(1 - p));
    }

    avgTimeInQueue(){}

    avgTimeInSys(){}

    /**
     * Note: probability of queueing on arrival equals traffic intensity
     */

    probOfNotQueueingOnArrival(){
        return (1 - this.findTrafficIntensity());
    }

    
    findProbOfNEelementsInSysAnyTime(n){
        var p = this.findTrafficIntensity();
        return (1 - p)* Math.pow(p, n);
    }

    findProbOfNOrMoreElementsInSys(n){
        return Math.pow(p, n);
    }

    sysHandler(){

    }


}

var test = new QueueingSys(1, 2);
console.log(test.findTrafficIntensity());
console.log(test.avgNumOfElementsQueueExists());