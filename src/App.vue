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

            <v-toolbar-title>Bit Of Advice</v-toolbar-title>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
        </v-app-bar>



                <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        right
                        temporary
                >
                    <!-- wenn angemeldet-->
                    <v-list-item @click.stop="dialog = true">
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/39.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Peter Olaf Droschbart</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <!-- wenn nicht angemeldet-->
                    <v-list-item @click.stop="dialog2 = true">
                        <v-list-item-content>
                            <v-list-item-title>Not registered yet?</v-list-item-title>
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
                                <v-list-item-title>Profilesettings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link :to="{ path: '/views/popup2'}">
                            <v-list-item-action>
                                <v-icon>mdi-mail</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Registration</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link :to="{ path: '/profil'}">
                            <v-list-item-action>
                                <v-icon>mdi-mail</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Profile</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link :to="{ path: '/wordcloud2'}">
                            <v-list-item-action>
                                <v-icon>mdi-book</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>wordcloud2</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>


                    </v-list>
                </v-navigation-drawer>

                <template>
                    <div id = "app">

                        <!-- Dialog wenn angemeldet-->
                        <v-dialog
                                v-model="dialog"
                                max-width="400"
                        >
                            <v-card>
                                <v-card
                                        class="mx-auto"
                                        max-width="400"
                                >
                                    <v-img
                                            src="https://randomuser.me/api/portraits/men/39.jpg"
                                            height="200px"
                                    ></v-img>

                                    <v-card-title>
                                        Peter Olaf Droschbart
                                    </v-card-title>

                                    <v-card-subtitle>
                                        Profi - 1.024 erstellte Beiträge
                                    </v-card-subtitle>
                                </v-card>
                            </v-card>
                        </v-dialog>

                        <!-- Dialog wenn nicht angemeldet-->
                            <v-dialog v-model="dialog2" persistent max-width="600px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">User Profile</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal first name*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                            label="Legal last name*"
                                                            hint="example of persistent helper text"
                                                            persistent-hint
                                                            required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Email*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select
                                                            :items="['0-17', '18-29', '30-54', '54+']"
                                                            label="Age*"
                                                            required
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-autocomplete
                                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                            label="Interests"
                                                            multiple
                                                    ></v-autocomplete>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog2 = false">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>



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
                    dialog: false,
                    dialog2: false,
                }),
            }
        </script>