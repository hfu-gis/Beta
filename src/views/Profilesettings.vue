<template>
  <v-flex>
    <Profilesettingspopup></Profilesettingspopup>
  </v-flex>
</template>


<script>
  import Profilesettingspopup from "../components/Profilesettingspopup";

export default {
  // gebt jeder Page einen eigenen Namen
  name: 'profilesettings',

  // benötigte Komponenten
  components: { Profilesettingspopup },

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {}
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {}
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */

/* CSS des Modal zu den Profileinstellungen */
</style>
