<template>
    <div>
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
        <!--<div class="body-1" id="cloud">
            <wordcloud :data="defaultWords" nameKey="name" valueKey="value" :color="myColors" :showTooltip="true" :wordClick="wordClickHandler">
            </wordcloud>
            https://www.npmjs.com/package/vue-wordcloud
        </div>-->
        <!--Liste-->
        <!--
         <div>
          <v-app>
               <v-card  color="#8F94A6" class="mx-auto"   width="80%">

                   <v-system-bar color="#D9A566" dark>
                       <v-spacer></v-spacer>

                       <v-icon>mdi-window-minimize</v-icon>

                       <v-icon>mdi-window-maximize</v-icon>

                       <v-icon>mdi-close</v-icon>
                   </v-system-bar>
                   <v-spacer></v-spacer>

                   <v-toolbar color="#132B40" dark>
                       <v-app-bar-nav-icon></v-app-bar-nav-icon>

                       <v-toolbar-title>latest posts</v-toolbar-title>

                       <v-spacer></v-spacer>

                       <v-btn icon link :to="{ path: '/postinglist'}">
                           <v-icon>mdi-magnify</v-icon>
                       </v-btn>
                   </v-toolbar>

                   <v-container fluid>
                       <v-row dense>
                           <v-col v-for="title in posts" :key="title.title" :cols="title.flex">
                               <v-card class="mx-auto" max-width="95%">
                                   <v-card-text>
                                       <p class="display-1 text--primary" v-text="title.title" ></p>
                                       <p v-text="title.hashtag">adjective</p>
                                       <div class="text--primary" v-text="title.text">
                                       </div>
                                   </v-card-text>
                                   <v-card-actions>
                                       <v-btn text color="#BF4974">
                                           Learn More
                                       </v-btn>
                                   </v-card-actions>
                               </v-card>
                           </v-col>
                       </v-row>
                   </v-container>
               </v-card>
           </v-app>
       </div>-->
        <br>
        <br>
        <!--V-Cards-->
        <!-- <div>
            <v-app id="inspire">
                <v-card color="#8F94A6" class="mx-auto"  max-width="80%">
                        <v-spacer></v-spacer>
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                <v-card color="#D9A566">
                                    <v-img
                                            :src="card.src"
                                            class="white--text align-end"
                                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                            height="200px"
                                    >
                                        <v-card-title v-text="card.title"></v-card-title>
                                    </v-img>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn icon>
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>

                                        <v-btn icon>
                                            <v-icon>mdi-bookmark</v-icon>
                                        </v-btn>

                                        <v-btn icon>
                                            <v-icon>mdi-share-variant</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-app>
        </div>-->

        <div style="height: 100%; width: 100%;">
            <vue-word-cloud
                    style="position:fixed; width: 80%; height: 70%; margin-left: 10%; margin-top: 2%; text-transform: uppercase;"
                    :words="words"
                    :rotation="1"
                    :color="([, weight]) => weight > 17 ? '#132B40' : weight > 8 ? '#D9A566' : 'Indigo'"
                    font-family="Anton"
                    :font-size-ratio="5"
                    animation-easing="ease"
                    :spacing="0.7"
            >
                <template slot-scope="{text, weight, words}">
                    <div :title="weight" style="cursor: pointer;"  @click.stop="Beitrag = true">

                        {{ text }}

                    </div>
                    <!--<div :title="weight" style="cursor: pointer;" @click="onWordClick(words)">

                        {{ text }}
                    </div>-->
                </template>
            </vue-word-cloud>
        </div>

        <v-dialog v-model="Beitrag" max-width="260">
            <v-card>
                <v-card

                        class="mx-auto"
                        max-width="260"
                        color="#8F94A6"
                >


                    <v-card-title>
                        Here could be a Thread...????
                    </v-card-title>


                </v-card>
            </v-card>
        </v-dialog>


    </div>
</template>

<script>



    //import wordcloud from 'vue-wordcloud'
    import Registration from "./registration";
    import VueWordCloud from 'vuewordcloud';

    export default {
        name: "homepage",
        components: {
            Registration,
            //wordcloud,
            [VueWordCloud.name]: VueWordCloud,
        },
        methods: {
            /*wordClickHandler(name, value, vm) {
                console.log('wordClickHandler', name, value, vm);
                //location = 'https://google.com';
                path = '/postinglist';
            },*/
            onWordClick: function (word) {
                this.snackbarVisible = true;
                this.snackbarText = word[0];
            },
        },

        data() {

            return {
                Beitrag: false,
                /*
                cards:[
                    { title: 'Camera', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3},
                    { title: 'Video', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3},
                    { title: 'Java', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
                    { title: 'C#', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
                    { title: 'Blender', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
                    { title: 'Simulation', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
                    { title: 'Latex', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
                    { title: 'MS office', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3},
                ],

               posts:[
                   { title: 'camera', hashtag: '#camera', text: 'text1', flex: 12},
                    { title: 'best movie',  hashtag: '#movietime', text: 'text2', flex: 12},
                    { title: 'simulation in Java', hashtag: '#Java', text: 'text3',flex: 12},
                    { title: 'fusee',  hashtag: '#CSharp', text: 'text4', flex: 12 },

                ],*/
                words: [['romance', 2], ['fantasy', 8], ['romance', 2], ['fantasy', 8], ['Camera', 13], ['fantasy', 28], ['adventure', 3], ['horror', 13], ['horror', 13], ['adventure', 6], ['Spotify', 13], ['Witcher', 12], ['Minecraft', 8], ['fantasy', 8], ['horror', 23], ['adventure', 13], ['fantasy', 4], ['adventure', 3], ['adventure', 3], ['C#', 2], ['Java', 12], ['Eclipse', 13]],

                snackbarText: '',
                snackbarVisible: false,


                //Alte WordCloud
                /*
                rotate: {from: 0, to: 0, numOfOrientation: 0},
                spiral: 'rectangular',
                showTooltip: false,
                myColors: ['#D9A566', '#629fc9', '#94bedb', '#132B40'],
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
                        "value": 18,

                    },
                    {
                        "name": "look",
                        "value": 16
                    },
                    {
                        "name": "two",
                        "value": 15
                    },
                ]
                */
            }
        }
    }
</script>


<style scoped>
</style>