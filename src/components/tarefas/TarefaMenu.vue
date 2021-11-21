<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                v-bind="attrs"
                v-on="on"
                icon
                >
                <v-icon>
                    mdi-dots-vertical
                </v-icon>

                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    @click="item.click()"
                    >
                    <v-icon left>{{ item.icone }}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <ModalEditar
            v-if="items[0].modal"
            @fechaModal="items[0].modal = false"
            :tarefa="tarefa"
        />

        <ModalExcluir 
            v-if="items[1].modal"
            @fechaModal="items[1].modal = false"
            :tarefa="tarefa"
        />
    </div>
</template>

<script>
import ModalEditar from '../Modal/ModalEditar.vue'
import ModalExcluir from '../Modal/ModalExcluir.vue'
export default {
    name: 'TarefaMenu',
    props: ['tarefa'],
    components: {
        ModalEditar,
        ModalExcluir
    },
    data() {
        return {
            items: [
                {
                    icone:'mdi-pencil',
                    title: 'Editar',
                    modal: false,
                    click(){
                        this.modal = true
                    }
                },
                { 
                    icone:'mdi-delete-empty', 
                    title: 'Excluir',
                    modal: false,
                    click(){
                        this.modal = true
                    }
                },
            ],
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>