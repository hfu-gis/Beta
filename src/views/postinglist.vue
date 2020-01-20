<template>
    <div class="body-1">
        <v-toolbar dense color="#8C3F63">
            <!--Anzeige mehrerer Hashtags-->
            <!--<v-container fluid>
                <v-row>
                        <v-chip
                                close
                                v-for="(keyword, i) in hashtags"
                                :key="i"
                                class="ma-1"
                                @click:close="hashtags[i] = false"
                        >
                            {{ keyword }}
                        </v-chip>

                    <v-chip class="ma-1" height="35" width="35">+</v-chip>

                    <v-chip class="ma-1" close close-icon="mdi-check")>
                        <v-text-field
                                style="margin: auto"
                        ></v-text-field>
                    </v-chip>

                </v-row>
            </v-container>-->
            <!--
            <v-container fluid style="margin-top: 30px; height: 100px;">
                <v-layout wrap>
                    <v-flex xs12>
                        <v-combobox multiple
                                    v-model="select"
                                    append-icon
                                    chips
                                    deletable-chips
                                    class="tag-input"
                                    :search-input.sync="search"
                                    @keyup.tab="updateTags"
                                    @paste="updateTags">
                        </v-combobox>
                    </v-flex>
                </v-layout>
            </v-container>-->

            <!--Aktuelle Anzeige des gesuchten Hashtags-->
            <v-chip color="#D9A566" v-if="chip1" @click:close="chip1 = false">{{this.searchHashtag}}</v-chip>

            <v-spacer></v-spacer>

            <!--FILTER-->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="white"
                            text
                            v-on="on"
                    >
                        Filter
                    </v-btn>
                </template>
                <v-list color="#9e4f6f">
                    <v-list-item><a style="color: white">Datum</a></v-list-item>
                    <v-list-item><a style="color: white">Relevanz</a></v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>


        <!--DIALOG - Post-->
        <!--Derzeit nicht benutzt-->
        <!--<v-dialog v-model="thread" width="70%">

            <v-card
                    class="mx-auto"
                    color="#9e4f6f"
                    dark
                    max-width="100%"
            >
                <v-card-title>
                    <span class="title font-weight-bold" v-text="active_items.title"></span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold" v-text="active_items.text">
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">


                        <v-list-item-avatar color="grey darken-3">

                            <v-img class="elevation-6" :src="active_items.src"></v-img>

                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-text="active_items.artist"></v-list-item-title>
                        </v-list-item-content>

                        <v-row
                                align="center"
                                justify="end"
                        >
                            <v-icon class="mr-1">mdi-heart</v-icon>
                            <span class="subheading mr-2">256</span>
                            <span class="mr-1">·</span>
                            <v-icon class="mr-1">mdi-share-variant</v-icon>
                            <span class="subheading">45</span>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-dialog>-->


        <!--Thread-Anzeige-->
        <v-row style="padding-bottom: 10%; padding-left: 2%; padding-right: 2%; padding-top: 1%;">

            <!--Durchgehen und Anzeigen aller Beiträge mit dem gesuchten Hashtag-->
            <v-col
                    class="Thread"
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                    xs="12"
                    sm="12"
                    lg="6"
            >
                <v-card
                        color="#8F94A6"
                        dark
                >
                    <v-row>
                        <v-col md="auto">
                            <section>
                                <v-avatar
                                        size="125"
                                        tile
                                        style="margin-left: 10%;"
                                >
                                    <!--Anzeigen des zum Threadersteller passenden Profilbild-->
                                    <v-img class="img-circle" :src="itemLinks[i]"/>
                                </v-avatar>

                                <v-card-subtitle v-text="item.username"
                                                 style="margin-left: 3%;"
                                />
                            </section>
                        </v-col>
                        <v-col style="padding-left: 5%">
                            <v-card-title
                                    class="headline"
                                    v-text="item.title"
                            />
                            <!--<v-card-subtitle v-text="item.beitragsnummer"
                                             style="margin-left: 3%;"
                            />-->
                            <!-- Anzeige aller angehängten Hashtags-->
                            <v-chip-group
                                    column
                                    active-class="primary--text"
                                    dark
                            >
                                <!--<v-chip disabled v-for="tag in item.hashtags" :key="tag">-->
                                <v-chip disabled>
                                    {{ item.hashtag }}
                                </v-chip>
                            </v-chip-group>

                            <!--geplant: Breadcrums-->
                            <!--<v-breadcrumbs :items="bread_items" divider=">"></v-breadcrumbs>-->
                        </v-col>

                    </v-row>
                    <v-divider color="#D9A566"/>
                    <v-row>
                        <v-card-text style="padding-left: 5%" v-text="item.text"/>
                    </v-row>
                    <v-row>
                        <v-col style="padding-top: 2%;">
                            <v-btn @click="item.beitragsnummer = !item.beitragsnummer"
                                   style=" background: #3d4f68; " block>
                                Comment?
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-expand-transition>
                        <div v-show="item.beitragsnummer">
                            <v-divider></v-divider>
                            <v-card-text>-- Noch kein Kommentar zu diesem Beitrag --</v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <div style="padding-bottom: 7%"></div>
        </v-row>
    </div>
