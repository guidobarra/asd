// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/
//las funciones tiene sus propio contexto, tienen alcance a sus variables declaradas y si no se encuentra la variable
//se  fija en el contexto  de alcance donde se declaro la funcion y no donde se la llamo.
//por esto la funcion second tiene alcance a su variable declarada "c", a la varible "b" que no esta declarada
//esto es porque donde se declaro la funcion second es en la funcion first, este tiene alcance a las varaibles "a" y "b"
//la salida: Hello!Hi!Hey!
//contexto de ejecucion: pila                                                //contexto de alcance: variables que alcansan
// contexto second EJEC                                                          contexto global ALCAN    a = 'Hello!'
//             ^                                                                           ^
//             ^                                                                           ^
// contexto first EJEC                                                             contexto first ALCAN    a = 'Hello!'
//             ^                                                                               ^           b = 'Hi!'
//             ^                                                                               ^
// contexto global EJEC                                                                 contexto second ALCAN   a = 'Hello!'
//                                                                                                              b = 'Hi!'
//                                                                                                              c = 'Hey!'
                                                          
                                    


// Example to show the differece between execution stack and scope chain
//en este ejemplo obtenemos un ERROR porque la funcion third  no tiene como alcance la variable "b", la funcion third esta 
//declarada en contexto de alcance global, que tiene alcance a la varible "a"
/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}*///salida: error

//contexto de ejecucion: pila                                                //contexto de alcance: variables que alcansan
// contexto third EJEC                                                          contexto global ALCAN    a = 'Hello!'
//             ^                                                                           ^
//             ^                                                                           ^
// contexto second EJEC                                                            contexto first ALCAN    a = 'Hello!'
//             ^                                                                               ^           b = 'Hi!'
//             ^                                                                               ^
// contexto first EJEC                                                                 contexto second ALCAN   a = 'Hello!'
//             ^                                                                           ^                   b = 'Hi!'
//             ^                                                                           ^                   c = 'Hey!'
// contexto global EJEC                                                            contexto third ALCAN    a = 'Hello!'
//                                                                                                         d = 'John'
