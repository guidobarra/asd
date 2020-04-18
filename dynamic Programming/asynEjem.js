//  STACK DE EJECUCION     |                               WEB APIS
//                         |                                            
//                         |        CALLS FUNCIONES                      setTimeout()
//                  ►►►►►►►|            ▼                                DOM events        
//                         |            ▼                                XMLHyypRequest()
//                         |--------------------------------------------------------------------
//                         |                            MESSAGE QUEUE
//                         |
//                         |◄◄◄◄◄◄◄
//                         |
//El flujo para algunos de los metodos o funciones asincronicas es primero pasar al stack de ejecucion
//despues todo el contexto se lo guarda en una WEB APIS, en nuestro caso el contexto de setTimeout(), 
//despues dependiendo de un evento, en nuestro caso los 2000ms, pasa la una cola y despues va al stack 
//de ejecucion con todo su contexto.
/*
var second = () => {
    setTimeout(
        () => {console.log("Async Hey there")},
        2000);
}

const first = () => {
    console.log("Hey there");
    second();
    console.log("The end");
}
first();
*/

