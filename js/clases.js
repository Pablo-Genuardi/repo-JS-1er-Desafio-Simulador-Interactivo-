class Semillas {
    constructor(nombre, precio, stock, esNacional) {
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.stock = parseFloat(stock)
        this.esNacional = esNacional//true or false
    }
    precioConIva() {
        let precioIVA
        if (this.esNacional) {
            precioIVA = this.precio * IVA
        } else {
            precioIVA = this.precio * IVAIMP
        }
        return precioIVA.toFixed(2)
    }
    descontarStock(unidades) {
        return this.stock = this.stock - unidades
    }
    cotizar(unidades) {
        let resultado = this.precioConIva() * unidades
            return resultado.toFixed(2)
    }
    calcularEnvio() {
        let resultado = parseFloat(this.precioConIva()) * ENVIO
            return resultado.toFixed(2)
    }
}

