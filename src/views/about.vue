<template>

  <div>
    <v-card>
    <v-carousel class="carousel" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center" height="100%">
            <div class="display-1" ><h1  class="container"><u>{{ slide.h1}}</u></h1>
              <p class="container_text" >{{ slide.text}}</p>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
  </div>



 <!--
   -->

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
        'transparent',
        'transparent',
        'transparent',
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
  template{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .carousel{
    margin: 5%;
    position:absolute;
    justify-content: center;
    align-content: center;
    width: 90%;
    height: 200%;
  }

 .container{
   margin-left:5%;
   margin-top: 0;
   margin-bottom: 3%;
   font-size: 4vw;
   font-family: Standard-Font;
   align:left;
   justify:center;
   color:#BF4974 ;
 }
  .container_text{
    margin-left: 5%;
    margin-right: 5%;
    font-size: 3vw;
    line-height: 100%;
    font-family: Standard-Font;
    align:left;
    justify:center;
    color:#BF4974 ;
  }


</style>
