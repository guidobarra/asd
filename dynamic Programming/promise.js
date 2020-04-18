/*
//EJEMPLO DE CALLBACK HELL
function getRecipe() {
    setTimeout( () => {
        const recipeID = [523, 883, 432, 974]
        console.log(recipeID)

        setTimeout( (id) => {
            const recipe = {
                title: "Fresh tomato pasta",
                publisher: "Jonas"
            }
            console.log(`${id}: ${recipe.title}`)
            setTimeout(publisher => {
                const recipe2 = {title: "Italian Pizzza",
                                publisher: "jonas"}
                console.log(recipe)
            }, 1500, recipe.publisher)
        },1000 , recipeID[2])
    }, 1500) 
}
getRecipe()
*/


//Las promesas representa un valor que pueden estar disponibles ahora, en un futuro o nunca.
//por lo general utilizadas conjuntamente con las funciones asincronas, permiten desligarse de 
//lo que se conoce como el "CALLBACK HELL", es la dependencia de operaciones sobre el callback
//de otras funciones, esto al hacerlo varias veces se crea una depencia en cascada,
//a veces tiene forma de triangulo
//Una promesa puede tiener 1 estado a la vez, los estados posibles son 3 pendiente, resuelto, rechasado
//Una promesa se instacia pasandole una funcion, esta funcion tiene 2 parametros 
//resolve: cuando estamos en el estodo resuelto, osea que NO hay ningun error, se utiliza el resolve con el se puede retonar msj de OK, values, response, etc
//reject: cuando estamos en el estodo rechasado, osea que SI hay ningun error, se utiliza el reject con el se puede retonar msj de error, values, response, etc


//mejor codigo, mas legible.
function concatenatePromise(){
    const getIDS = new Promise( 
        (resolve, reject) => {
            setTimeout( //el array es lo que se va retorna
                () => {resolve([523, 883, 432, 974])},
                1500)
        }
    )
    
    const getRecipe = recID => {
        //este return es para poder concatenar las promesas y que sean como una cascada
        return new Promise(
            (resolve, reject) => {
                setTimeout( 
                    ID => {
                        const recipe = {
                            title: "Fresh tomato pasta",
                            publisher: "Jonas"
                        }
                        resolve([recipe, ID])
                    },
                    1500, 
                    recID)
            }
        )
    }
    
    const getRelated = publisher => {
        return new Promise( 
            (resolve, reject) => {
                setTimeout(pub => {
                    const recipe = {title: "Italian Pizzza",
                                    publisher: "jonas"}
                    resolve(`${pub}: ${recipe.title}`)
                }, 1500, publisher)
            }
    
        )
    }
    //al tener una instancia de la clase Promese, tenemos 2 metodos que son
    //then: se le pasa una funcion que puede tener parametro o no, dependiendo si el resolve se le paso algo. Estado resuelto
    //catch: se le pasa una funcion que puede tener parametro o no, dependiendo si el reject se le paso algo. Estado rechasado
    
    getIDS.
    then( IDs => {//en IDs esta el array que se retorno en la linea 56 con el resolve
        console.log(IDs)
        return getRecipe(IDs[2])//retorna una promesa, se concatenan
    }, error => {//para especificar los errores de la promesa concatenadas
        console.log(error)
    }).then( response => {
        let Id = response[1]
        let recipe = response[0]
        console.log(`${Id}: ${recipe.title},  ${recipe.publisher}`)
        return getRelated(recipe.publisher)
    }).then(recipe => {
        console.log(recipe)
    }).catch(error => {
        console.log("ERROR!!!!!", error)
    })
    //las variables  IDs, response y recipe son las respuesta o las variables que se pasaron a "resolve"
    //para cada una de las instancias de las clase Promise    
}
concatenatePromise();


