<template>
    <div>

        <v-col
            cols="12"
            sm="6"
        >
            <v-text-field
                v-model="novaTarefa"
                label="Nova Tarefa"
                outlined
                clearable
                @keyup.enter="handleAddTarefa"
            ></v-text-field>
        </v-col>

        <v-list
            flat
            subheader
            >
            <v-subheader>General</v-subheader>

            <v-list-item-group
                multiple
                active-class=""
            >
            <div
                v-for="(tarefa, i) in tarefas" :key="i"
            >
                <Tarefa
                    :tarefa="tarefa"
                />
            </div>

            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
import Tarefa from '../components/tarefas/Tarefa.vue'
export default {
    name: "Tarefas",

    components: {
        Tarefa,
    },
    data() {
        return {
            novaTarefa: null,
            tarefas: [
                {
                    titulo: 'Ir ao Mercado',
                    concluido: false
                },
                {
                    titulo: 'Estudar',
                    concluido: true
                },
                {
                    titulo: 'Lavar o quarto',
                    concluido: false
                },
            ]
        }
    },
    methods: {
        handleAddTarefa(){
            this.tarefas.push({ titulo: this.novaTarefa, concluido: false })
            this.novaTarefa = null
        }
    }
};
</script>
