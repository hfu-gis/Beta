<template>
  <v-flex>
    <v-dialog max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn text class="success" v-on="on">
          Einstellungen
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Profilesettings</h2>
        </v-card-title>
      </v-card>
      <v-card-text class="white">
        <v-form class="px-3">
          <v-text-field label="firstname" v-model="settings.firstname"></v-text-field>
          <v-text-field label="middlename" v-model="settings.middlename"></v-text-field>
          <v-text-field label="lastname" v-model="settings.lastname"></v-text-field>
        </v-form>
      </v-card-text>
    </v-dialog>
  </v-flex>
</template>


<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'profilesettings',

  // benötigte Komponenten
  components: { },

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {
      settings: {
        firstname: '',
        middlename: '',
        lastname: ''
      }
    }
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {
    this.settings = require('../assets/data/profilesettings')
  }
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */

/* CSS des Modal zu den Profileinstellungen */
</style>
