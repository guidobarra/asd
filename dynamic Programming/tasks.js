const util = require('util');
const sleep = util.promisify(setTimeout)//transforma una funcion basada en callback, a una promesa

module.exports = {

    async taskOne() {
        try{
            await sleep(4000);
            return "ONE RETURNED";
        }
        catch(e){
            console.log(e)
        }
    },

    async taskTwo() {
        try{
            await sleep(2000)
            return "TWO RETURNED";
        }
        catch(e){
            console.log(e)
        }
    }
};

//PROMISIFY: convierte en promesa a una funcion basada en callback 
function readFileAsync(){
    const {promisify} = require('util');

    const fs = require('fs');
    const readFileAsync = promisify(fs.readFile);
    const path = '/home/guidabarraitr/Escritorio/dockercommands.txt'
    readFileAsync(path, {encoding: 'utf8'})
    .then( text => {
        console.log('CONTEXT: ',text);
    }).catch( error => {
        console.log("ERROR:", error);
    });
}
readFileAsync();
