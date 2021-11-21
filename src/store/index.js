import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

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
        buscarTarefas(state){
            db.collection('tarefas').get().then(res => {
                state.tarefas = res
            })
        },
        addTarefa(state, titulo){
            if(titulo){
                db.collection('tarefas').add({
                    id: new Date().getTime(),
                    titulo, 
                    concluido: false
                })
            }
        },
        removeTarefa(state, id){
            state.tarefas = state.tarefas.filter(t => t.id !== id)
        },
        editarTarefa(state, novaTarefa){
            let i = state.tarefas.findIndex(el => el.id === novaTarefa.id)
            state.tarefas.splice(i, 1, novaTarefa)
        }
    },
    actions: {
        async addTarefa({ commit }, titulo){
            await commit('addTarefa', titulo)
            await commit('buscarTarefas')
        },
        removeTarefa({ commit }, id){
            commit('removeTarefa', id)
        },
        editarTarefa({ commit }, novaTarefa){
            commit('editarTarefa', novaTarefa)
        },
        buscarTarefas({ commit }){
            commit('buscarTarefas')
        }
    },
    modules: {
    }
})
