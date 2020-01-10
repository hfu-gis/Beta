<template>
    <div>
        <!--Schriftarten einbetten-->
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Teko&display=swap" rel="stylesheet">

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

        <!--<v-toolbar v-if="this.authenticated" light flat color="rgba(121, 120, 124, 0)" style="justify-content: center;">-->
        <v-toolbar light flat color="rgba(121, 120, 124, 0)" style="justify-content: center;">
            <v-spacer/>
            <v-btn text color="grey" v-on:click="openAddThread">
                Neuer Beitrag
                <v-icon style="margin-left: 20px;">mdi-plus-circle</v-icon>
            </v-btn>
            <v-spacer/>
        </v-toolbar>

        <div>{{tempWord}}</div>

        <div style="height: 100%; width: 100%;">
            <vue-word-cloud
                    style="position:fixed; width: 80%; height: 70%; margin-left: 10%; margin-top: 2%; text-transform: uppercase;"
                    :words="words"
                    :rotation="1"
                    :color="([, weight]) => weight > 17 ? '#132B40' : weight > 8 ? '#D9A566' : 'Indigo'"
                    font-family="Anton"
                    :font-size-ratio="5"
                    :spacing="0.7"
            >
                <!--<vue-word-cloud
                        style="position:fixed; width: 80%; height: 70%; margin-left: 10%; margin-top: 2%; text-transform: uppercase;"
                        :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
                        :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
                        font-family="Roboto"
                >-->
                <template slot-scope="{text, weight, word}">
                    <div :title="weight" style="cursor: pointer;" @click="onWordClick(word)">
                        {{ text }}
                    </div>
                </template>
                <!--<template slot-scope="{text, weight, words}">
                    <div :title="weight" style="cursor: pointer;" @click.stop="Beitrag = true">

                        {{ text }}

                    </div>-->
                <!--<div :title="weight" style="cursor: pointer;" @click="onWordClick(words)">

                    {{ text }}
                </div>
            </template>-->
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

        <!---------------------------------- NEUEN THREAD ERSTELLEN ---------------------------------->
        <v-dialog v-model="addThread" v-on:click="openAddThread">
            <v-card style="width: 100%; background: linear-gradient(to right, #f9f5ef, #ffdcc8);">
                <v-card-title>Create new Thread:</v-card-title>

                <v-row cols="12" style="width: 100%; height: 350px;">
                    <v-col cols="4" style="padding-left: 2%">
                        <v-subheader>from: {{myThread.username}}</v-subheader>
                        <!--
                        <v-container>
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-combobox multiple
                                                v-model="select"
                                                label="Hashtags"
                                                append-icon
                                                chips
                                                outlined
                                                deletable-chips
                                                class="tag-input"
                                                :search-input.sync="search"
                                                @keyup.tab="updateTags"
                                                @paste="updateTags"
                                                height="300px"
                                    >
                                    </v-combobox>
                                </v-flex>
                            </v-layout>
                        </v-container>-->

                        <v-row>
                            <v-text-field v-model="newHashtag" style="width: 70%; margin-left: 20px;"></v-text-field>
                            <v-btn icon dark style="background: grey;" v-on:click="addHashtagToArray">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-row>
                        <div style="margin-left: 20px;">
                            <v-chip-group
                                    column
                                    active-class="primary--text"
                            >
                                <v-chip v-for="tag in myThread.hashtags" :key="tag">
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>
                        </div>

                    </v-col>
                    <v-divider vertical color="#D9A566" style="margin-left: 30px; margin-right: 30px;"></v-divider>
                    <v-col cols="7">
                        <section>
                            <v-text-field
                                    v-model="myThread.title"
                                    label="Title"
                                    outlined
                                    required
                            >{{myThread.title}}
                            </v-text-field>

                            <v-textarea
                                    v-model="myThread.text"
                                    label="Thread-Text"
                                    outlined
                                    required
                            >{{myThread.text}}
                            </v-textarea>
                        </section>
                        <v-btn outlined v-on:click="saveNewThread">Publish</v-btn>
                    </v-col>
                </v-row>
                <br>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>


    //import wordcloud from 'vue-wordcloud'
    import Registration from "./registration";
    import VueWordCloud from 'vuewordcloud';
    import firebase from 'firebase';
    import db from "../db";
    import {mapState} from 'vuex'

    export default {
        name: "homepage",
        components: {
            Registration,
            //wordcloud,
            [VueWordCloud.name]: VueWordCloud,
        },
        created() {
            this.updateUser()
        },

        methods: {
            addHashtagToArray() {
                if (this.newHashtag != '' && this.newHashtag != ' ') {
                    this.myThread.hashtags.push(this.newHashtag)
                    this.newHashtag = '';
                }
            },

            updateTags() {
                this.$nextTick(() => {
                    this.select.push(...this.search.split(","));
                    this.$nextTick(() => {
                        this.search = "";
                    });
                });
            },
            updateUser() {
                var user = firebase.auth().currentUser;
                if (user) {
                    this.authenticated = true;
                } else {
                    this.authenticated = false;
                }
            },
            /*wordClickHandler(name, value, vm) {
                console.log('wordClickHandler', name, value, vm);
                //location = 'https://google.com';
                path = '/postinglist';
            },*/
            onWordClick: function (word) {
                this.tempWord = word[0];
                //console.log(this.searchHashtag)
                this.$store.commit('changeSearchHashtag', word[0])
                this.$router.push('/postinglist');
            },

            openAddThread() {
                this.addThread = true;
                var user = firebase.auth().currentUser;
                if (user) {
                    this.myThread.username = user.displayName;
                } else {
                    this.myThread.username = "openAddThread konnte nicht ausgeführt werden";
                }
            },

            saveNewThread() {
                if (this.myThread.hashtags != '' && this.myThread.text != '' && this.myThread.title != '') {

                    var user = firebase.auth().currentUser;
                    let docRef = db.collection("Threads").doc(this.myThread.title)

                    console.log(this.myThread.title);

                    //Werte zuweisen
                    this.myThread.creatorID = user.uid;
                    this.myThread.datetime = new Date().toDateString();

                    docRef.set(this.myThread)

                    //TODO Fehlermeldungn Catchen!!!
                    this.dialogIdea = false

                    //Felder clearen
                    this.myThread.hashtags = [];
                    this.myThread.title = '';
                    this.myThread.datetime = '';
                    this.myThread.text = '';
                    this.myThread.creatorID = '';
                    this.myThread.likes = '';
                    this.myThread.username = '';

                }
            }
        },

        computed: {
            ...mapState(['searchHashtag', 'doubleLoaded']),
        },

        watch:{
        },

        data() {
            return {
                tempWord: '',

                myThread: {
                    creatorID: '',
                    datetime: '',
                    hashtags: [],
                    likes: '123',
                    text: '',
                    title: '',
                    username: ''
                },
                addThread: false,
                newHashtag: '',

                authenticated: false,

                temp: '',

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

                words: [['Furtwangen', 2], ['Baum', 8], ['Haus', 2], ['fantasy', 8], ['Camera', 13], ['fantasy', 28], ['adventure', 3], ['horror', 13], ['horror', 13], ['adventure', 6], ['Spotify', 13], ['Witcher', 12], ['Minecraft', 8], ['fantasy', 8], ['horror', 23], ['adventure', 13], ['fantasy', 4], ['adventure', 3], ['adventure', 3], ['C#', 2], ['Java', 12], ['Eclipse', 13]],

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