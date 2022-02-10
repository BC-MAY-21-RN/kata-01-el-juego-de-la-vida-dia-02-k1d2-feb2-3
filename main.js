/* importar la clase celula */

class Tablero {
    constructor(filas,columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.creartablero();
    }
    
    creartablero() {

        /* creación del tablero, creamos las primeras filas como un array */
        let tableroX = new Array(this.columnas);
        
        /* Aqui el ciclo */
        for(let i = 0;i < tableroX.length; i++){
          
            /* llenamos las posiciones del tablero ahora con las filas respectivas */
            tableroX[i] = new Array(this.filas)/* .fill('*'); */

            // console.log(tableroX[i]);
            for(let j = 0; j < tableroX[i].length; j++) {
                
                /* Estado muerto = 0; vivo = 1*/
               
                let valor = Math.round(Math.random())
                // console.log(valor)

                tableroX[i][j] = valor;

                /* agregamos las celulas */
                /* let nuevaCelular = new Celula(fila = 2, columa = 3, 0) */
            }   


            // console.log(tableroX.join(" "));
           
        }
        console.log(tableroX);

    }
}
 

const tablero = new Tablero(8, 4);