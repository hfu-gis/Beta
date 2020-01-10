<template>
    <div class="body-1">
        <v-toolbar dense color="#8C3F63">
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

            <v-chip color="#D9A566" v-if="chip1" close  @click:close="chip1 = false">{{this.searchHashtag}}</v-chip>

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


        <!--Post-->
        <v-dialog v-model="thread" width="70%">

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
        </v-dialog>


        <!--Threads-->
        <div>
            <v-col
                    v-for="(item, i) in items"
                    :key="i"

            >
                <v-card
                        color="#8F94A6"
                        dark
                >
                    <v-row cols="12">
                        <v-col cols="2">
                            <section>
                                <v-avatar
                                        size="125"
                                        tile
                                        style="margin-left: 10%;"
                                >
                                    <v-img class="img-circle" :src="profileURL"/>
                                </v-avatar>

                                <v-card-subtitle v-text="item.username"
                                                 style="margin-left: 3%;"
                                />
                            </section>
                        </v-col>
                        <v-col cols="8">
                            <!--<v-divider vertical color="#D9A566"></v-divider>-->

                            <v-card-title
                                    class="headline"
                                    v-text="item.title"

                            />

                            <v-chip-group
                                    column
                                    active-class="primary--text"
                                    dark
                            >
                                <v-chip disabled v-for="tag in item.hashtags" :key="tag">
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>

                            <!--<v-breadcrumbs :items="bread_items" divider=">"></v-breadcrumbs>-->



                        </v-col>
                        <v-col cols="2" style="padding-top: 2%;">
                            <v-btn @click="item.beitragsnummer = !item.beitragsnummer"
                                   style="height: 90%; background: #3d4f68; float: right; margin-right: 10%;">
                                weiterlesen
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-expand-transition>
                        <div v-show="!item.beitragsnummer">
                            <v-divider></v-divider>

                            <v-card-text v-text="item.text"/>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import db from "../db";
    import { mapState } from 'vuex'

    export default {
        name: 'postinglist',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        computed: {
            ...mapState(['searchHashtag']),
        },

        // Variablen-Speicher
        data: () => ({

            thread: false,
            chip1: true,

            profileURL: '',

            /*items: [
                {
                    color: '#8F94A6',
                    src: 'https://randomuser.me/api/portraits/men/39.jpg',
                    title: 'Threadtitle 1',
                    artist: 'P_Droschbart',
                    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
                {
                    color: '#8F94A6',
                    src: 'https://randomuser.me/api/portraits/men/49.jpg',
                    title: 'Threadtitle 2',
                    artist: '_Fr4nk13_',
                    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                },
            ],*/

            items: [],

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
            active_items: {
                color: '#8F94A6',
                src: 'https://randomuser.me/api/portraits/men/39.jpg',
                title: 'Threadtitle 1',
                artist: 'P_Droschbart',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            }

        }),

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            updateTags() {
                this.$nextTick(() => {
                    this.select.push(...this.search.split(","));
                    this.$nextTick(() => {
                        this.search = "";
                    });
                });
            }
        },

        // Initialisierung
        created() {
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
        }
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
    .img-circle {
        border-radius: 5%;
    }

</style>
