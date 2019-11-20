<template>
  <div class="body-1">
    <a href="www.BITofAdvice.de"><img src="img/BitOfAdvice_logo.png" height="85,6" width="198,4"/></a>
    <br>
    <img class="picture" src="img/Profilbilder/1.png" width="200" height="200" alt="Profilbild">
    <button type="Button" onclick="Changeevent"><img src="img/Bleistift.png" height="20" width="20"/><!--change Picture--></Button>
    <header> <h1 class="h1"><strong>Profile Name</strong><button type="Button" onclick="Changeevent"><img src="img/Bleistift.png"
                                                                                                          height="20" width="20"/>
      <!--Change name--></Button></h1></header>

    <button class="button">Profile</Button>
    <button class="button">My Posts</Button>
    <button class="button">Statistics</Button>
    <button class="button">Abo`s/Friends</Button>
    <button class="button">Notification</Button>
    <button class="button">Submit an Idea</Button>
    <button class="button">My Reports</Button>
    <button class="button">Logout</Button><!-- HTML-Code aus dem Body-Tag hier einfügen -->
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
