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
          

            tableroX[i] = new Array(this.filas).fill('*')

          
        }
        console.log(tableroX);

    }
}
 

const tablero = new Tablero(8, 4);