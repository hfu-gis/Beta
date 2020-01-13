<template>
  <div class="body-1">

    <v-carousel height="10%" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-1"><h1  class="container"><u>{{ slide.h1}}</u></h1>
              <p class="container_text" >{{ slide.text}}</p>

            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'about',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data () {
    return {
      colors: [
        '#8C3F63',
        '#BF4974',
        '#8C3F63',
      ],
      slides: [
        {h1:'about us',text:'Welcome to Bit of advice, your number one source for all things. We\'re dedicated to giving you the very best of advice, with a focus on accuracy, efficient,simplicity.\n' +
                  '\n' + 'We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don\'t hesitate to contact us.\n' +
                  '\n' +'Sincerely, \n' + 'Team Beta'},
        {h1:'what is Bit of advice',text:'Bit of advice is home to thousands of communities, endless conversation, and authentic human connection. Whether you\'re into breaking news, sports, TV fan theories, or a never-ending stream of the internet\'s cutest animals, there\'s a community on Bit of advice for you.'},
        {h1:'How does it work?',text:'Every day, millions of people around the world post, vote, and comment in communities organized around their interests.'},

      ],
    }
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
 .container{
   margin:2.5em;
   font-size: 4.5vw;
   font-family: Standard-Font;
   align:left;
   justify:center;
 }
  .container_text{
    margin:3em;
    font-size: 3.5vw;
    font-family: Standard-Font;
    align:left;
    justify:center;
  }


</style>
