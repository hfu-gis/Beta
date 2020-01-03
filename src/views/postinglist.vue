<template>
    <div class="body-1">
            <v-toolbar dense color="#8C3F63">
                <v-container fluid>
                    <v-row>
                        <v-btn text color="white">#Sucheingabe</v-btn>
                        <v-btn text color="white" height="35" width="35" @click.stop="dialog1 = true">+</v-btn>

                    </v-row>
                </v-container>

                <v-spacer></v-spacer>

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
                    cols="12"
            >
                <v-card
                        :color="item.color"
                        dark
                >
                    <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                    >
                        <v-img class="img-circle" :src="item.src"></v-img>
                    </v-avatar>

                  <v-breadcrumbs :items="bread_items" divider=">"></v-breadcrumbs>

                    <div class="d-flex d-inline-flex">

                        <v-card-title
                                class="headline"
                                v-text="item.title"
                        ></v-card-title>

                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    </div>

                  <v-card-text v-text="item.text" />

                <v-btn @click="thread = true" >weiterlesen</v-btn>

                </v-card>
            </v-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'postinglist',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data: () => ({
            thread: false,
            items: [
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
            ],
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
        methods: [],

        // Initialisierung
        created() {
        }
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
    .img-circle {
        border-radius: 5%;
    }
</style>
