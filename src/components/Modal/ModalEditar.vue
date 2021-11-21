<template>
    <div>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
        >

            <v-card>
                <v-card-title class="text-h5">
                    Editar
                </v-card-title>
                <v-divider></v-divider>
                <v-text-field
                    class="px-2"
                    label="Titulo"
                    outlined
                    placeholder="Informe o novo titulo"
                    v-model="titulo"
                ></v-text-field>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
                    text
                    @click="$emit('fechaModal')"
                >
                    cancelar
                </v-btn>
                <v-btn
                    color="grey"
                    text
                    @click="handleEditar()"
                >
                    confirmar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['tarefa'],
    data () {
      return {
        dialog: true,
        titulo: null
      }
    },
    methods: {
        handleEditar(){
            this.$store.dispatch('editarTarefa', { ...this.tarefa, titulo: this.titulo })
            this.$emit('fechaModal')
        }
    },
    created(){
        this.titulo = this.tarefa.titulo
    },
}
</script>

<style>

</style>