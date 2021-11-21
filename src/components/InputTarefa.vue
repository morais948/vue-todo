<template>
    <div>
        <v-col
            cols="12"
            sm="6"
        >
            <v-text-field
                style="width: 100%"
                v-model="novaTarefa"
                label="Nova Tarefa"
                outlined
                clearable
                color="black"
                @keyup.enter="handleAddTarefa"
            ></v-text-field>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'InputTarefa',
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
}
</script>

<style>

</style>