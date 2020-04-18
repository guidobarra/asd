const { taskOne, taskTwo } = require('./tasks');

async function secuencial() {
    try{
        console.time("secuencial START");
    
        const valueOne = await taskOne();//sea hace la llamada de forma secuencial, apesar de ser funcinoes asincronicas
        const valueTwo = await taskTwo();

        console.timeEnd("secuencial START");

        console.log(valueOne);
        console.log(valueTwo);
    }
    catch(e){
        console.log(e);
    }
}
secuencial();

async function parallel() {
    try{
        console.time("parallel START");

        const response =  await Promise.all([taskOne(), taskTwo()])//sea hace la llamada de forma paralela
        
        console.timeEnd("parallel START"); 
        
        console.log(response[0]);
        console.log(response[1]);
    }
    catch(e){
        console.log(e)
    }
}
parallel();