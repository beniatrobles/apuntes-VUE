import { defineStore } from "pinia";

export const useFavoritosStore = defineStore( 'favoritos', {
    state: () => ( {
        numeroFavoritos: 0,
        favoritos: []
    } ),
    actions: {
        añadirFavoritos( servicio )
        {
            this.favoritos.push( servicio )
            this.numeroFavoritos ++
            console.log( this.favoritos,this.numeroFavoritos )
        },
        quitarFavoritos( servicio )
        {

            let index = this.favoritos.indexOf( servicio )
            this.favoritos.splice( index, 1 )
            this.numeroFavoritos --
            console.log( this.favoritos,this.numeroFavoritos )
        }
    }
} )