import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: [
            {
                id: 1,
                titulo: 'Ir ao Mercado',
                concluido: false
            },
            {
                id: 2,
                titulo: 'Estudar',
                concluido: true
            },
            {
                id: 3,
                titulo: 'Lavar o quarto',
                concluido: false
            },
        ],
    },
    mutations: {
        addTarefa(state, titulo){
            if(titulo){
                state.tarefas.push({
                    id: new Date().getTime(),
                    titulo, 
                    concluido: false
                })
            }
        },
        removeTarefa(state, id){
            state.tarefas = state.tarefas.filter(t => t.id !== id)
        }
    },
    actions: {
        addTarefa({ commit }, titulo){
            commit('addTarefa', titulo)
        },
        removeTarefa({ commit }, id){
            commit('removeTarefa', id)
        }
    },
    modules: {
    }
})
