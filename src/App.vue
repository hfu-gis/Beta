<template>
    <v-app id="inspire">

        <!-------------------------App-Bar------------------------------------------------------------>
        <v-app-bar app color="#132B40" right dark>

            <v-row>
                <!--Logo mit Verlinkung auf die Startseite-->
                <a>
                    <v-btn :to="{ path: '/homepage'}" text height="60" width="150" color="#132B40">
                        <img contain src="../img/Logos/BitOfAdvice_logo_2.png" height="50"/>
                    </v-btn>
                </a>
                <v-spacer/>
                <!--Suchleiste-->
                <div id="searchbox" @keydown.enter="search">
                    <v-text-field v-model="searchText" outlined rounded dense color="#D9A566" label="search"
                                  id="txtsearch">
                    </v-text-field>
                </div>
            </v-row>
            <v-app-bar-nav-icon color="#D9A566" @click.stop="drawer = !drawer" v-on:click="updateUser"/>
        </v-app-bar>

        <!-------------------------Navigation-Drawer-------------------------------------------------->
        <v-navigation-drawer v-model="drawer" right temporary fixed color="#162a3b">

            <v-list-item style="background: #D9A566; height: 64px; width: 100%;">
                <!--wenn angemeldet -->
                <v-btn text v-if="this.authenticated" link :to="{ path: '/profile.json'}"
                       style="height: 80%; width: 100%;">
                    <v-list-item-avatar>
                        <v-img :src="photoURL" height="40" width="50"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{userData.userName}}</v-list-item-title>
                    </v-list-item-content>
                </v-btn>

                <!--wenn nicht angemeldet -->
                <v-list-item-title style="text-align: center" v-if="!this.authenticated">Get your Advice!
                </v-list-item-title>
            </v-list-item>

            <v-divider/>
            <br>

            <v-row no-gutters style="padding-left: 10%; padding-right: 5%;">
                <!--ANMELDUNG (wenn nicht angemeldet) -->
                <v-col v-if="!this.authenticated">
                    <registration style="width: 100%"/>
                </v-col>
                <v-col v-if="!this.authenticated">
                    <v-btn depressed color="#D9A566" link :to="{ path: '/login'}" style="width: 100%">Sign In</v-btn>
                </v-col>

                <!--ABMELDUNG (wenn angemeldet) -->
                <v-col v-if="this.authenticated">
                    <v-btn depressed color="#D9A566" v-on:click="signOut" style="width: 100%">Sign Out</v-btn>
                </v-col>
            </v-row>
            <br>
            <v-divider/>

            <!--MENÜPUNKTE-->
            <v-list dense>
                <v-list-item link :to="{ path: '/homepage'}">
                    <v-list-item-action>
                        <v-icon color="#D9A566">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="accent--text">Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link :to="{ path: '/postinglist'}">
                    <v-list-item-action>
                        <v-icon color="#D9A566">mdi-rocket</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="accent--text">PostingList</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="this.authenticated" link :to="{ path: '/profile.json'}">
                    <v-list-item-action>
                        <v-icon color="#D9A566">mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="accent--text">Profile</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-on:click="dialogprivacy = true">
                    <v-list-item-action>
                        <v-icon color="#D9A566">mdi-text</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="accent--text">Privacy Policy</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link :to="{ path: '/about'}">
                    <v-list-item-action>
                        <v-icon color="#D9A566">mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="accent--text">about us</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-------------------------Content------------------------------------------------------------>
        <v-content style="background: linear-gradient(to right, #fffbf4, #ffe6c6);">
            <div id="app">
                <!--DIALOG - PROFILE (derzeit nicht eingebunden)-->
                <v-dialog v-model="dialog" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                        >
                            <v-img
                                    src="https://randomuser.me/api/portraits/men/39.jpg"
                                    height="200px"
                            />

                            <v-card-title>
                                {{userData.first}} {{userData.last}}
                            </v-card-title>

                            <v-card-subtitle>
                                Profi - 1.024 erstellte Beiträge
                            </v-card-subtitle>
                        </v-card>
                    </v-card>
                </v-dialog>

                <!--DIALOG - PRIVACY POLICY-->
                <div class="text-center">
                    <v-dialog
                            v-model="dialogprivacy"
                            width="500"
                            persistent
                    >
                        <v-card>
                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title

                            >
                                Privacy Policy
                            </v-card-title>
                            <br>
                            <v-card-text style="font-size: 12px">
                                This privacy notice discloses the privacy practices for BitofAdvice. This privacy notice
                                applies solely to information collected by this website. It will notify you of the
                                following:

                                What personally identifiable information is collected from you through the website, how
                                it is used and with whom it may be shared.
                                What choices are available to you regarding the use of your data.
                                The security procedures in place to protect the misuse of your information.
                                How you can correct any inaccuracies in the information.
                                Information Collection, Use, and Sharing
                                We are the sole owners of the information collected on this site. We only have access
                                to/collect information that you voluntarily give us via email or other direct contact
                                from you. We will not sell or rent this information to anyone.

                                We will use your information to respond to you, regarding the reason you contacted us.
                                We will not share your information with any third party outside of our organization,
                                other than as necessary to fulfill your request, e.g. to ship an order.

                                Unless you ask us not to, we may contact you via email in the future to tell you about
                                specials, new products or services, or changes to this privacy policy.

                                Your Access to and Control Over Information
                                You may opt out of any future contacts from us at any time. You can do the following at
                                any time by contacting us via the email address or phone number given on our website:

                                See what data we have about you, if any.
                                Change/correct any data we have about you.
                                Have us delete any data we have about you.
                                Express any concern you have about our use of your data.
                                Security
                                We take precautions to protect your information. When you submit sensitive information
                                via the website, your information is protected both online and offline.

                                Wherever we collect sensitive information (such as credit card data), that information
                                is encrypted and transmitted to us in a secure way. You can verify this by looking for a
                                lock icon in the address bar and looking for "https" at the beginning of the address of
                                the Web page.

                                While we use encryption to protect sensitive information transmitted online, we also
                                protect your information offline. Only employees who need the information to perform a
                                specific job (for example, billing or customer service) are granted access to personally
                                identifiable information. The computers/servers in which we store personally
                                identifiable information are kept in a secure environment.
                            </v-card-text>

                            <v-divider/>

                            <v-card-actions>
                                <v-spacer/>
                                <v-btn
                                        color="primary"
                                        text
                                        @click="dialogprivacy = false"
                                >
                                    I accept
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>

                <!--ROUTER-VIEW (weiterer individueller Content)-->
                <router-view/>

            </div>
        </v-content>

        <!--FOOTER (mit sich aktualisierender Jahresanzeige)-->
        <v-footer
                fixed
                class="font-weight-medium"
                color="#D9A566"
        >
            <v-col
                    class="text-center"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong> HFU Beta</strong>
            </v-col>
        </v-footer>

    </v-app>
