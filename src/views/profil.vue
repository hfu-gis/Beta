<template>
  <div class="body-1">
    <a href="www.BITofAdvice.de"><img src="img/BitOfAdvice_logo.png" height="85,6" width="198,4"/></a>
    <br>
    <img class="picture" src="img/Profilbilder/1.png" width="200" height="200" alt="Profilbild">
    <button type="Button" onclick="Changeevent"><img src="img/Bleistift.png" height="20" width="20"/><!--change Picture--></Button>
    <header> <h1 class="h1"><strong>Profile Name</strong><button type="Button" onclick="Changeevent"><img src="img/Bleistift.png"
                                                                                                          height="20" width="20"/>
      <!--Change name--></Button></h1></header>
<v-row>
    <v-btn width="20%" min-height="100px"  class="button md5">Profile</v-btn>
    <v-btn width="20%" min-height="100px" class="button">My Posts</v-btn>
      <v-btn width="20%" min-height="100px" class="button">Statistics</v-btn>
      <v-btn width="20%" min-height="100px" class="button">Abo`s/Friends</v-btn>
</v-row>
    <v-row>
      <v-btn width="20%" min-height="100px" class="button">Notification</v-btn>
      <v-btn width="20%" min-height="100px" class="button">Submit an Idea</v-btn>
      <v-btn width="20%" min-height="100px" class="button">My Reports</v-btn>
      <v-btn width="20%" min-height="100px" class="button">Logout</v-btn><!-- HTML-Code aus dem Body-Tag hier einfügen -->
    </v-row>
  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'profil',

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
  created() {}
}
</script>

<style scoped>


/* CSS für diese Seite hier einfügen */
</style>
