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
            } ).sort( ( a, b ) => new Date( a.fecha ) - new Date( b.fecha ) )
        },

        municipiosConMultiples( state )
        {
            const conteo = {}
            const resultado = []

            // Contar cuántas festividades hay por municipio
            for ( let i = 0; i < state.festividades.length; i++ )
            {
                const municipio = state.festividades[ i ].municipio
                if ( conteo[ municipio ] )
                {
                    conteo[ municipio ]++
                } else
                {
                    conteo[ municipio ] = 1
                }
            }

            // Recorrer el objeto y agregar municipios con más de una festividad
            for ( let municipio in conteo )
            {
                if ( conteo[ municipio ] > 1 )
                {
                    resultado.push( municipio )
                }
            }

            // Ordenar alfabéticamente
            resultado.sort()

            return resultado
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