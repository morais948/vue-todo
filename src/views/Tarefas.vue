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
                v-for="tarefa in $store.state.tarefas" :key="tarefa.id"
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
        }
    },
    methods: {
        handleAddTarefa(){
           this.$store.dispatch('addTarefa', this.novaTarefa)
           this.novaTarefa = null
        }
    }
};
</script>
