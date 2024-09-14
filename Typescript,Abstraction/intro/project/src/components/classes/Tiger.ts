import Animal from "./Animal";

class Tiger extends Animal{
    foodBehaviour(): void {
        throw new Error("tiger food behaviour");
    }
    sleepBehaviour(): void {
        throw new Error("tiger sleep behaviour");
    }
    noOfEyes: Number =2;
    noOfTails: Number =1;
    constructor(){
        super();
        console.log("inside Tiger Constructor");
    }
}

export default Tiger;