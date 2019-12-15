<template>

  <body>
  <v-parallax src="../../img/Background/ocean.jpg" class="oceanbackground" width="width" height="100%">

      <div class="text-center">
      <img class="img-circle" src="https://randomuser.me/api/portraits/men/39.jpg" height="150" width="150" align="center"/>
      <v-btn fab x-small dark><v-icon>mdi-pencil</v-icon></v-btn>

      <header> <h1 class="h1" ><strong>Profile Name</strong><v-btn fab x-small dark><v-icon>mdi-pencil</v-icon></v-btn>
      <!--Change name--></h1></header></div>
<v-row align="center">

    <v-col class="text-center" cols="12" sm="3">
        <div class="my-2">

            <v-btn width="100em" height="8em" class="button md5"  outlined>Profile</v-btn>
        </div>
        <br>
    <div class="my-2">
        <v-btn width="100em" height="8em" class="button" outlined>Notification</v-btn>

    </div>
</v-col>
    <v-col class="text-center" sm="3">
        <div class="my-2">
        <v-btn width="100em" min-height="8em" class="button" outlined>My Posts</v-btn>
        </div>
        <br>
            <div class="my-2">
        <v-btn width="100em" min-height="8em" class="button" outlined>Submit an Idea</v-btn>
            </div>
    </v-col>
        <v-col class="text-center" sm="3">
            <div class="my-2">
            <v-btn width="100em" min-height="8em" class="button" outlined>Statistics</v-btn>
            </div>
            <br>
                <div class="my-2">
            <v-btn width="100em" min-height="8em" class="button" outlined>My Reports</v-btn>
                </div>
        </v-col>
            <v-col class="text-center" sm="3">
                <div class="my-2">
                <v-btn width="100em" min-height="8em" class="button" outlined>Abo`s/Friends</v-btn>
                </div>
                <br>
                    <div class="my-2">
                        <v-hover v-slot:default="{ hover }">
                <v-btn width="100em" min-height="8em" class="button" outlined >Logout </v-btn>
                        </v-hover>
                    </div>
            </v-col>
    </v-row>
  </v-parallax>
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
    .oceanbackground{
        width: 100%;
        height: 100%;
        position: absolute;

    }
    .img-circle{
        border-radius: 50%;
    }
/* CSS für diese Seite hier einfügen */
</style>
