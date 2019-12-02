<template>
  <div class="body-1" id="cloud">

      <br>
      <br>
      <br>

    <<wordcloud
            :data="defaultWords"
            nameKey="name"
            valueKey="value"
            :color="myColors"
            :showTooltip="true"
            :wordClick="wordClickHandler">
    </wordcloud>
    <!--<wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      color="Accent">
      </wordcloud>-->

  </div>
</template>

<script>
  import wordcloud from 'vue-wordcloud'
  export default {
    name: 'cloud',
    components: {
      wordcloud
    },
    methods: {
      wordClickHandler(name, value, vm) {
        console.log('wordClickHandler', name, value, vm);
      }
    },
    data() {
      return {
        rotate: {from: 0, to: 0, numOfOrientation: 0},
        spiral: 'rectangular',
        showTooltip: false,
        myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
        defaultWords: [{
          "name": "Cat",
          "value": 26
        },
          {
            "name": "fish",
            "value": 19
          },
          {
            "name": "things",
            "value": 18
          },
          {
            "name": "look",
            "value": 16
          },
          {
            "name": "two",
            "value": 15
          },
          {
            "name": "fun",
            "value": 9
          },
          {
            "name": "know",
            "value": 9
          },
          {
            "name": "good",
            "value": 9
          },
          {
            "name": "good",
            "value": 9
          },
          {
            "name": "good",
            "value": 34
          },
          {
            "name": "good",
            "value": 22
          },
          {
            "name": "good",
            "value": 14
          },
          {
            "name": "play",
            "value": 33
          }
        ]
      }
    }
  }
</script>

<style scoped>
  div.tooltip{
  }
</style>
