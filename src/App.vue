<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" right temporary fixed>

            <!-- wenn angemeldet-->
            <v-list-item @click.stop="dialog = true">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/39.jpg"/>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Peter Olaf Droschbart</v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-row>
                <v-col>
                    <!-- wenn nicht angemeldet-->
                    <v-list-item @click.stop="dialog2 = true">
                        <v-list-item-content>
                            <v-list-item-title>Sign up</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col>
                    <!-- wenn nicht angemeldet-->
                    <v-list-item @click.stop="dialog3 = true">
                        <v-list-item-content>
                            <v-list-item-title>Sign in</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>

            <v-divider/>

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

                <v-list-item link :to="{ path: '/profile.json'}">
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
        <v-app-bar
                app
                color="blue"
                dark
        >
            <v-img src="../img/Logos/BitOfAdvice_logo_2.png"  width="40" height="40" contain />

            <v-spacer/>

            <v-toolbar-title>Bit Of Advice</v-toolbar-title>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

        </v-app-bar>
        <v-content>
            <div id = "app">

                <!--PROFILE-->
                <v-dialog v-model="dialog" max-width="400">
                    <v-card>
                        <v-card
                                class="mx-auto"
                                max-width="400"
                        >
                            <v-img
                                    src="https://randomuser.me/api/portraits/men/39.jpg"
                                    height="200px"
                            />

                            <v-card-title>
                                Peter Olaf Droschbart
                            </v-card-title>

                            <v-card-subtitle>
                                Profi - 1.024 erstellte Beiträge
                            </v-card-subtitle>
                        </v-card>
                    </v-card>
                </v-dialog>

                <!--SIGN UP-->
                <v-dialog @keydown.esc="dialog2 = false" v-model="dialog2" max-width="400">
                    <v-card class="elevation-12">
                        <v-toolbar
                                color="primary"
                                dark
                                flat
                        >
                            <v-toolbar-title>Register</v-toolbar-title>

                        </v-toolbar>
                        <v-card-text>
                            <v-row>
                                <v-col cols="16" sm="8" md="6">
                                    <v-text-field label="First name*" required solo/>
                                </v-col>

                                <v-col cols="16" sm="8" md="6">
                                    <v-text-field
                                            label="Last name*"
                                            hint="example of persistent helper text"
                                            persistent-hint
                                            required
                                            solo
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required solo/>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required solo/>
                                </v-col>
                            </v-row>

                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-col>
                                <!-- wenn nicht angemeldet-->
                                <v-list-item @click.stop="threeToTwo">
                                    <v-list-item-content>
                                        <v-list-item-title>Sign in</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-spacer/>
                            <v-btn color="blue darken-1" text  @click.stop="dialog2 = false">Login</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <!--SIGN IN-->
                <v-dialog @keydown.esc="dialog3 = false" v-model="dialog3" max-width="400">
                    <v-card class="elevation-12">
                        <v-toolbar
                                color="primary"
                                dark
                                flat
                        >
                            <v-toolbar-title>Login</v-toolbar-title>

                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <br>
                                <v-text-field
                                        label="Login"
                                        name="login"
                                        prepend-icon="mdi-face"
                                        type="text"
                                        solo
                                />

                                <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        solo
                                />
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-col>
                                <!-- wenn nicht angemeldet-->
                                <v-list-item @click.stop="twoToThree()">
                                    <v-list-item-content>
                                        <v-list-item-title>Sign up</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-spacer/>
                            <v-btn color="blue darken-1" text @click.stop="dialog3 = false">Login</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <router-view/>
            </div>
        </v-content>
    </v-app>
</template>

<script>

    import Template from "./views/Template";

    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'LayoutsDemosBaselineFlipped',

        // benötigte Komponenten
        components: {Template},

        // entspricht den HTML-Attributen
        props: {
            source: String,
        },

        // Variablen-Speicher
        data: () => ({
            drawer: null,
            dialog: false,
            dialog2: false,
            dialog3 : false,
        }),

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            twoToThree: function() {
                this.dialog2 = true;
                this.dialog3 = false;
            },

            threeToTwo: function () {
                this.dialog2 = false;
                this.dialog3 = true;
            }
        },

        // Initialisierung
        created() {}
    }
</script>