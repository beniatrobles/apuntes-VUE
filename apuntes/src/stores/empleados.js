import { defineStore } from "pinia";
import axios from "axios";

export const useEmpleadosStore = defineStore('empleados', {
    state: () => ({
        empleados: [],
        texto: 'Hola buenos dias, este texto viene de un store de pinia',
        numero: 0,
        departamentoSeleccionado: 'Desarrollo',
    }),
    getters: {

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Estos 5 puede preguntar/////////////////////////////////////
        totalEmpleados: (state) => state.empleados.length,
        empleadosFiltrados(state) {
            if (!state.departamentoSeleccionado) {
                return state.empleados; // Si no hay filtro, retorna todos los empleados
            }
            return state.empleados.filter(
                (empleado) => empleado.department === state.departamentoSeleccionado
            );
        },
        sumarSalarios(state) {
            let total = 0
            for (let empleado of state.empleados) {
                total += empleado.salary
            }

            return total
        },
        empleadosporDept(state){
            let empleadosPorDept = {}
            let nombresEmpleados = {}

            for (let empleado of state.empleados){
                if(empleadosPorDept[empleado.department]){
                    empleadosPorDept[empleado.department] += 1
                }else{
                    empleadosPorDept[empleado.department] = 1
                }
            }
            return empleadosPorDept
        },

        salarioPromedio(state) {
            let salarioPromedio

            salarioPromedio = this.sumarSalarios / this.totalEmpleados

            return salarioPromedio
        },

    //////////////////////////////////////////////////////////////////////////////////////////////
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

        salarioMaximo(state) {
            let salarioMaximo = -Infinity
            let empleadoMaximo = null

            for (let empleado of state.empleados) {
                if (empleado.salary > salarioMaximo) {
                    salarioMaximo = empleado.salary
                    empleadoMaximo = empleado.name
                }
            }

            return { salarioMaximo, empleadoMaximo }
        },

        salariosPorDept(state) {
            let salarioPorDept = {}

            for (let empleado of state.empleados) {
                if (salarioPorDept[empleado.department]) {
                    salarioPorDept[empleado.department] += empleado.salary
                } else {
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

            // Convertimos el Set a un Array para obtener los nombres de los departamentos
            let departamentosArray = [...departamentos];

            // El tamaño del Set será el número de departamentos únicos
            let cantidadDeDepartamentos = departamentosArray.length;

            // Devolvemos un objeto con los nombres de los departamentos y la cantidad
            return {
                departamentos: departamentosArray,  // Nombres de los departamentos
                cantidadDeDepartamentos: cantidadDeDepartamentos  // Número de departamentos únicos
            };
        }


    },
    actions: {
        async obtenerEmpleados() {
            try {
                let response = await axios.get('/Empleados.json?')
                this.empleados = response.data
            } catch (error) {
                console.error("Error al obtener los empleados", error)
            }
        },

        agregarEmpleado(nuevoEmpleado){
            nuevoEmpleado.id = this.empleados.length + 1;
            this.empleados.push(nuevoEmpleado)
        }
    }
})
