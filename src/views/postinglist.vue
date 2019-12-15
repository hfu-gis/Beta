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


    <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
    >
      <v-card
              :color="item.color"
              dark
      >
        <v-avatar
                class="ma-3"
                size="125"
                tile
        >
          <v-img class="img-circle" :src="item.src"></v-img>
        </v-avatar>


          <div class="d-flex d-inline-flex">

            <v-card-title
                    class="headline"
                    v-text="item.title"
            ></v-card-title>

            <v-card-subtitle v-text="item.artist"></v-card-subtitle>
          </div>

      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'postinglist',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data: () => ({
    items: [
      {
        color: '#8F94A6',
        src: 'https://randomuser.me/api/portraits/men/39.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#8F94A6',
        src: 'https://randomuser.me/api/portraits/men/49.jpg',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),

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
  .img-circle{
    border-radius: 5%;
  }
</style>
