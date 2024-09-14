 abstract class Animal{

    constructor(){
        console.log("Inside Animal Constructor");
    }

    noOfLegs:Number = 4;
   abstract noOfEyes:Number;
   abstract noOfTails:Number;

   breathingSpeed = ()=>{
    console.log("Breathes 50 times per min");
   }

   abstract foodBehaviour():void;
   abstract sleepBehaviour():void;

}

export default Animal;