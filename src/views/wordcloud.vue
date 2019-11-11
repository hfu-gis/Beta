<template>
  <div class="body-1" id="cloud">
    <wordcloud v-bind:texts="defaultWords"></wordcloud>
  </div>
</template>

<script>
  import VueWordCloud from 'vuewordcloud';
  // import Wordcloud from "./wordCloud.js";
  // console.log(Wordcloud);
  export default {
    name: "cloud",
    // components: {
    //   Wordcloud
    [VueWordCloud.name]: VueWordCloud,
    // },
    data() {
      return {
        defaultWords: [
          {
            text: "Cat",
            size: 26
          },
          {
            text: "fish",
            size: 19
          },
          {
            text: "things",
            size: 18
          },
          {
            text: "look",
            size: 16
          },
          {
            text: "two",
            size: 15
          },
          {
            text: "fun",
            size: 9
          },
          {
            text: "know",
            size: 12
          },
          {
            text: "good",
            size: 9
          },
          {
            text: "play",
            size: 17
          }
        ]
      };
    }
  };
</script>

<style scoped>
  #cloud {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
