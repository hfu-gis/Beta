<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'searchBlank',

  // benötigte Komponenten
  components: {},

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
  created() {
    this.$router.replace('/postinglist')
  }
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
