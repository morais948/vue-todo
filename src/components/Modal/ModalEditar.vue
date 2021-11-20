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
                ></v-text-field>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                >
                    cancelar
                </v-btn>
                <v-btn
                    color="grey"
                    text
                    @click="dialog = false"
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
    data () {
      return {
        dialog: true,
      }
    },
}
</script>

<style>

</style>