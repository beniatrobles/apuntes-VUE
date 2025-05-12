let pabellones = ["Arrupe", "Areitza", "Aztarain", "Guturbai"]


class Servicio {
    constructor(servicio = "", pabellon = 0, mostrar = true) {
        this._servicio = servicio
        this._pabellon = pabellon
        this._mostrar = mostrar

    }

    get servicio() {
        return this._servicio;
    }

    get pabellon() {
        return this._pabellon
    }

    get mostrar() {
        return this._mostrar
    }

    set servicio(servicio) {
        this._servicio = servicio
    }

    set pabellon(pabellon) {
        if (pabellon >= 0 && pabellon < pabellones.length) {
            this._pabellon = pabellon
        }
    }

    set mostrar(mostrar) {
        this._mostrar = mostrar
    }


    mostrar() {
        let nombrePabellon = pabellones[this._pabellon]
        let visibilidad = ""
        if (this._mostrar === true) {
            visibilidad = "Visible"
        } else {
            visibilidad = "No visible"
        }

        return `${this._servicio} -- ${this._pabellon}: ${nombrePabellon} -- ${visibilidad}`
    }
    
}

