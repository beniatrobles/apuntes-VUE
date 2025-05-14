class PeliculaPremios{
    constructor(pelicula="",premio=""){
        this._pelicula = pelicula
        this._premio = premio
    }

    get pelicula(){
        return this._pelicula
    }

    get premio(){
        return this._premio
    }

    set pelicula(pelicula){
        this._pelicula = pelicula
    }

    set premio(premio){
        this._premio = premio
    }

    toString(){
        return `La pelicula ${this._pelicula} ha ganado el premio ${this._premio}`
    }
}

