<template>
    <section>
    <div class="body-1" id="cloud">
        <br>
        <br>
        <br>
        <wordcloud :data="defaultWords" nameKey="name" valueKey="value" :color="myColors" :showTooltip="true" :wordClick="wordClickHandler">
        </wordcloud>
    </div>

        <v-container class="my-5">

            <v-layout row wrap>
                <v-flex x12 sm6 md4 lg3 v-for="keyword in cards" :key="keyword.name">
                    <v-card class="mx-auto ma-3"  max-width="344">
                        <v-responsive class="pt-4">
                        <v-img src="../../img/Postlists/Kamera.jpg"  height="200px"></v-img>
                        </v-responsive>
                        <v-card-title>{{keyword.name}}</v-card-title>
                        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                        <v-card-actions><v-btn text>Share</v-btn>
                            <v-btn color="purple" text>Explore</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                      </v-card>
                </v-flex>
            </v-layout>

        </v-container>

        <!--
        <v-card class="mx-auto"  max-width="344">
            <v-img src="../../img/Postlists/Kamera.jpg"  height="200px"></v-img>

            <v-card-title>Kamera</v-card-title>
            <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
            <v-card-actions><v-btn text>Share</v-btn>
                <v-btn color="purple" text>Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon  @click="show = !show"><v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
            </v-card-actions>
            <v-expand-transition><div v-show="show"><v-divider></v-divider>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>-->

    </section>






</template>

<script>

    import wordcloud from 'vue-wordcloud'

    export default {
        name: "homepage",
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
                cards:[
                    { name: 'Kamera' },
                    { name: 'Videotechnik' },
                    { name: 'Java' },
                    { name: 'CSharp' },


                ],
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
</style>