<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-img 
        src="https://picsum.photos/1980/1080/?blur"
        dark
        >
        <v-list-item>
          <v-list-item-content>
            <!--<v-list-item-title class="text-h6"> VueJS </v-list-item-title>-->
            <v-list-item-subtitle> Menu </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



    <v-app-bar
        app
        color="teal lighten-3"
        dark
        prominent
        src="https://picsum.photos/1980/1080/?blur"
        gradient="to top right, rgba(19, 84, 122, .5), rgba(28, 100, 199, .8)"
        height="140"
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title style="width: 100%">
          <InputTarefa />
        </v-toolbar-title>
   
    </v-app-bar>
    

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/InputTarefa.vue';
export default {
  components: { InputTarefa },
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-help-box", to: "/Sobre" },
    ],
    right: null,
  }),
  mounted(){
    this.$store.dispatch('buscarTarefas')
  }
};
</script>