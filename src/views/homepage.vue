<template>
    <div>
        <!--Schriftarten einbetten-->
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Teko&display=swap" rel="stylesheet">

        <!--<v-toolbar v-if="this.authenticated" light flat color="rgba(121, 120, 124, 0)" style="justify-content: center;">-->
        <v-toolbar light flat color="rgba(121, 120, 124, 0)" style="justify-content: center;">
            <v-spacer/>
            <v-btn text color="grey" v-on:click="openAddThread">
                Neuer Beitrag
                <v-icon style="margin-left: 20px;">mdi-plus-circle</v-icon>
            </v-btn>
            <v-spacer/>
        </v-toolbar>

        <div style="height: 100%; width: 100%;">
            <vue-word-cloud
                    v-if="renderComponent"
                    style="position:fixed; width: 80%; height: 70%; margin-left: 10%; margin-top: 1%; text-transform: uppercase;"
                    :words="words"
                    :rotation="1"
                    :color="([, weight]) => weight > 17 ? '#132B40' : weight > 8 ? '#D9A566' : 'Indigo'"
                    font-family="Anton"
                    :font-size-ratio="5"
                    :spacing="0.7"
            >
                <template slot-scope="{text, weight, word}">
                    <div :title="weight" style="cursor: pointer;" @click="onWordClick(word)">
                        {{ text }}
                    </div>
                </template>
            </vue-word-cloud>
        </div>

        <!---------------------------------- NEUEN THREAD ERSTELLEN ---------------------------------->
        <v-dialog v-model="addThread" v-on:click="openAddThread" width="600">
            <v-card style=" background: linear-gradient(to right, #f9f5ef, #ffdcc8);">
                <v-card-title>Create new Thread:</v-card-title>

                <v-col style="padding-left: 2%" md="auto">
                    <v-subheader>from: {{myThread.username}}</v-subheader>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="newHashtag" style="padding-left: 8%"></v-text-field>
                        </v-col>
                        <v-colnpm>
                            <v-btn icon dark style="background: grey;" v-on:click="addHashtagToArray">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-colnpm>
                    </v-row>

                    <v-chip-group
                            column
                            active-class="primary--text"
                            v-if="this.myThread.hashtag !== ''"
                    >
                        <!--<v-chip v-for="tag in myThread.hashtags" :key="tag">
                            {{ tag }}
                        </v-chip>-->
                        <v-chip>
                            {{ this.myThread.hashtag }}
                        </v-chip>
                    </v-chip-group>


                </v-col>
                <v-divider vertical color="#D9A566" style="margin-left: 30px; margin-right: 30px"></v-divider>
                <v-col>
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

                <br>
            </v-card>
        </v-dialog>
        <v-dialog v-model="fehler" max-width="600">
            <v-card>
                <v-card

                        class="mx-auto"
                        max-width="600"
                        color="#8F94A6"
                        style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                >


                    <v-card-title style="padding: 10%">
                        You need to add Hashtags and fill in a Titel and Threadtext. You have to be signed in!
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
            this.updateUser();
            this.fillWordCloud();
        },

        firestore() {
            mostUsedHashtags: db.collection('Hashtags').orderBy('count');
        },

        methods: {
            fillWordCloud() {
                var tempArray = [];
                var that = this;

                db.collection("Hashtags")
                    .onSnapshot(function (querySnapshot) {
                        tempArray = [];
                        that.words = [];

                        querySnapshot.forEach(function (doc) {
                            tempArray.push([doc.data().tag, doc.data().count]);
                        });

                        let i;
                        for (i = 0; i < tempArray.length; i++) {
                            that.words.push(tempArray[i]);
                        }
                    })
            },

            addHashtagToArray() {
                if (this.newHashtag != '' && this.newHashtag != ' ') {
                    //this.myThread.hashtags.push(this.newHashtag)
                    this.myThread.hashtag = this.newHashtag.toUpperCase();
                    this.newHashtag = '';
                    console.log("Neuen Hashtag angenommen: ", this.myThread.hashtag);
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

            onWordClick: function (word) {
                this.tempWord = word[0];
                //console.log(this.searchHashtag)
                this.$store.commit('changeSearchHashtag', word[0].toUpperCase())
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
                var user = firebase.auth().currentUser;

                var BeitrNr = 0;

                if (user && this.myThread.hashtag !== '' && this.myThread.text !== '' && this.myThread.title !== '') {

                    //-------------Beitragsnummer hinzufügen---------------//

                    //aktuelle Nummer abfragen
                    db.collection("beitragsnummer").doc('fHvJoKSXNA42YVwindRE').get().then(doc => {
                        this.tempBeitragsnummer.beitragsnummer = doc.data().beitragsnummer
                        var BeitrIncreast = this.tempBeitragsnummer.beitragsnummer + 1;


                        //Speichern
                        this.tempBeitragsnummer.beitragsnummer = BeitrIncreast;
                        BeitrNr = this.tempBeitragsnummer.beitragsnummer;
                        console.log("Beitr1: ", BeitrNr);

                        let docRef = db.collection("beitragsnummer").doc('fHvJoKSXNA42YVwindRE')
                        docRef.update(this.tempBeitragsnummer);

                    }).catch(err => {
                        console.log('Error getting documents', err)
                    })

                    //--------------Hashtag Sppeichern/ Anzahl erhöhen--------------//

                    var aktuellerHashtag = this.myThread.hashtag;
                    //Hashtags abspeichern und/ oder Anzahl derer erhöhen:
                    var docRef1 = db.collection("Hashtags").doc(aktuellerHashtag);

                    docRef1.get().then(function (doc) {
                        if (doc.exists) {
                            console.log("Der Hashtag ", aktuellerHashtag, " besteht schon, Anzahl um eins erhöht")
                            db.collection("Hashtags").doc(aktuellerHashtag).update({
                                count: doc.data().count + 1
                            });
                        } else {
                            console.log("Der Hashtag ", aktuellerHashtag, " wurde zur Sammlung hinzugefügt")
                            db.collection("Hashtags").doc(aktuellerHashtag).set({
                                tag: aktuellerHashtag,
                                count: 1,
                            })

                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                    }).then()
                    {


                        //-------------Neuen Thread speichern---------------//


                        let docRef = db.collection("Threads").doc(this.myThread.title)
                        //Werte zuweisen
                        this.myThread.creatorID = user.uid;
                        this.myThread.datetime = new Date().toDateString();
                        this.myThread.beitragsnummer = BeitrNr;
                        console.log("Beitr2: ", BeitrNr);
                        docRef.set(this.myThread)

                        //Felder clearen
                        //this.myThread.hashtag = [];
                        this.myThread.hashtag = '';
                        this.myThread.title = '';
                        this.myThread.datetime = '';
                        this.myThread.text = '';
                        this.myThread.likes = '';
                        this.myThread.beitragsnummer = 1;

                        this.forceRerender();

                        this.$nextTick(() => {
                            this.$nextTick(() => {
                                location.reload();
                            });

                        });

                    }
                } else {
                    this.fehler = true;
                }
            },


            forceRerender() {
                // Remove my-component from the DOM
                this.renderComponent = false;

                this.$nextTick(() => {
                    // Add the component back in
                    this.renderComponent = true;
                });
            },
        },

        computed: {
            ...
                mapState(['searchHashtag', 'doubleLoaded']),
        }
        ,

        watch: {}
        ,

        data() {
            return {
                mostUsedHashtags: [],

                renderComponent: true,

                fehler: false,
                tempWord: '',

                tempBeitragsnummer: {
                    beitragsnummer: 0,
                },

                myThread: {
                    creatorID: '',
                    datetime: '',
                    hashtag: '',
                    likes: '123',
                    text: '',
                    title: '',
                    username: '',
                    beitragsnummer: 1,
                },

                addThread: false,
                newHashtag: '',

                authenticated: false,

                temp: '',

                words: [],
            }
        }
    }
</script>


<style scoped>


    @media only screen and (max-width: 599px) {
        body {
            background: red;
        }
    }

    @media only screen and (min-width: 600px) {
        .Thread {
            background: green;
        }
    }


</style>