class QueueingSys{    
    constructor(arrival_rate, service_rate ){
        this.arrival_rate = arrival_rate;
        this.service_rate = service_rate;
    }

    findTrafficIntensity(){
        return this.arrival_rate / this.service_rate;
    }

    testIfPoissonDistribution(){}

    findAvgNumOfItemInSys(){}

    findAvgNumOfElementsInQueue(){}

    findAvgTimeInQueue(){}

    findAvgTimeInSys(){}

    //probability of queueing on arrival equals traffic intensity

    findProbOfNotQueueingOnArrival(){}

    findProbOfNEelementsInSysAtTime(){}

    findProbOfNOrMoreElementsInSys(){}


}