<template>
    <v-app id="inspire">
        <!--
              <v-navigation-drawer
                      v-model="drawer"
                      app
                      absolute
                      right
              >
                   <v-list dense>
                      <v-list-item link :to="{ name: 'root'}">
                          <v-list-item-action>
                              <v-icon>mdi-home</v-icon>
                          </v-list-item-action>

                          <v-list-item-content>
                              <v-list-item-title>Home</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>

                      <v-list-item link :to="{ name: 'registration'}">
                          <v-list-item-action>
                              <v-icon>mdi-contact-mail</v-icon>
                          </v-list-item-action>

                          <v-list-item-content>
                              <v-list-item-title>Contact</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>

                      <v-list-item link :to="{ name: 'wordcloud'}">
                          <v-list-item-action>
                              <v-icon>mdi-sort</v-icon>
                          </v-list-item-action>

                          <v-list-item-content>
                              <v-list-item-title>WordCloud</v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>

                  </v-list>
              </v-navigation-drawer> -->

        <v-app-bar
                app
                color="blue"
                dark
        >
            <v-spacer/>

            <v-toolbar-title>Application</v-toolbar-title>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
        </v-app-bar>



                <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        right
                        temporary
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item link :to="{ path: '/'}">
                            <v-list-item-action>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Home</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link :to="{ path: '/registration'}">
                            <v-list-item-action>
                                <v-icon>mdi-contact-mail</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Registrierung</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link :to="{ path: '/wordcloud'}">
                            <v-list-item-action>
                                <v-icon>mdi-sort</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>WordCloud</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link :to="{ path: '/postinglist'}">
                            <v-list-item-action>
                                <v-icon>mdi-sort</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>PostingList</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link :to="{ path: '/views/Profilesettings'}">
                            <v-list-item-action>
                                <v-icon>mdi-sort</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>profilesettings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <template>
                    <div id = "app">
                        <router-view/>
                    </div>
                </template>

            </v-app>
        </template>

        <script>
            import Template from "./views/Template";
            export default {
                name: 'LayoutsDemosBaselineFlipped',
                components: {Template},
                props: {
                    source: String,
                },
                data: () => ({
                    drawer: null,
                }),
            }
        </script>