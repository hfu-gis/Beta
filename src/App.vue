<template>
  <v-app>
    <v-app-bar
      app
      color="third"
      dark
    >

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../img/Logos/BitOfAdvice_logo_2.png"
          width="100"
        />

      <v-spacer/>
        <v-btn text to="/login">
          Login
        </v-btn>

      <v-btn text to="/profilesettings">
          Profileinstellungen
        </v-btn>

      <v-btn text to="/postinglist">
        (temp) Beitrags-Liste
      </v-btn>
      <v-btn text to="/registration">
         registration
      </v-btn>

      <v-btn text to="/wordcloud">
        WordCloud
      </v-btn>

      <v-btn text to="/Profil" fab="true">
        <v-avatar>
          <v-img src="../img/Profilbilder/1.png"></v-img>
        </v-avatar>
      </v-btn>


    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  created() {
    this.$router.push({path: '/home'})
  }
};
</script>