</template>

<script>
    import db from './db'
    import firebase from 'firebase';
    import registration from "./views/registration";

    export default {
        // Pagename
        name: 'LayoutsDemosBaselineFlipped',

        //benötigte Komponenten
        components: {registration},

        // entspricht den HTML-Attributen
        props: {
            source: String,
        },

        // Variablen-Speicher
        data: () => ({
            //für Anzeige des aktuellen Profilbilds
            photoURL: '',

            //für Sucheingabe
            searchText: '',

            //für verschiedene Dialogfelder
            valid: true,
            drawer: null,
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialogprivacy: true,

            //Für Nutzererfassung, -anzeige
            userData: {
                userName: '',
                first: '',
                last: '',
                mail: '',
                //password: '',
            },
            authenticated: false
        }),

        // interne Methoden
        methods: {
            //Nach Sucheingabe im Suchfeld
            search() {
                this.$store.commit('changeSearchHashtag', this.searchText.toUpperCase())
                this.updateUser()
                this.searchText = '';
                this.$router.push('/searchBlank');
            },

            //nur zT gebraucht
            validate: () => {
                if (this.$refs.form.validate()) {
                    this.register()
                        .then((data) => {
                            alert(data)
                        })

                }
            },
            register: () => {
                let docRef = db.collection('Users').doc(this.userData.firstname)
                docRef.set(this.userData)
                    .catch(error => console.debug('Error', error))
            },

            //Bei Start der Seite und nach Registration/Login
            updateUser() {
                var user = firebase.auth().currentUser;
                if (user) {
                    console.log(user.uid)
                    db.collection("Users").doc(user.uid).get().then(doc => {
                        this.userData = doc.data()
                        this.authenticated = true;
                        this.photoURL = user.photoURL;
                    }).catch(err => {
                        console.log('Error getting documents', err)
                    })
                } else {
                    this.authenticated = false;
                }
            },

            //Ausloggen
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.updateUser()
                        //TODO Soll "Beitrag erstellen" auch angezeigt werden wenn man nicht angemeldet ist?
                        this.$router.push('/');
                    });
            }
        },

        // Initialisierung
        created() {
            this.updateUser()
            this.$router.push({path: '/homepage'})
        }
    }


    //-----------------------------------------------//
    //  Viele Grüße an jeden, der das hier liest :)  //
    //-----------------------------------------------//


</script>

<style>
   #searchbox {
        position: fixed;
        right: 5%;
        top: 5%;
        width: 12em;
        max-width: 45%;
        height: 100%;
        max-height: 100%;
        margin-right: 1.3em;
        padding: 0.5em 0.1em 0.1em 0.5em;
    }
    #txtsearch {
        top: 0%;
        left: 0;
        padding: 0;
    }
</style>