//apesar de tener 2 metodos asincronos se tiene un estado, en este caso el que llego primero "resolve", 
//esto porque la promesa solo puede tener un estado
function promiseOneStatus() {
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve("Promesa Resuelta exitosamente"),
                1500
            )
    
            setTimeout(
                () => reject("Promesa Ocurrio un error"),
                2000
            )
        }
    )
    
    promise
    .then(responseResolve => console.log(responseResolve))
    .catch(responseReject => console.log(responseReject))
}
//promiseOneStatus();

//ejecuta TODAS las promesas, si todas tiene el estado RESUELTO va por "then",
//si alguna tiene el estado rechasado va por "catch"
function promiseAll() {
    let promise1 = new Promise(
        (resolve, reflect) => resolve("primera promesa resuelta")
    )
    let promise2 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("segundo promesa resuelta"),
                2000
            )
        }
    )
    let promise3 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("tercero promesa resuelta"),
                4000
            )
        }
    )
    let promise4 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("cuarta promesa resuelta"),
                6000
            )
        }
    )
    
    Promise.all([promise1, promise2, promise3, promise4]).
    then( values => {
        console.log(`Los valores son: ${values}`)
    }).catch( error => {
        console.log(`Ocurrio un error: ${error}`)
    })
}
//promiseAll();



const axios = require('axios').default;
//import axios from 'axios'

//cuando necesito conocer el resultado de todas las promesas
function promiseAll2() {
    var endPoint = "https://jsonplaceholder.typicode.com"

    Promise.all([
        axios.get(`${endPoint}/users`),
        axios.get(`${endPoint}/todos`)
                ]).
    then( ([users, todos]) => {
        console.log(users.data)
        console.log(todos.data)
    });
}
//promiseAll2();

//La promesa que termino primero de todo el array, se obtiene su repuesta,
//sea por resolve (then) o por reflect (catch)
function promiseRace() {
    let promise1 = new Promise(
        (resolve, reflect) => resolve("primera promesa resuelta")
    )
    let promise2 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("segundo promesa resuelta"),
                2000
            )
        }
    )
    let promise3 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("tercero promesa resuelta"),
                4000
            )
        }
    )
    let promise4 = new Promise(
        (resolve, reflect) => {
            setTimeout(
                () => resolve("cuarta promesa resuelta"),
                6000
            )
        }
    )

    Promise.race([promise1, promise2, promise3, promise4]).
    then( values => {
        console.log(`El valor es: ${values}`)
    }).catch( error => {
        console.log(`Ocurrio un error: ${error}`)
    })
}
//promiseRace();

//cuando necesito conocer el resultado de la primera promesa finalizada
function promiseRace1() {
    var endPoint = "https://jsonplaceholder.typicode.com"

    Promise.race([
        axios.get(`${endPoint}/users`),
        axios.get(`${endPoint}/todos`)
                ]).
    then( result => {
        console.log(result.data)
    });
}
//promiseRace1()

//bibliotecas para promesas "Q" y "BlueBird"

//cuando necesito conocer el resultado de un numero fijo de promesas
function promiseJoin(){
    var Promise = require("bluebird");
    var endPoint = "https://jsonplaceholder.typicode.com";

    Promise.join(
        axios.get(`${endPoint}/users`),
        axios.get(`${endPoint}/todos`),
        (users, todos) => {
            console.log(users.data)
            console.log(todos.data)
            //do something here
        }
    ).then( data => {
        //console.log(data);
    }).catch( error => {console.log(error)});
}
//promiseJoin();

//implementacion de map para promesas. Se puede usar en listas mixtas (Promesa/ valores)
function promiseMap(){
    var Promise = require("bluebird");
    var endPoint = "https://jsonplaceholder.typicode.com";

    let userIds = [1, 2, 3, 4];
    //hace varias promesas con distinta id de user,
    //en "data" estan todas las respuestas de las promesas
    Promise.map(userIds, userId => {
        return axios.get(`${endPoint}/users/${userId}`);
    })
    .then( data => {
        for(var i=0; i<userIds.length;i++){
            console.log(data[i].data)
        }
    });
}
//promiseMap();