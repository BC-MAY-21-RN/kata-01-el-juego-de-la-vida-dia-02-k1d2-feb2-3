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
            tableroX[i] = new Array(this.filas).fill('*')

            /* agregamos las celulas */
            /* let nuevaCelular = new Celula() */
        }
        console.log(tableroX);

    }
}
 

const tablero = new Tablero(8, 4);