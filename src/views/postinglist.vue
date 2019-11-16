<template>
  <div class="body-1">
      <v-col class="align-center">
        <v-container fluid>
          <v-row>
            <v-col md="2"> <v-btn>#Sucheingabe</v-btn> </v-col>
            <v-col md="1"> <v-btn> + </v-btn> </v-col>
          </v-row>
        </v-container>
        <section id="filter">

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                      color="grey darken-1"
                      dark
                      v-on="on"
              >
                Filter
              </v-btn>
            </template>
            <v-list>
                <v-list-item>Datum</v-list-item>
                <v-list-item>Relevanz</v-list-item>
            </v-list>
          </v-menu>


        </section>
      </v-col>

      <section id="post_list">
        <section class="post_container">
          <section class="post_left">
            <img class="post_thumbnail" src="../../img/Profilbilder/1.png"/>
          </section>
          <section class="post_right">
            <h2>Überschrift</h2>
            <h3>24.10.2019 // 13:09</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br><br> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </section>
        </section>
      </section>
  </div>
</template>

<script>
export default {
  name: 'template',

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
