<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" right temporary fixed color="#8F94A6">
        <!--<v-navigation-drawer v-model="drawer" right temporary fixed src="../img/Background/ocean.jpg">-->


            <!--wenn angemeldet -->
         <v-list-item @click.stop="dialog = true" >
             <v-list-item-avatar>
                 <v-img src="https://randomuser.me/api/portraits/men/39.jpg" height="40" width="50"/>
             </v-list-item-avatar>
             <v-list-item-content >
                 <v-list-item-title >Peter Olaf Droschbart</v-list-item-title>
             </v-list-item-content>
         </v-list-item>
            <v-divider/>
            <br>

                <v-row no-gutters >
                    <v-col><registration/></v-col>
                    <v-col><v-btn depressed color="#D9A566"  link :to="{ path: '/login'}" >Sign In</v-btn></v-col>
                </v-row>
                <br>
          <v-divider/>

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
                      <v-icon color="#D9A566">mdi-sort</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title class="accent--text">PostingList</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>

              <v-list-item link :to="{ path: '/views/Profilesettings'}">
                  <v-list-item-action>
                      <v-icon color="#D9A566">mdi-sort</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title class="accent--text">Profilesettings</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>

              <v-list-item link :to="{ path: '/profile.json'}">
                  <v-list-item-action>
                      <v-icon color="#D9A566">mdi-account</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title class="accent--text">Profile</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item v-slot:activator="{ on }" color="primary" dark v-on="on">Open Dialog>
                  <v-list-item-action>
                      <v-icon mdi-eye></v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title>Register</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>


          </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="#132B40" right dark>

          <a :to="{ path: '/homepage'}">
              <v-btn  link :to="{ path: '/homepage'}" x-large text height="60" width="150"> <img contain src="../img/Logos/BitOfAdvice_logo_2.png" height="50"/>
              </v-btn>

               </a>

          <v-spacer />
          <div id="searchbox" >
              <v-text-field outlined rounded dense color="#D9A566" label="search" id="txtsearch"> </v-text-field>
          </div>
          <v-btn icon class="mx-10" color="#D9A566">
          <v-icon >mdi-magnify</v-icon>
          </v-btn>
          <v-app-bar-nav-icon color="#D9A566" @click.stop="drawer = !drawer"/>

         <!--
         <div id="searchbox">
          <v-text-field filled rounded dense label="search" id="txtsearch"> </v-text-field>
      </div>
      <v-app-bar app color="#132B40" right dark>

         <a><img src="../img/Logos/BitOfAdvice_logo_2.png" height="536" width="1242" class="BitofadviceBar" /> </a>
         <div id="searchbox" class="d-flex d-inline-flex">
             <v-text-field outlined rounded dense label="search" id="txtsearch"> </v-text-field>
         </div>
          <v-btn link :to="{ path: '/homepage'}" x-large text height="60" width="150">
          </v-btn>
            <v-spacer></v-spacer>

                -->
      </v-app-bar>


      <v-content>

          <div id = "app">

              <!--PROFILE-->
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
                                Peter Olaf Droschbart
                            </v-card-title>

                            <v-card-subtitle>
                                Profi - 1.024 erstellte Beiträge
                            </v-card-subtitle>
                        </v-card>
                    </v-card>
                </v-dialog>

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

                          <v-card-text>
                              This privacy notice discloses the privacy practices for BitofAdvice. This privacy notice applies solely to information collected by this website. It will notify you of the following:

                              What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
                              What choices are available to you regarding the use of your data.
                              The security procedures in place to protect the misuse of your information.
                              How you can correct any inaccuracies in the information.
                              Information Collection, Use, and Sharing
                              We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.

                              We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.

                              Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.

                              Your Access to and Control Over Information
                              You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:

                              See what data we have about you, if any.
                              Change/correct any data we have about you.
                              Have us delete any data we have about you.
                              Express any concern you have about our use of your data.
                              Security
                              We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.

                              Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.

                              While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
                          </v-card-text>

                          <v-divider></v-divider>

                          <v-card-actions>
                              <v-spacer></v-spacer>
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
              <!--
                SIGN UP
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
                            <v-form ref="form" v-model="valid">
                            <v-row>
                                <v-col cols="16" sm="8" md="6">
                                    <v-text-field label="First name" v-model="userdata.firstname" required solo/>
                                </v-col>

                                <v-col cols="16" sm="8" md="6">
                                    <v-text-field
                                            label="Last name*"
                                            v-model="userdata.lastname"
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
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />

                            <v-col>
                              wenn nicht angemeldet
                                <v-list-item @click.stop="threeToTwo">
                                    <v-list-item-content>
                                        <v-list-item-title>Sign in</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-spacer/>
                            <v-btn color="blue darken-1" text  @click.stop="validate">Register & Login</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>

               SIGN IN
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
                            <v-form ref="form2">
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
                                wenn nicht angemeldet
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
                </v-dialog>-->

                <router-view/>
            </div>
        </v-content>


    </v-app>
</template>

<script>



    import db from './db'

    import Template from "./views/Template";
    import registration from "./views/registration";


    export default {






        // gebt jeder Page einen eigenen Namen
        name: 'LayoutsDemosBaselineFlipped',
        components: {registration},
        // benötigte Komponenten


        // entspricht den HTML-Attributen
        props: {
            source: String,
        },

        // Variablen-Speicher
        data: () => ({
            valid: true,
            drawer: null,
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialogprivacy: true,

        }),

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            validate: () => {
                if (this.$refs.form.validate()) {
                    this.register()
                        .then((data) => {
                            alert(data)
                        })

                }
            },

            register: () => {

                let docRef = db.collection('Users').doc(this.userdata.firstname)
                docRef.set(this.userdata)
                    .catch(error => console.debug('Error', error))

            },

            twoToThree: function () {
                this.dialog2 = true;
                this.dialog3 = false;
            },

            threeToTwo: function () {
                this.dialog2 = false;
                this.dialog3 = true;
            }
        },

        // Initialisierung
        created() {
            this.$router.push({name: 'homepage'})
        }
    }
</script>

<style>
    {
        primary: '#1976D2';
        secondary: '#424242';
        accent: '#D9A566';
        error: '#FF5252';
        info: '#2196F3';
        success: '#4CAF50';
        warning: '#FFC107';
    }





    #searchbox{

        position: absolute;
        right: 5%;
        top: 0%;
        width: 15em;
        height: 100%;
        margin: 0;
        padding: 0.7em 0.1em 0.1em 0.5em;

    }
    #txtsearch{
        top: 0%;
        left: 0;
        padding: 0;
    }


</style>