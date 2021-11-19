<template>
    <div>
        <v-list
            flat
            subheader
            >
            <v-subheader>General</v-subheader>

            <v-list-item-group
                v-model="settings"
                multiple
                active-class=""
            >

            <Tarefa />

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
            settings: [],
        }
    },
};
</script>
