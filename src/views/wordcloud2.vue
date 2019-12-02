<template>
  <div class="body-1">
      <br>
      <br>
      <br>
    test1

    <!--<vue-word-cloud
            :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
            :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
            font-family="Roboto"
    />-->



    test2


  </div>
</template>

<script>
  import VueWordCloud from 'vuewordcloud';
  /*src="https://unpkg.com/vue";
  src="https://unpkg.com/vuewordcloud";*/

export default {
  // gebt jeder Page einen eigenen Namen
  name: 'wordcloud2',

  // benötigte Komponenten
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {}
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: {},

  // Initialisierung
  created() {}
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
