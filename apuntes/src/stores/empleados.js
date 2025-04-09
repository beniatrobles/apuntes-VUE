import { defineStore } from "pinia";
import axios from "axios";

export const useEmpleadosStore = defineStore('empleados',{
    state: () => ({
        empleados : [],
        texto: 'Hola buenos dias, este texto viene de un store de pinia',
        numero: 0
    }),
    getters:{
        totalEmpleados: (state) => state.empleados.length,
        sumarSalarios(state){
            let total = 0
            for(let empleado of state.empleados){
                total += empleado.salary
            }

            return total
        },

        salarioPromedio(state){
            let salarioPromedio

            salarioPromedio = this.sumarSalarios/this.totalEmpleados

            return salarioPromedio
        },

        salarioMinimo(state) {
            let salarioMinimo = Infinity  // Inicializamos con un valor muy alto
            let empleadoMinimo

            // Iteramos sobre cada empleado
            for (let empleado of state.empleados) {
                // Comparamos el salario del empleado con el salario mínimo actual
                if (empleado.salary < salarioMinimo) {
                    salarioMinimo = empleado.salary  // Si el salario del empleado es menor, lo actualizamos
                    empleadoMinimo = empleado.name
                    
                }
            }
        
            return { salarioMinimo, empleadoMinimo }; // Devolvemos el salario mínimo encontrado
        
        },

        salarioMaximo(state){
            let salarioMaximo = -Infinity
            let empleadoMaximo = null

            for(let empleado of state.empleados){
                if(empleado.salary > salarioMaximo){
                    salarioMaximo = empleado.salary
                    empleadoMaximo = empleado.name
                }
            }

            return {salarioMaximo,empleadoMaximo}
        },

        salariosPorDept(state){
            let salarioPorDept = {}

            for(let empleado of state.empleados){
                if(salarioPorDept[empleado.department]){
                    salarioPorDept[empleado.department]+=empleado.salary
                }else{
                    salarioPorDept[empleado.department] = empleado.salary
                }
            }
            return salarioPorDept
        },

        departamentosTotales(state) {
            // Usamos un Set para almacenar los departamentos únicos
            let departamentos = new Set();
        
            for (let empleado of state.empleados) {
                departamentos.add(empleado.department);
            }
        
            // El tamaño del Set será el número de departamentos únicos
            return departamentos.size;
        }

        
    },
    actions: {
        async obtenerEmpleados() {
            try{
                let response = await axios.get('/Empleados.json?')
                this.empleados = response.data
            }catch(error){
                console.error("Error al obtener los empleados",error)
            }
        }
    }
})
