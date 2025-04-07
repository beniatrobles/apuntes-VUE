import TareasCompletadas from "@/views/pinia/tareasCompletadas.vue";
import { defineStore } from "pinia";

export const useTareasStore = defineStore('tareas',{
    state: () =>({
        tareas: [
            {id: 1,nombre:'Comprar tabaco',descripcion:'Ir al estanco a comprar tabaco.',completada: true},
            {id: 2,nombre: 'Beber Monster',descripcion: 'Beber una monster de sabor pinia.',completada: false},
            {id: 3,nombre: 'Decir cosas.',descripcion: 'Decir cosas de las que no tengo ni idea pero hago como que si.',completada: true},
            {id: 4, nombre: 'No hacer casi nada', descripcion: 'No hacer casi nada y luego pretender que los demas me expliquen como se hace pero no mirar en ChatGPT', completada: false }
        ]
    }),
    getters: {
        tareasCompletadas: (state) => state.tareas.filter((tarea)=>tarea.completada),
        tareasTotales: (state) => state.tareas.length
    },
    actions:{
        addTarea(){
            
        }
    }

})