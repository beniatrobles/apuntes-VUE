import axios from "axios";
import { defineStore } from "pinia";


export const useFestividadesStore = defineStore( 'festividades', {
    state: () => ( {
        festividades: [],
        municipioSeleccionado: '',
    } ),
    getters: {
        municipios( state )
        {
            return [ ...new Set( state.festividades.map( f => f.municipio ) ) ].sort()
        },

        festividadesFiltradas( state )
        {
            if ( state.municipioSeleccionado )
            {
                return state.festividades.filter(
                    ( festividad ) => festividad.municipio === state.municipioSeleccionado
                )
            } else
            {
                return state.festividades
            }
        },
        totalfestividades: ( state ) => state.festividades.length,
        totalAsistidos( state )
        {
            let asistidos = 0
            for ( let festividad of state.festividades )
            {
                if ( festividad.asistido === true )
                {
                    asistidos++
                }
            }
            return asistidos
        },
        futuras( state )
        {
            const hoy = new Date()

            return state.festividades.filter( festividad =>
            {
                const fechaFestividad = new Date( festividad.fecha )
                return fechaFestividad > hoy
            } ).sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
        }
    },
    actions: {
        async obtenerFestividades()
        {
            try
            {
                let response = await axios.get( '/festividades.json' )
                this.festividades = response.data

                //añadir campo asisitido
                this.festividades = response.data.map( festividad => ( {
                    ...festividad,
                    asistido: false
                } ) )
            } catch ( error )
            {
                console.error( "Error al obtener las festividades", error )
            }
        },
        toogleAsistido( id )
        {
            const festividad = this.festividades.find( f => f.id === id )
            if ( festividad )
            {
                festividad.asistido = !festividad.asistido
            }
        },

    }
} )