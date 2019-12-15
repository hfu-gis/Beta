<template>

  <body>


      <div class="text-center">
      <img src="../../img/Profilbilder/Platzhalter_Profilbild.png" height="290" width="250" align="center"/>
      <v-btn fab x-small dark><v-icon>mdi-pencil</v-icon></v-btn>

      <header> <h1 class="h1"><strong>Profile Name</strong><v-btn fab x-small dark><v-icon>mdi-pencil</v-icon></v-btn>
      <!--Change name--></h1></header></div>
<v-row align="center">

    <v-col class="text-center" cols="12" sm="3">
        <div class="my-2">
        <v-btn width="100em" height="8em"  class="button md5">Profile</v-btn>
        </div>
        <br>
    <div class="my-2">
        <v-btn width="100em" height="8em" class="button">Notification</v-btn>

    </div>
</v-col>
    <v-col class="text-center" sm="3">
        <div class="my-2">
        <v-btn width="100em" min-height="8em" class="button">My Posts</v-btn>
        </div>
        <br>
            <div class="my-2">
        <v-btn width="100em" min-height="8em" class="button">Submit an Idea</v-btn>
            </div>
    </v-col>
        <v-col class="text-center" sm="3">
            <div class="my-2">
            <v-btn width="100em" min-height="8em" class="button">Statistics</v-btn>
            </div>
            <br>
                <div class="my-2">
            <v-btn width="100em" min-height="8em" class="button">My Reports</v-btn>
                </div>
        </v-col>
            <v-col class="text-center" sm="3">
                <div class="my-2">
                <v-btn width="100em" min-height="8em" class="button">Abo`s/Friends</v-btn>
                </div>
                <br>
                    <div class="my-2">
                <v-btn width="100em" min-height="8em" class="button">Logout</v-btn><!-- HTML-Code aus dem Body-Tag hier einfügen -->
                    </div>
            </v-col>
    </v-row>
  </body>
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
