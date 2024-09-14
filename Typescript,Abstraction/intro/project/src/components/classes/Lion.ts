import Animal from "./Animal";

class Lion extends Animal{
    foodBehaviour(): void {
        throw new Error("lion food behaviour");
    }
    sleepBehaviour(): void {
        throw new Error("lion sleep behaviour");
    }
    noOfEyes: Number =2;
    noOfTails: Number =1;
    constructor(){
        super();
        console.log("inside lion Constructor");
    }
}

export default Lion;