</template>

<script>

    import firebase from 'firebase';
    import db from "../db";
    import {mapState} from 'vuex'

    export default {
        //Seitenname
        name: 'postinglist',

        //Empfängt aktuell gesuchten Hastag (im Vuex-Store gespeichert)
        computed: {
            ...mapState(['searchHashtag']),
        },

        // Variablen-Speicher
        data: () => ({
            //Temp
            a: 6,
            thread: false,
            chip1: true,

            //benötigt für kommende Breadcrumbs
            bread_items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/homepage',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: '/login',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],

            //nur zT benötigt
            active_items: {
                color: '#8F94A6',
                src: 'https://randomuser.me/api/portraits/men/39.jpg',
                title: 'Threadtitle 1',
                artist: 'P_Droschbart',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },

            //Abspeichern der benötigten Threads und Bilder dazu
            itemLinks: [],
            tempProfileURL: '',
            profileURL: null,
            items: []
        }),

        // reagieren auf prop-Veränderung
        watch: {
            //searchHashtag: this.reload()
        },

        // interne Methoden
        methods: {
            //Responsive-Design
            anzahl() {
                if (window.innerWidth <= 600) {
                    a = 12;
                } else {
                    a = 6;
                }
            },

            //aktualisieren des Benutzers und der passenden Threads zum gesuchten Hashtag
            reload() {
                var user = firebase.auth().currentUser;
                if (user) {
                    this.profileURL = user.photoURL;
                }
                //db.collection("Threads").where("hashtag", "array-contains", this.searchHashtag).get().then(threadsFromDB => {
                db.collection("Threads").where("hashtag", "==", this.searchHashtag).get().then(threadsFromDB => {
                    threadsFromDB.forEach(
                        doc => {
                            this.items.push(doc.data())
                        })
                })
                    .catch(err => {
                        console.log('Error getting documents', err)
                    })
            },

            //benötigt bei der Anzeige/ Eingabe mehrerer Hashtags in der Toolbar
            updateTags() {
                this.$nextTick(() => {
                    this.select.push(...this.search.split(","));
                    this.$nextTick(() => {
                        this.search = "";
                    });
                });
            },

            //wie der Name schon sagt: aktuelle URL zum Profilbild wird ausgelesen
            getProfileURL(profile_url) {
                console.log('old', profile_url);
                db.collection("Users").doc(profile_url)
                    .get()
                    .then((function (doc) {
                        console.log('url: ', doc.data().photoURL)
                        this.profileURL = doc.data().photoURL;
                        console.log('newUrl', this.profileURL)
                    }).bind(this));

            }
        },

        //bei Initialisierung
        created() {
            var user = firebase.auth().currentUser;
            if (user) {
                this.profileURL = user.photoURL;
            }

            //Query: Nur Threads zum gesuchten Hashtags werden geladen und abgezeigt
            //db.collection("Threads").where("hashtag", "array-contains", this.searchHashtag).get().then(threadsFromDB => {
            db.collection("Threads").where("hashtag", "==", this.searchHashtag).get().then(threadsFromDB => {
                threadsFromDB.forEach(
                    doc => {
                        this.items.push(doc.data())
                        db.collection("Users").doc(doc.data().creatorID)
                            .get()
                            .then((function (doc1) {
                                this.itemLinks.push(doc1.data().photoURL);
                            }).bind(this));
                    })
            })
                .catch(err => {
                    console.log('Error getting documents', err)
                })
        }
    }
</script>

<style scoped>
    /* Anzeige des Profilbilds */
    .img-circle {
        border-radius: 5%;
    }
</style>
