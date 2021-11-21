import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: [],
    },
    mutations: {
        buscarTarefas(state){
            db.collection('tarefas').get().then(res => {
                state.tarefas = res
            })
        },
    },
    actions: {
        addTarefa({ commit }, titulo){
            if(titulo){
                db.collection('tarefas').add({
                    id: new Date().getTime(),
                    titulo, 
                    concluido: false
                }).then(() => {
                    commit('buscarTarefas')
                })
            }
        },
        removeTarefa({ commit }, id){
            db.collection('tarefas').doc({ id }).delete().then(() => {
                commit('buscarTarefas')
            })
        },
        editarTarefa({ commit }, novaTarefa){
            db.collection('tarefas').doc({ id: novaTarefa.id }).update({
                titulo: novaTarefa.titulo
            }).then(() => {
                commit('buscarTarefas')
            })
        },
        buscarTarefas({ commit }){
            commit('buscarTarefas')
        },
        marcarConcluida(_, tarefa){
            db.collection('tarefas').doc({ id: tarefa.id }).update({
                concluido: tarefa.concluido
            })
        }
    },
    modules: {
    }
})
